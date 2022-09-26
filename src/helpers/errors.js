class NodeJs45Error extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}
class ValidationError extends NodeJs45Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class WrongParametersError extends NodeJs45Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class NotAuthorizedError extends NodeJs45Error {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

module.exports = {
  NodeJs45Error,
  ValidationError,
  WrongParametersError,
  NotAuthorizedError,
};
