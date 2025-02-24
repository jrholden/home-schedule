const Item = require('../models/Item')

const getItems = async(req, res) => {
  console.log("Getting items...")
    try {
        const items = await Item.find({}, {_id: 1}).lean().exec();
        const idArray = items.map(doc => doc._id);
        res.status(200).json({items: idArray})
    } catch (error) {
      console.error("Error getting items: ", error)
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getItems
}