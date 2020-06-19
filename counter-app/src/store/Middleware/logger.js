// Creating Logger Middleware
// const logger = store => next => action => console.log("Middleware works!")
const logger = store => {
    return next => {
      return action => {
        console.log("[MIDDLEWARE WORKS]")
        console.log("[MIDDLEWARE- STATE]", store.getState());
        console.log("[MIDDLEWARE - ACTION]", action);
        next(action);
      }
    }
  }

  export default logger;