import dbConnect from "../../../../utils/dbConnect";
const Polls = require("../../../../models/poll");
const Item = require("../../../../models/item");
import { authenticator } from '../../../../utils/authenticator';
import { decode } from 'jsonwebtoken'

dbConnect();

export default async (req, res) => {
  const {
    method,
    query: { category, country },
    body: {_id}
  } = req;

  console.log(method);
  switch (method) {
    case "GET":
      try {
        const results = await Polls[category].findById({ _id: country }).lean();
        res.status(200).json({ results });
      } catch (error) {
        res.json({
          message:
            "Sorry there's sth wrong from the server. Error code " + error,
        });
      }
      res.end()
      break;
    case "PUT":
      const { itemName, votes } = req.body;
      try {
        var update = await Polls[category].updateOne(
          { _id: country, "poll._id": itemName },
          { $set: { "poll.$.votes": votes } }
        );

        res.status(200).json({
          data: update.nModified ? "Updated successfully" : "Update failed",
        });
      } catch (error) {
         res.json({
          message:
            "Sorry there's sth wrong from the server. Error code " + error,
        });
      }
      res.end()
      break; 
    case "POST":
      var { reason, authStatus } = authenticator(req.cookies.auth);

      // decode the auth token to get the name
      var { name } = decode(req.cookies.auth);

      // get the user name from the db using the name provided 
      const theUser = await Item.users.findOne({ name: name }).lean();

      // finally we can compare the nationality of the user name and the country that the user tries to interact with 
     try {
        if (authStatus == 1 && (theUser.nationality === country)) {
          await Polls[category].updateOne({ _id: country }, {
            $push: {
              poll: new Polls.entryForm({
                _id: _id,
                votes: 0
              })
            }
          })
          res.status(200).json({
            message: `${_id} has been added to ${country}'s ${category} poll`,
            authStatus: authStatus
          })
        }
        else if (theUser.nationality !== country) {
          res.status(401).json({
            message: `You have to be from ${country} in order to add items in this poll`,
            yourCountry: theUser.nationality,
          });
        }
        else {
          res.status(401).json({
            message: reason,
            authStatus: authStatus
          });
        }
        res.end()
      }
      catch (error) {
         res.status(500).json({
          message: "Sorry there's sth wrong from the server. Error code " + error,
        },
        );
      }
      break; 
    case 'DELETE':
        try {
          await Polls[category].updateOne(
            { _id: country },
            {
              $pull: {
                poll:
                  { _id: _id }
              }
            }, { safe: true, upsert: true })
          res.status(200).json({ message: "Deleted successfully" });
        }
        catch (error) {
          res.status(500).json({ message: "Something wrong from server." + error });
        }
      res.end()
      break; 
  }
};
