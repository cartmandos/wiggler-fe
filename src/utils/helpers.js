/**
 * a try-catch wrapper
 * @param {callbackfn} fn - callback function
 * @param {callbackfn} errHandler - error handler function
 */
export const tryCatchWrapper = (
  fn,
  errHandler = (err) => {
    console.error(err);
    throw err;
  },
) => {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (err) {
      errHandler(err);
    }
  };
};
