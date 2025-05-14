const express=require("express");
const app=express();
require('dotenv').config();
const mongoose = require('mongoose');
const reminderRoutes=require("./routes/reminder.js");
let port=process.env.PORT||3000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//monogodb connection
main().then((res)=>{
    console.log("connection successfull");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);

}
//routes
app.use('/save/reminders', reminderRoutes);
app.listen(port,()=>{
    console.log("app is listening");
})