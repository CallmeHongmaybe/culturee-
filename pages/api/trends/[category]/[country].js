const Item = require('../../../../models/item');
import dbConnect from '../../../../utils/dbConnect';

dbConnect();
// connect to mongo shell: mongo "mongodb+srv://cluster0-csbbg.mongodb.net/test" --username Dennis
// passwrd: ineedbass12
export default async (req, res) => {
    const { 
        method,
        query: { category, country }
    } = req;

    switch (method) {
        case 'PUT':
            try {
                const { id, name, likes, hits } = req.body;
                var update = await Item[category].updateOne({ _id: id, "items.name": name }, {
                    "$set": {
                        "items.$.likes": likes, 
                        "items.$.hits": hits, 
                    }
                })
                return res.status(200).json({ message: update.nModified ? update : "Update failed" });
            }
            catch (error) {
                return res.status(500).json({ message: "Sorry there's sth wrong from the server. " + error })
            }
        default: // GET 
            try {
                const results = await Item[category].findOne({ _id: country }).lean();
                if (!results) {
                    return res.status(404).json({ message: "Sorry but no such country exists" })
                }
                return res.status(200).json({ data: results });
            }
            catch (error) {
                return res.json({ message: "Sorry there's sth wrong from the server. Error code " + error })
            }
    }
}
