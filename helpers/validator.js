export function validateEmail(emailAdress) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
}

export function validatePhone(phone) {
  let regexPhone = /^(\+?6?01)[0-9]-{0,1}[0-9]{7,8}$/;
  // let regexPhone = /^(\+?6?01)[02-46-9]-{0,1}[0-9]{7}$|^(\+?6?01)[1]-{0,1}[0-9]{8}$/;
  if (phone.match(regexPhone)) {
    return true;
  } else {
    return false;
  }
}

export function validatePassword(password) {
  //let regexPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;
  let regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/;
  if (password.match(regexPassword)) {
    return true;
  } else {
    return false;
  }
}
