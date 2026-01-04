let usersschema=new mongoose.Schema({
  email:{type:String,required:true,unique:true},
  username:{type:String,required:true},
  password:{type:String,required:true}, 
})
const usersmodel= mongoose.model('users',usersschema)
module.exports=usersmodel;