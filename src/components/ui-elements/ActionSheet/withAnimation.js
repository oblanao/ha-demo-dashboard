import React from "react";
import { CSSTransition } from "react-transition-group";

const withSlideAnimation = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <CSSTransition
          in={this.props.show}
          timeout={500}
          classNames="slide"
          unmountOnExit
        >
          <WrappedComponent {...this.props} />
        </CSSTransition>
      );
    }
  };
};

export default withSlideAnimation;
