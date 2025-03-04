// Post Schema
import mongoose from "mongoose";
import { UserRole } from "../shared/enums.js"

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    authRole: {
      type: String,
      default: UserRole.USER
    },
    userData: {
      firstName: {
        type: String,
        required: false
      },
      lastName: {
        type: String,
        required: false
      },
      address: {
        type: String,
        required: false
      }
    },
    userConfig: [
      {
        name: {
          type: String,
          required: false
        },
        value: {
          type: JSON,
          required: false
        }
      }
    ]

  },
  { timestamps: true }
);
userSchema.statics.signup = async function() {

}
userSchema.statics.login = async function (email, password) {

}
userSchema.statics.findByEmail = async function (email) {
  return await this.findOne({ email });
};
userSchema.statics.generatePasswordRecoveryToken = async function(email) {
  
};

userSchema.statics.updateUserPassword = async function(userId, userToken, newPassword) {
  
};
userSchema.statics.calculateUserStatistics = async function() {
  
};

export default mongoose.model('User', userSchema);