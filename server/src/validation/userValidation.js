import validator from "validator";
import {UserRole} from "../shared/enums.js";

const validateEmail = async (email) => {
  let status = true;
  if (!validator.isEmail(email)) {
    status = false;
  }
  return status;
}
const validatePassword = async (password) => {
  let status = true;
  if (!validator.isStrongPassword(password)) {
    status = false;
  }
  return status;
}
const validateUserData = async (userData) => {
  const { firstName, lastName, address } = userData;
  let status = true;
  if (!firstName || !lastName || !address) {
    status = false;
  }

  return status;
}
const validateUserConfig = async (userConfig) => {
  //needs to be an array of { name: string, value: json}
  let status = true;
  if (!Array.isArray(userConfig)) {
    return false;
  }
  for (const config of userConfig) {
    if (typeof config.name !== 'string' || typeof config.value !== 'object') {
      status = false;
      break;
    }
  }
  return status;
}

const validateAuthRole = async (authRole) => {
  let status = true;
  if (!Object.values(UserRole).includes(authRole)) {
    status = false;
  }
  return status;
}

export {
  validateEmail,
  validatePassword,
  validateUserConfig,
  validateUserData,
  validateAuthRole
}