import Item from "../models/Item.js";

const getItem = async (req, res) => {
  const { _id } = req.body;
  try {
    
    console.log("Sending ALL for::" + _id);
    const item = await Item.findById(_id);
    console.log("Sending ALL for::" + _id);
    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }

};

const getItemTitle = async (req, res) => {
  const { _id } = req.body;
  try {
    const item = await Item.findById(_id);
    console.log("Sending " + item.title);
    res.status(200).json({ title: item.title });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
};
const getItemType = async (req, res) => {
  const { _id } = req.body;
  try {
    const { itemType } = await Item.findById(_id);
    console.log("Sending " + itemType);
    res.status(200).json(itemType);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
};
const getItemDateInfo = async (req, res) => {
  const { _id } = req.body;
  try {
    const item = await Item.findById(_id);
    console.log("Sending " + item.title);
    res.status(200).json({ title: item.title });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
};
const saveItem = async (req, res) => {
  const { title, startDate, endDate, itemType } = req.body;
  console.log("Saving item: " + title);
  try {
    const dateInfo = {
      startDate,
      endDate
    }
    const itemInfo = {
      owner: 'JordanForNow',
      groupId: 'NoSuchThingAsGroupsYet'
    }
    const newItem = new Item({ title, itemType, dateInfo, itemInfo });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem._id);
  } catch (error) {
    console.error("Error saving item: ", error);
    res.status(400).json({ error: error.message });
  }
};

const deleteItem = async (req, res) => {
  const { _id } = req.body;
  try {
    console.log("deleting: " + _id);
    const itemDeleteStatus = await Item.deleteOne({ _id });
    res.status(200).json(itemDeleteStatus);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message })
  }
};
const patchItem = async (req, res) => {
  const { _id, ...updateData } = req.body;
  try {
    console.log("patching: " + _id + " With:: ");
    console.log(updateData);
    const itemUpdateStatus = await Item.findByIdAndUpdate({ _id }, { ...updateData });
    res.status(200).json(itemUpdateStatus);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message })
  }
};
const setItemType = async (req, res) => {
  const { _id, itemType } = req.body;
  try {
    const newReq = {
      body: {
        _id,
        itemType
      }
    };
    await patchItem(newReq, res);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};
const setItemTitle = async (req, res) => {
  const { _id, title } = req.body;
  try {
    const newReq = {
      body: {
        _id,
        title
      }
    };
    await patchItem(newReq, res);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}
const setItemDateInfo = async (req, res) => {
  const { _id } = req.body;
  try {

  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
};


export {
  saveItem,
  deleteItem,
  getItem,
  getItemTitle,
  getItemType,
  setItemTitle,
  setItemType,
  setItemDateInfo
};