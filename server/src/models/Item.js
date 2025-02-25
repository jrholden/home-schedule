// Post Schema
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    name: {
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
      type: {
        type: String,
        required: true,
      },
      createdBy: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model('Item', itemSchema);