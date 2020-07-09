const mongoose = require('mongoose'); 

export default function dbConnect() { 
    const db = mongoose.connection;
   

    if (db.readyState !== 1) {    
        mongoose.connect(
            process.env.MONGO_URL 
            + "culturee_trends" 
            + "?authSource=admin" 
            + "&replicaSet"
            + "=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
            ,
            {useNewUrlParser: true, 
            useUnifiedTopology: true 
        });

        db.on('error', () => {console.log("Damn")}); 

        db.on('open', () => {
            console.log("connected to db " + db.name); 
        });
    }
}















