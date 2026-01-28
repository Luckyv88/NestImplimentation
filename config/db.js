import mongoose from 'mongoose'

const mongodb= async ()=>{
    try{
       await mongoose.connect(process.env.MONGO_URI, {});
       console.log("MongoDb connected");

    }
    catch(error){
      console.error(error.message);
      console.exist(1);
    }
}

module.exports=mongodb;