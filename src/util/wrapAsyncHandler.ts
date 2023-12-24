// see https://stackoverflow.com/questions/51391080/handling-errors-in-express-async-middleware

import type { Request, Response, NextFunction } from "express";
/**
 * Express doesn't catch and handle uncaught promise rejections from async route handlers.
 * This utility will allow the handler to give control to the next middleware if an uncaught error
 * occurs.
 * @param fn - an async route handler
 * @returns the same route handler that will catch any errors that occur inside it and call `next()`
 */
export function wrapAsyncHandler<T>(
  fn: (req: Request<T>, res: Response, next: NextFunction) => Promise<void>
) {
  return (req: Request<T>, res: Response, next: NextFunction): void => {
    fn(req, res, next).catch(next);
  };
}
