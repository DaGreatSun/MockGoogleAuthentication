import ERROR from "@constants/errorCode";

export function onResponse(code, msg) {
  let retMsg = "Unexpected Error Occured!";

  switch (code) {
    case ERROR.OK.CODE:
      retMsg = ERROR.OK.MESSAGE;
      break;
    //HTTP ERROR
    case ERROR.BAD_REQUEST.CODE:
      retMsg = ERROR.BAD_REQUEST.MESSAGE;
      break;
    case ERROR.UNAUTHORIZED.CODE:
      retMsg = ERROR.UNAUTHORIZED.MESSAGE;
      break;
    case ERROR.FORBIDDEN.CODE:
      retMsg = ERROR.FORBIDDEN.MESSAGE;
      break;
    case ERROR.NOT_FOUND.CODE:
      retMsg = ERROR.NOT_FOUND.MESSAGE;
      break;
    case ERROR.USER_SESSION_EXP.CODE:
      retMsg = ERROR.USER_SESSION_EXP.MESSAGE;
      break;
  }

  if (retMsg !== "Unexpected Error Occured!" && msg && msg !== "") {
    retMsg = retMsg.replace("!", "");
    retMsg += " : " + msg;
  }

  return retMsg;
}
