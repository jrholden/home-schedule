import Item from "../models/Item.js";
//We put this in root during docker image build
import { ItemType } from "../shared/enums.js";

const getItems = async (req, res) => {
  console.log("Getting items...");
  const dateParam = req.query.currentMonth;  // Get date from query string
  if (!dateParam) {
    return res.status(400).json({ error: "Date parameter is required" });
  }
  const date = new Date(dateParam);
  if (isNaN(date.getTime())) {
    return res.status(400).json({ error: "Invalid date format" });
  }

  const month = date.getMonth() + 1; // getMonth() is zero-based
  const year = date.getFullYear();

  try {
    const items = await Item.find({
      $expr: {
        $and: [
          { $eq: [{ $month: "$startDate" }, month] },
          { $eq: [{ $year: "$startDate" }, year] }
        ]
      }
    },{_id: 1}).lean().exec();

    const idArray = items.map(doc => doc._id);

    res.status(200).json({ items: idArray });
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