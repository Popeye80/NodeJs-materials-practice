// const addTwoNumbers = (a, b) => {
//   return a + b;
// };

// const {request} = require('express');

// describe('Addition service test', () => {
//   it('Add two valid numbers', () => {
//     const firstNumber = 1;
//     const secondNumber = 1;
//     const addTwoNumbersResult = addTwoNumbers(firstNumber, secondNumber);
//     expect(addTwoNumbersResult).toEqual(firstNumber + secondNumber);
//   });

//   it('Add two 111 numbers', () => {
//     const firstNumber = -10;
//     const secondNumber = 1;
//     const addTwoNumbersResult = addTwoNumbers(firstNumber, secondNumber);
//     expect(addTwoNumbersResult).toEqual(firstNumber + secondNumber);
//   });
// });
// valid case
const {authMiddleware} = require('../src/middlewares/authMiddleware.js');
const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();
const {NotAuthorizedError} = require('../src/helpers/errors');

describe('Auth middleware test', () => {
  it('should call  next(), add user and token properties to req object', () => {
    const user = {
      _id: '1',
      createdAt: new Date().getTime(),
    };

    const token = jsonwebtoken.sign(
        {
          _id: user._id,
          createdAt: user.createdAt,
        },
        process.env.JWT_SECRET
    );

    const mReq = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    const mRes = {};
    const mockNext = jest.fn();
    authMiddleware(mReq, mRes, mockNext);

    expect(mReq.token).toEqual(token);
    expect(mReq.user._id).toEqual(user._id);
    expect(mReq.user.createdAt).toEqual(user.createdAt);
    expect(mockNext).toHaveBeenCalled();
  });

  // not valid case
  it('should call next() with error in case authorization header is ab', () => {
    const mReq = {
      headers: {},
    };

    const mRes = {};
    const mockNext = jest.fn();
    authMiddleware(mReq, mRes, mockNext);

    expect(mockNext).toHaveBeenCalledWith(
        new NotAuthorizedError('Please,provide a token')
    );
  });
});
