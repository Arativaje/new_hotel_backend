const mongoose = require('mongoose');
const connect = ()=>{
    const url = process.env.MONGODB_URL || "mongodb://localhost:27017/db";
    mongoose.connect(url)
        .then(()=>{
            console.log('connected to database !!');
        })
        .catch((err)=>{
            console.error(err);
            console.log('connection failed !!'+err);
        });
}
module.exports = {
    connect
}