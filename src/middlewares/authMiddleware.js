const jsonwebtoken = require('jsonwebtoken');
const {NotAuthorizedError} = require('../helpers/errors');

const authMiddleware = (req, res, next) => {
  try {
    const {authorization} = req.headers;
    if (!authorization) {
      next(new NotAuthorizedError('Please,provide a token'));
    }
    const [, token] = req.headers['authorization'].split(' ');
    if (!token) {
      next(new NotAuthorizedError('Please,provide a token'));
    }

    const user = jsonwebtoken.decode(token, process.env.JWT_SECRET);
    req.token = token;
    req.user = user;
    next();
  } catch (err) {
    next(new NotAuthorizedError('Invalid token'));
  }
};

module.exports = {authMiddleware};
