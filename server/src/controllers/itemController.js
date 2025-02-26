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
          { $eq: [{ $month: "$startDate" }, month] },
          { $eq: [{ $year: "$startDate" }, year] }
        ]
      }
    }).lean().exec();

    const itemArray = items.map(doc => {return {date:doc.startDate, item: {_id: doc._id, itemType: doc.itemType}}});

    res.status(200).json({ items: itemArray });
  } catch (error) {
    console.error("Error getting items: ", error);
    res.status(400).json({ error: error.message });
  }
};

const saveItem = async (req, res) => {
  const { title, startDate, endDate, itemType } = req.body;
  console.log("Saving item: " + title);
  try {
    const newItem = new Item({title, startDate, endDate, itemType});
    const savedItem = await newItem.save();
    res.status(201).json(savedItem._id);
  } catch (error) {
    console.error("Error saving item: ", error);
    res.status(400).json({ error: error.message });
  }
};

export { 
  getItems, 
  saveItem 
};