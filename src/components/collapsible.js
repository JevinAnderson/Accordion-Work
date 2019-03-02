import React, { Component } from "react";
import PropTypes from "prop-types";

const deriveTransition = duration => `height ${duration}ms ease-out`;

class Collapsible extends Component {
  animating = false;
  mounted = false;
  state = {
    height: "auto",
    collapsed: this.props.collapsed,
    transition: deriveTransition(this.props.duration)
  };

  componentDidMount() {
    this.mounted = true;
  }

  componentDidUpdate(prevProps) {
    if (this.animating) return;
    if (prevProps.collapsed === this.props.collapsed) return;

    if (this.props.collapsed) {
      this.collapse();
    } else {
      this.expand();
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateState = state =>
    new Promise(resolve => {
      if (!this.mounted) return resolve();

      this.setState(state, resolve);
    });

  collapse = () => {
    if (this.animating) return;
    this.animating = true;

    this.captureScrollHeight()
      .then(this.removeTransition)
      .then(this.setFixedHeight)
      .then(this.restoreTransition)
      .then(this.setZeroHeight)
      .then(this.waitForDuration)
      .then(this.hideContent)
      .then(this.stopAnimating)
      .then(this.checkForExpand);
  };

  captureScrollHeight = () =>
    new Promise(resolve => {
      if (!this.mounted) {
        return resolve(this.scrollHeight);
      }
      this.scrollHeight = this.container.scrollHeight;
      resolve(this.scrollHeight);
    });

  removeTransition = () =>
    new Promise(resolve => {
      this.updateState({ transition: undefined }).then(() => {
        requestAnimationFrame(resolve);
      });
    });

  setFixedHeight = () =>
    new Promise(resolve => {
      this.updateState({ height: `${this.scrollHeight}px` }).then(() => {
        requestAnimationFrame(resolve);
      });
    });

  restoreTransition = () =>
    new Promise(resolve => {
      this.updateState({
        transition: deriveTransition(this.props.duration)
      }).then(() => {
        requestAnimationFrame(resolve);
      });
    });

  setZeroHeight = () =>
    new Promise(resolve => {
      this.updateState({ height: "0px" }).then(() => {
        requestAnimationFrame(resolve);
      });
    });

  waitForDuration = () =>
    new Promise(resolve => {
      let end;

      const handler = now => {
        if (!end) {
          end = now + this.props.duration;
        }

        if (now > end || !this.mounted) {
          resolve(now);
        } else {
          requestAnimationFrame(handler);
        }
      };

      requestAnimationFrame(handler);
    });

  hideContent = () =>
    new Promise(resolve => {
      this.updateState({ display: "none" }).then(() => {
        requestAnimationFrame(resolve);
      });
    });

  stopAnimating = () =>
    new Promise(resolve => {
      this.animating = false;
      resolve(this.animating);
    });

  checkForExpand = () => {
    if (!this.props.collapsed) {
      this.expand();
    }
  };

  displayContent = () =>
    new Promise(resolve => {
      this.updateState({ display: undefined }).then(() => {
        requestAnimationFrame(resolve);
      });
    });

  expand = () => {
    if (this.animating) return;
    this.animating = true;

    this.displayContent()
      .then(this.captureScrollHeight)
      .then(this.setFixedHeight)
      .then(this.waitForDuration)
      .then(this.removeHeight)
      .then(this.stopAnimating)
      .then(this.checkForCollapse);
  };

  removeHeight = () =>
    new Promise(resolve => {
      this.updateState({ height: null }).then(() => {
        requestAnimationFrame(resolve);
      });
    });

  checkForCollapse = () => {
    if (this.props.collapsed) {
      this.collapse();
    }
  };

  containerRef = div => {
    this.container = div;
  };

  getDerivedStyle = () => ({
    display: this.state.display,
    height: this.state.height,
    overflow: "hidden",
    transition: this.state.transition
  });

  render() {
    const { style, collapsed, duration, ...rest } = this.props;

    if (this.state.display === "none") return null;

    return (
      <div
        {...rest}
        style={{ ...style, ...this.getDerivedStyle() }}
        ref={this.containerRef}
      />
    );
  }

  static propTypes = {
    collapsed: PropTypes.bool,
    duration: PropTypes.number,
    style: PropTypes.object
  };

  static defaultProps = {
    duration: 300,
    style: {}
  };
}

export default Collapsible;
