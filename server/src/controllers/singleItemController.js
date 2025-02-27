import Item from "../models/Item.js";

const getItem = async (req, res) => {
  const { _id } = req.body;
  try {
    const item = await Item.findById(_id);
    console.log("Sending ALL for::" + _id);
    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }

}

const getItemTitle = async (req, res) => {
  const { _id } = req.body;
  try {
    const item = await Item.findById(_id);
    console.log("Sending " + item.title);
    res.status(200).json({title: item.title});
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }

}


export {
  getItem,
  getItemTitle
}