const mongoose = require("mongoose");

require("dotenv").config();

const connectToMongo = async () => {
  
    try {
      
        await mongoose.connect(process.env.MONGO_URL);
          
    } catch (error) {
       
         console.log("Error while Connecting with db", error)
    }
};
module.exports = connectToMongo;