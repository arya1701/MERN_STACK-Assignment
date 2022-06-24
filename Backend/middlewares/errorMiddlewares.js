// we dont want a HTML code in the postman when error occured
// we created a middle for customizing error
// suppose when routes is not found

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalURL} `);
  res.status(404);
  next(error);
};
// for general error,

const errorHandlor = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = { notFound, errorHandlor };
