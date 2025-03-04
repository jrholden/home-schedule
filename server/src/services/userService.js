import {
  validateEmail,
  validatePassword,
  validateUserConfig,
  validateUserData,
  validateAuthRole
} from "../validation/userValidation.js";

import {
  hashPassword,
  verifyPassword
} from "../auth/passwordHelper.js";

const validateNewUser = async (allUserData) => {
  const {email, authRole, password, userData, userConfig} = allUserData;

  if(!(await validateEmail(email))){
    console.log("email failed")
    return false;
  }
  if(!(await validatePassword(password))){
    console.log("password failed")
    return false;
  }
  if(!(await validateUserData(userData))){
    console.log("userData failed")
    return false;
  }
  if(!(await validateUserConfig(userConfig))){
    console.log("userConfig failed")
    return false;
  }
  if(!(await validateAuthRole(authRole))){
    console.log("authRole failed")
    return false;
  }

  return true
}

const encodePassword = async (password) => {
  let encodedPassword = await hashPassword(password);

  return encodedPassword;
}
const verifyUserCreds  = async (hashedPassword, password) => {
  let result = await verifyPassword(hashedPassword, password);

  return result;
}

export {
  validateNewUser,
  encodePassword,
  verifyUserCreds
}