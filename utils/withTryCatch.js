
const tryCatchWrapper = (fn) => async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      console.log(error);
    }
  }

module.exports = {
    tryCatchWrapper
}