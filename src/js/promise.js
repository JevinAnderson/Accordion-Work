/**
 * Promise ponyfill for IE, no support in any version of IE
 */

import promisePolyfill from "promise-polyfill";

let exportedPromise = promisePolyfill;

if (typeof Promise !== "undefined") {
  exportedPromise = Promise;
}

export default exportedPromise;
