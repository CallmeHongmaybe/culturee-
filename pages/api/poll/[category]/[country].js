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
  } = req;

  console.log(method);
  switch (method) {
    case "GET":
      try {
        const results = await Polls[category].findById({ _id: country }).lean();
        return res.status(200).json({ results: results });
      } catch (error) {
        return res.json({
          message:
            "Sorry there's sth wrong from the server. Error code " + error,
        });
      }
    case "PUT":
      const { itemName, votes } = req.body;
      try {
        var update = await Polls[category].updateOne(
          { _id: country, "poll._id": itemName },
          { $set: { "poll.$.votes": votes } }
        );

        console.log(update);

        return res.status(200).json({
          data: update.nModified ? "Updated successfully" : "Update failed",
        });
      } catch (error) {
        return res.json({
          message:
            "Sorry there's sth wrong from the server. Error code " + error,
        });
      }
    case "POST":
      const { _id } = req.body;
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
          return res.status(200).json({
            message: `${_id} has been added to ${country}'s ${category} poll`,
            authStatus: authStatus
          })
        }
        else if (theUser.nationality !== country) {
          return res.status(401).json({
            message: `You have to be from ${country} in order to add items in this poll`,
            yourCountry: theUser.nationality, 
          });
        }
        else {
          return res.status(401).json({
            message: reason,
            authStatus: authStatus
          });
        }
      }
      catch (error) {
        return res.status(500).json({
          message: "Sorry there's sth wrong from the server. Error code " + error,
        },
        );
      }
    default:
      return res.end({ message: "I kept working at it" });
  }
};
