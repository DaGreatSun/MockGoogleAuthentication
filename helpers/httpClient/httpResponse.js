import ERROR from "@constants/errorCode";

/**
 *
 * @param {*} res http response
 * @param {String} message OPTIONAL: leave empty/null unless needed
 */
const httpResponseBadRequest = (res, message) => {
  res.status(ERROR.BAD_REQUEST.CODE).json({
    code: ERROR.BAD_REQUEST.CODE,
    success: false,
    message: message ?? "",
    data: {},
  });
};

/**
 *
 * @param {*} res http response
 * @param {*} data any form of data to be returned to client-side
 * @param {String} message OPTIONAL: leave empty/null unless needed
 */
const httpResponseSuccess = (res, data, message) => {
  res.status(ERROR.OK.CODE).json({
    code: ERROR.OK.CODE,
    success: true,
    message: message ?? "",
    data: data,
  });
};

/**
 * Dynamic http response codes to be processed, add a type of code to be handled
 * in the file /constants/errorCode.js and /helpers/httpClient/onResponse.js
 *
 * @param {*} res http response
 * @param {Number} code http response code
 * @param {*} data any form of data to be returned to client-side
 * @param {String} message OPTIONAL: leave empty/null unless needed
 * @param {Boolean} success OPTIONAL: defaults to false
 */
const httpResponseDynamic = (res, code, data, message, success) => {
  res.status(code).json({
    code: code,
    success: success ?? false,
    message: message ?? "",
    data: data,
  });
};

const httpResponseUserExp = (res) => {
  res.status(ERROR.USER_SESSION_EXP.CODE).json({
    code: ERROR.USER_SESSION_EXP.CODE,
    success: false,
    message: "",
    data: {},
  });
};

const httpResponseUnauthorized = (res) => {
  res.status(ERROR.UNAUTHORIZED.CODE).json({
    code: ERROR.UNAUTHORIZED.CODE,
    success: false,
    message: "",
    data: {},
  });
};

export default {
  httpResponseBadRequest,
  httpResponseSuccess,
  httpResponseDynamic,
  httpResponseUserExp,
  httpResponseUnauthorized,
};
