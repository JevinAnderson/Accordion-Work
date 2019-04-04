import { isString, isElement } from './types';

const EXPAND_CLASS = 'jevin_expand';
const COLLAPSING_CLASS = 'jevin_collapsing';
const COLLAPSE_CLASS = 'jevin_collapse';
const DURATION = 300;
const SAFETY_DELAY = 50; // We can avoid this by waiting for transition events, but support is not well documented

function reflow(element) {
  return element.offsetHeight;
}

function throwError(message) {
  throw new Error(`Collapsible Error: ${message}`);
}

function getTargetNode(target) {
  let node;
  if (isString) {
    node = document.querySelector(target);
  } else if (isElement(target)) {
    node = target;
  }

  if (!isElement(node)) {
    throwError(
      'Target not valid. Target must be a valid queryselector, or an html element.'
    );
  }
  return node;
}

/**
 *
 * Collapsible: Collapsible will be a function that takes a queryselect or a dom node that returns a
 * javascript object with the following API:
 *
 * isAnimating: bool
 * isExpanded: bool
 * isCollapsed: bool
 * isExpanding: bool
 * isCollapsing: bool
 * collapse: func -> You can use it with no arguments to collapse an expanded element
 * expand: func -> you can use it with no arguments to exand a collapsed element
 * subscribe: func -> Expert use case only, but likely needed for an accordion component to work efficiently
 */

export function Collapsible(target) {
  const node = getTargetNode(target);

  let isActive = false;
  let isExpanded = node.classList.contains(EXPAND_CLASS);
  let subscribers = [];

  function publish() {
    subscribers.forEach(consumer => {
      consumer(collapsible);
    });
  }

  var collapsible = {
    get isAnimating() {
      return isActive;
    },
    get isExpanded() {
      return isExpanded;
    },
    get isCollapsed() {
      return !collapsible.isExpanded;
    },
    get isExpanding() {
      return isActive && collapsible.isCollapsed;
    },
    get isCollapsing() {
      return !collapsible.isExpanding;
    },
    collapse() {
      if (isActive || !isExpanded) return;
      isActive = true;
      publish();
      const height = node.getBoundingClientRect().height;
      node.classList.add(COLLAPSING_CLASS);
      node.classList.remove(COLLAPSE_CLASS);
      node.classList.remove(EXPAND_CLASS);
      node.style.height = `${height}px`;
      reflow(node);
      node.style.height = '';
      // Would probably be better to use request animation frame here, but setTimeout has better support
      setTimeout(function onComplete() {
        node.classList.add(COLLAPSE_CLASS);
        node.classList.remove(COLLAPSING_CLASS);
        isActive = false;
        isExpanded = false;
        publish();
      }, DURATION + SAFETY_DELAY);
    },
    expand() {
      if (isActive || isExpanded) return;
      isActive = true;
      publish();
      node.classList.add(COLLAPSING_CLASS);
      node.classList.remove(COLLAPSE_CLASS);
      const height = node.scrollHeight;
      node.style.height = `${height}px`;
      // Would probably be better to use request animation frame here, but setTimeout has better support
      setTimeout(function onComplete() {
        node.classList.remove(COLLAPSING_CLASS);
        node.classList.add(COLLAPSE_CLASS);
        node.classList.add(EXPAND_CLASS);
        node.style.height = '';
        isActive = false;
        isExpanded = true;
        publish();
      }, DURATION + SAFETY_DELAY);
    },
    subscribe(subscriber) {
      subscribers.push(subscriber);
      return function unsubscribe() {
        subscribers = subscribers.filter(x => x !== subscriber);
      };
    }
  };

  return collapsible;
}
