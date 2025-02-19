const Item = require('../models/Item')

const getItems = async(req, res) => {
  console.log("Getting items...")
    try {
        const items = await Item.find()
        console.log("Items: ", items)
        res.status(200).json(items)
    } catch (error) {
      console.error("Error getting items: ", error)
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getItems
}