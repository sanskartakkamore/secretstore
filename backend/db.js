const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Sanskar:Sanskar%40123@sanskar.eurcdyh.mongodb.net/PlaylistUser"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Succesfully")
    })
}

module.exports= connectToMongo;