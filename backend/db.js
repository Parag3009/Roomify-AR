const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://yajagdale124:Majorpro2023@cluster0.vftrpcy.mongodb.net/furniturepro?retryWrites=true&w=majority'
const mongoDB=async()=>{
   await mongoose.connect(mongoURI, ()=>{
        console.log("connected");
    })
    
}

module.exports=mongoDB;