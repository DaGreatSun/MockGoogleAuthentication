const OK = { CODE: 200, MESSAGE: "Success!" };

const BAD_REQUEST = { CODE: 400, MESSAGE: "Bad Request!" };
const UNAUTHORIZED = { CODE: 401, MESSAGE: "Unauthorized Access!" };
const FORBIDDEN = { CODE: 403, MESSAGE: "Forbidden!" };
const NOT_FOUND = { CODE: 404, MESSAGE: "Error Not Found!" };
const USER_SESSION_EXP = {
  CODE: 419,
  MESSAGE: "User Session Expired! Login again to continue",
};

export default {
  OK,

  // Default Errors
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  USER_SESSION_EXP,

  // Dynamic Errors here
};
