// Post Schema
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    itemType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Item', itemSchema);