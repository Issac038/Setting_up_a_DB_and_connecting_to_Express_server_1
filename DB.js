const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const connectDatabase = async ()=>{

    await mongoose.connect(process.env.MONGO_URL)
        .then((data=>{
            console.log(`Connected to database`);
        }))
        .catch((err)=>console.log("Error connecting to database",err.message))
};

module.exports = connectDatabase