//step 1 require the package means import mongoose
const mongoose=require('mongoose');

//sste 2 establish a connection
//connection string
async function connection()
{
  
  try{
    await mongoose.connect(process.env.mongodb)
    console.log("db connected")
  }catch(err){
    console.log("db connection failed",err.message)
  }
}
module.exports=connection;

