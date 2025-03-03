// Post Schema
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    itemType: {
      type: String,
      required: true,
    },
    dateInfo: {
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      }
    },
    itemInfo: {
      owner: {
        type: String,
        required: false
      },
      groupId: {
        type: String,
        required: false
      }
    }
  },
  { timestamps: true }
);

export default mongoose.model('Item', itemSchema);