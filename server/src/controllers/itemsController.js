import Item from "../models/Item.js";
import { toZonedTime, format } from 'date-fns-tz';
//We put this in root during docker image build
import { ItemType } from "../shared/enums.js";
import { TIMEZONE } from "../shared/constants.js";

const getItems = async (req, res) => {
  console.log("Getting items...");
  const dateParam = req.query.currentMonth;  // Get date from query string
  if (!dateParam) {
    return res.status(400).json({ error: "Date parameter is required" });
  }
  const date = toZonedTime(new Date(dateParam), TIMEZONE);
  if (isNaN(date.getTime())) {
    return res.status(400).json({ error: "Invalid date format" });
  }

  const month = format(date, 'M');
  const year = format(date, 'yyyy');

  try {
    const items = await Item.find({
      $expr: {
        $and: [
          { $eq: [{ $month: "$dateInfo.startDate" }, month] },
          { $eq: [{ $year: "$dateInfo.startDate" }, year] }
        ]
      }
    }).lean().exec();

    const itemArray = items.map(doc => { return { date: doc.dateInfo.startDate, item: { _id: doc._id, itemType: doc.itemType } } });

    res.status(200).json({ items: itemArray });
  } catch (error) {
    console.error("Error getting items: ", error);
    res.status(400).json({ error: error.message });
  }
};



export {
  getItems,
};