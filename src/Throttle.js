import React from "react";

class Throttle extends React.Component {
  componentDidMount() {
    console.log("componentDidMount()");
    this.test();
  }

  test = () => {
    function throttle(func, delay) {
      let lastFunc;
      let lastRan;
      return function(...args) {
        const context = this;
        if (!lastRan) {
          func.call(context, ...args);
          lastRan = Date.now();
        } else {
          if (lastFunc) clearTimeout(lastFunc);
          lastFunc = setTimeout(function() {
            if (Date.now() - lastRan >= delay) {
              func.call(context, ...args);
              lastRan = Date.now();
            }
          }, delay - (Date.now() - lastRan));
        }
      };
    }

    var checkPosition = () => {
      const offset = 500;
      const currentScrollPosition = window.pageYOffset;
      const pageBottomPosition =
        document.body.offsetHeight - window.innerHeight - offset;
      if (currentScrollPosition >= pageBottomPosition) {
        console.log("next page loading...");
      }
    };

    var infiniteScroll = throttle(checkPosition, 300);
    window.addEventListener("scroll", infiniteScroll);
  };

  render() {
    return (
      <div>
        <h1>Throttle</h1>
      </div>
    );
  }
}

export default Throttle;
