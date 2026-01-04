require('dotenv').config();
let app=require('./app')

const port=process.env.port
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
    connectdb();
})