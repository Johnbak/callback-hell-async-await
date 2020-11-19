// Import stylesheets
import "./style.css";

//1. How asynchonouse code work in js
(() => {
  // function simulateAsyncApi(text, timeout) {
  //   setTimeout(() => {
  //     console.log(text);
  //   }, timeout);
  // }
  // simulateAsyncApi("A", 1000);
  // simulateAsyncApi("B", 500);
  // simulateAsyncApi("C", 100);
  //callback most use in node.js
  function simulateAsyncApi(text, timeout, callback) {
    setTimeout(() => {
      console.log(text);
      if (callback) {
        callback();
      }
    }, timeout);
  }
  //This is callback Hell \\m//
  // simulateAsyncApi("A", 1000, () => {
  //   simulateAsyncApi("B", 500, () => {
  //     simulateAsyncApi("C", 100);
  //   });
  // });

  //3.Promise

  function simulateAsyncApiPromise(text, timeout) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (text === "D") return reject(`${text} got rejected`);
        console.log(text);
        resolve();
      }, timeout);
    });
  }

  // simulateAsyncApiPromise("A", 1000)
  //   .then(() => {
  //     return simulateAsyncApiPromise("B", 500);
  //   })
  //   .then(() => {
  //     return simulateAsyncApiPromise("C", 100);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });

  //Async , Await

  async function run() {
    try {
      await simulateAsyncApiPromise("A", 1000);
      await simulateAsyncApiPromise("B", 500);
      await simulateAsyncApiPromise("C", 500);
      await simulateAsyncApiPromise("D", 400);
    } catch (error) {
      console.error(error);
    }
  }
  run();
})();
