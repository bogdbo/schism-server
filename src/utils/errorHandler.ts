import * as httpStatus from 'http-status';
import { ErrorRequestHandler, NextFunction, RequestHandler } from 'express';

// handle not found errors
export const notFound: RequestHandler = (req, res, next) => {
  res.status(httpStatus.NOT_FOUND);
  res.json({
    success: false,
    message: 'Requested Resource Not Found',
  });
  res.end();
};

// handle internal server errors
export const internalServerError: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR);
  res.json({
    message: err.message,
    extra: err.extra,
    errors: err,
  });
  res.end();
};
