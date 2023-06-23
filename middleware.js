const checkMiddleware = (req, resp, next) => {
    if (!req?.query?.age) {
      resp.send("Middleware message : Please provide your age to proceed!");
    }
  
    if (req?.query?.age && req?.query?.age < 18) {
      resp.send(`Middleware message : You cannot access this page! because you're now only ${req?.query?.age} year old.`);
    } 
  
    else {
      next();
    }
  };

  module.exports = checkMiddleware;