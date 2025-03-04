import argon2 from "argon2";

const hashPassword = async (password) => {
  try {
    const hash = await argon2.hash(password);
    return hash;
  } catch (err) {
    console.error(err);
  }
}

const verifyPassword = async (hash, password) => {
  try {
    const match = await argon2.verify(hash, password);
    return match;
  } catch (err) {
    console.error(err);
  }
}

export {
  hashPassword,
  verifyPassword
}