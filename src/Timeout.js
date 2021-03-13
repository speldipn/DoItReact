import React from "react";

class Timeout extends React.Component {
  componentDidMount() {
    this.test4();
  }

  test = () => {
    function work(onDone) {
      setTimeout(() => onDone("work done!"), 100);
    }

    function work2(onDone) {
      setTimeout(() => onDone("work2 done!"), 200);
    }

    function work3(onDone) {
      setTimeout(() => onDone("work3 done!"), 300);
    }

    function urgentWork() {
      console.log("Urgent work");
    }

    work((s) => console.log(s));
    work2((s) => console.log(s));
    work3((s) => console.log(s));
    urgentWork();
  };

  test2 = () => {
    function work(onDone) {
      setTimeout(() => onDone("work done!"), 100);
    }

    function work2(onDone) {
      setTimeout(() => onDone("work2 done!"), 300);
    }

    function work3(onDone) {
      setTimeout(() => onDone("work3 done!"), 600);
    }

    function urgentWork() {
      console.log("Urgent work");
    }

    work(function(msg1) {
      console.log("done after 100ms: " + msg1);
      work2(function(msg1) {
        console.log("done after 300ms: " + msg1);
        work3(function(msg1) {
          console.log("done after 600ms: " + msg1);
        });
      });
    });

    urgentWork();
  };

  test3 = () => {
    const work1 = () =>
      new Promise((resolve) => {
        setTimeout(() => resolve("work1 done!"), 100);
      });

    const work2 = () =>
      new Promise((resolve) => {
        setTimeout(() => resolve("work2 done!"), 200);
      });

    const work3 = () =>
      new Promise((resolve) => {
        setTimeout(() => resolve("work3 done!"), 300);
      });

    const nextWorkOnDone = (msg1) => {
      console.log("done after 100ms:" + msg1);
      // create work2
      return work2();
    };

    const urgentWork = () => {
      console.log("Urgent work");
    };

    work1()
      .then(nextWorkOnDone)
      .then((msg2) => {
        console.log("done after 200ms: " + msg2);
        // create work3
        return work3();
      })
      .then((msg3) => {
        console.log("done after 300ms: " + msg3);
      });

    urgentWork();
  };

  test4 = () => {
    const work1 = () =>
      new Promise((resolve) => {
        setTimeout(() => resolve("work1 done!"), 100);
      });

    const work2 = () =>
      new Promise((resolve) => {
        setTimeout(() => resolve("work2 done!"), 200);
      });

    const work3 = () =>
      new Promise((resolve) => {
        setTimeout(() => resolve("work3 done!"), 300);
      });

    const work1and2 = () =>
      work1().then((msg1) => {
        console.log("done after 100ms: " + msg1);
        return work2();
      });

    work1and2()
      .then((msg2) => {
        console.log("done after 200ms :" + msg2);
        return work3();
      })
      .then((msg3) => {
        console.log("done after 600ms: " + msg3);
      });
  };

  render() {
    return (
      <div>
        <h1>Timeout</h1>
      </div>
    );
  }
}

/*
class Promise {
  constructor(fn) {
    const resolve = (...args) => {
      if (typeof this.onDone === "function") {
        this.onDone(...args);
      }
      if (typeof this.onComplete === "function") {
        this.onComplete();
      }
    };
    const reject = (...args) => {
      if (typeof this.onError === "function") {
        this.onError(...args);
      }
      if (typeof this.onComplete === "function") {
        this.onComplete();
      }
    };
    fn(resolve, reject);
  }
  then(onDone, onError) {
    this.onDone = onDone;
    this.onError = onError;
    return this;
  }
  catch(onError) {
    this.onError = onError;
    return this;
  }
  finally(onComplete) {
    this.onComplete = onComplete;
    return this;
  }
}*/

export default Timeout;
