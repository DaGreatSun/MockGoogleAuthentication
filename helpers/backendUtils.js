import bcrypt from "bcrypt";
/************************************************************************************/
// CONST
/************************************************************************************/
const bcryptSalt = 10;

/************************************************************************************/
// FUNCTIONS
/************************************************************************************/

export function encryptPassword(plaintextPassword) {
  return bcrypt.hash(plaintextPassword, bcryptSalt);
}

export function getSixDigitRandom() {
    return Math.random().toString().substring(2, 8);
}