/**
 * Logic heavily borrowed from bootstrap
 * https://github.com/twbs/bootstrap/blob/master/js/src/collapse.js
 */

import "./closest-polyfill";

const CONTROLLER_SELECTOR = '[data-jevin-component="collapsible-controller"]';
const CONTROLLER_TARGET = "data-jevin-target";
const EXPAND_CLASS = "jevin_expand";
const COLLAPSING_CLASS = "jevin_collapsing";
const COLLAPSE_CLASS = "jevin_collapse";
const DURATION = 300;
const SAFETY_DELAY = 50; // We can avoid this by waiting for transition events, but support is not well documented
function reflow(element) {
  /**
   * I had to look this up. This is one of bootstraps utility methods, and it's purpose is to force a redraw, which
   * here allows for immediate transition updates of height, instead of waiting for next frame with setTimeout or
   * requestAnimationFrame, etc...
   * https://gist.github.com/paulirish/5d52fb081b3570c81e3a
   * https://github.com/twbs/bootstrap/blob/master/js/src/util/index.js
   */
  return element.offsetHeight;
}

if (typeof document !== "undefined") {
  document.body.addEventListener("click", clickHandler);
}

const activeAnimations = {};

function clickHandler(event) {
  const controller = event.target.closest(CONTROLLER_SELECTOR);
  if (!controller) return;

  const targetSelector = controller.getAttribute(CONTROLLER_TARGET);
  if (!targetSelector) return;

  const target = document.querySelector(targetSelector);
  if (!target) return;

  if (activeAnimations[targetSelector]) {
    return;
  } else {
    activeAnimations[targetSelector] = true;
  }

  toggle(controller, targetSelector, target);
}

function toggle(controller, targetSelector, target) {
  if (target.classList.contains(EXPAND_CLASS)) {
    collapse(controller, targetSelector, target);
  } else {
    expand(controller, targetSelector, target);
  }
}

function collapse(controller, targetSelector, target) {
  const height = target.getBoundingClientRect().height;
  controller.setAttribute("aria-expanded", false);
  target.classList.add(COLLAPSING_CLASS);
  target.classList.remove(COLLAPSE_CLASS);
  target.classList.remove(EXPAND_CLASS);
  target.style.height = `${height}px`;
  reflow(target);
  target.style.height = "";

  setTimeout(function onComplete() {
    target.classList.add(COLLAPSE_CLASS);
    target.classList.remove(COLLAPSING_CLASS);
    activeAnimations[targetSelector] = false;
  }, DURATION + SAFETY_DELAY);
}

function expand(controller, targetSelector, target) {
  controller.setAttribute("aria-expanded", true);
  target.classList.add(COLLAPSING_CLASS);
  target.classList.remove(COLLAPSE_CLASS);
  const height = target.scrollHeight;
  target.style.height = `${height}px`;

  setTimeout(function onComplete() {
    target.classList.remove(COLLAPSING_CLASS);
    target.classList.add(COLLAPSE_CLASS);
    target.classList.add(EXPAND_CLASS);
    activeAnimations[targetSelector] = false;
    target.style.height = "";
  }, DURATION + SAFETY_DELAY);
}
