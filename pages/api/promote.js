const Polls = require("../../models/poll");
const Item = require("../../models/item");
import dbConnect from '../../utils/dbConnect'

dbConnect();

export default async (req, res) => {
    const {category, name, nameOfItem } = req.body 

    console.log(`req.body = ${JSON.stringify(req.body)}`)

    try {
        await Item[category].updateOne({ _id: name }, {
            $addToSet: {
              items: new Item.itemSkema({
                name: nameOfItem
              })
            }
          }, function (err) {
            if (err) {
              console.log(`error adding to collection ${category} = ${err}`)
            } else {
              console.log(`added to collection ${category} successfully `)
            }
          })
        
          // delete nameOfItem from the poll_[genre] collection
          // advance the census date by a week for the poll 
        await Polls[category].updateOne({ _id: name },
            {
              $pull: {
                poll:
                  { _id: nameOfItem }
              }, 
              $set: {
                expr: new Date(Date.now() + 2 * 604800000) // 2 weeks from now
              }
            },   
            { safe: true, upsert: true }, 
            function (err) {
                if (err) {
                  console.log(`error deleting top performer from collection poll_${category} = ${err}`);
                } else {
                  console.log(`top performer deleted successfully from collection poll_${category}`);
                }
            })
            res.status(201).json({message: "Pipeline completed"})
    }
    catch (error) {
            res.status(500).json({
              message: "Error occured in pipeline = " + error,
            })
    }
    res.end()
}
