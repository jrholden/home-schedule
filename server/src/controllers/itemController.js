const Item = require('../models/Item');

const getItems = async (req, res) => {
  console.log("Getting items...");
  try {
    const items = await Item.find({}, { _id: 1 }).lean().exec();
    const idArray = items.map(doc => doc._id);
    res.status(200).json({ items: idArray });
  } catch (error) {
    console.error("Error getting items: ", error);
    res.status(400).json({ error: error.message });
  }
};

const saveItem = async (req, res) => {
  console.log("Saving item...");
  console.log(req.body);
  try {
    const newItem = new Item(req.body);
    //const savedItem = await newItem.save();
    res.status(201).json({message: "PENIS"});
  } catch (error) {
    console.error("Error saving item: ", error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getItems,
  saveItem
};