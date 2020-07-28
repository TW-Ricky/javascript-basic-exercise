/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable prefer-const */
/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.
  for (let i = 0; i < promises.length; i++) {
    if (!isPromise(promises[i])) {
      throw new Error('Not all elements are promises.');
    }
  }
  return Promise.allSettled(promises).then((results) => {
    for (let i = 0; i < results.length; i++) {
      const result = results[i];
      if (result.status === 'rejected') {
        return Promise.reject();
      }
    }
    return Promise.resolve();
  });
}


function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function')
    && typeof obj.then === 'function';
}
