import { UserRole, ItemType } from "../shared/enums.js"
import jwt from 'jsonwebtoken';
import User from "../models/User.js";
import {
  validateNewUser,
  encodePassword,
  verifyUserCreds
} from "../services/userService.js";


const createToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY });
}

const getUser = async (req, res) => {
  const { _id } = req.body;
  try {
    const user = await User.findById(_id);

    res.status(200).json(user);
  } catch (error) {
    console.error("Error Getting: " + _id, error);
    res.status(400).json({ error: error });
  }
}

const loginUser = async (req, res) => {

}

const saveUser = async (req, res) => {
  const { email, password, authRole = UserRole.USER } = req.body;
  try {
    if (!email || !password) {
      throw new Error("Email or Password required when adding user");
    }
    
    const userData = {
      firstName: "unknown",
      lastName: "unknown",
      address: "unknown"
    };
    const userConfig = [
      {
        name: "theme",
        value: {
          itemTypeColor: {
            [ItemType.TypeA]: 'Blue',
            [ItemType.TypeB]: 'Green',
            [ItemType.TypeC]: 'Red',
            [ItemType.TypeD]: 'Orange',
            [ItemType.TypeE]: 'Yellow',
          },
        }
      }
    ];

    const userObj = { email, password, authRole, userData, userConfig };
    if (!(await validateNewUser(userObj))) {
      throw new Error(`Couldn't validate: ${email}`)
    }
    let emailExists = await User.findByEmail(email);
    if (emailExists){
      throw new Error ("Email already exists");
    }

    //Hash Password
    let hashedPassword = await encodePassword(password);

    //test
    if(!(await verifyUserCreds(hashedPassword, password))){
      throw new Error("PASWORD HASHING NOT WORKING... BAD BAD BAD");
    }
    //update password with 
    userObj.password = hashedPassword;

    const newUser = new User(userObj);
    const { _id } = await newUser.save();

    res.status(201).json({ _id });

  } catch (error) {
    console.error("Error adding user: ", error);
    res.status(400).json({ error: error.message });
  }
}
const deleteUser = async (req, res) => {

}
const updateUserData = async (req, res) => {

}
const updateUserConfig = async (req, res) => {

}
const updateUserPassword = async (req, res) => {

}

export {
  saveUser,
  getUser,
  loginUser
}