const express = require ('express');
const app = express();
require('dotenv').config();
const db = require("./src/config/db.config");
db.connect();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const productRoute = require('./src/route/product.route');

app.use('/product',productRoute);

app.get('/',(req,res)=>{
    res.send("Hello nodeJs!!");
});

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`server started on port ${PORT}`);
});