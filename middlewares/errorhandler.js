const { CustomError, NotFoundError, BadRequestError } = require('../errors/customErrors');

// the error handler function
const errorhandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err instanceof CustomError) {
    // Return specific error response for CustomError
    res.status(err.status).json({
      status: 'error',
      message: err.message
    });
  } else if (err instanceof NotFoundError) {
    // Return 404 response for NotFoundError
    res.status(404).json({ error: 'No matching topics found' });
  } else {
    // Log the error stack trace for internal server errors
    console.error('Internal Server Error:', err);
    // Return generic 500 response for other errors
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error'
    });
  }
};

module.exports = errorhandler;

// Export the error handler function as the default export
module.exports = errorhandler;
