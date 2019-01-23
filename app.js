// app.js
//const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

// initialize our express app
const product_router = require('./routes/product.route'); // Imports routes for the products
const csdl_router = require('./routes/csdl.route')


//app.use('/', product_router);
app.use('/',csdl_router);

// Start server
var server = app.listen(3000, function () {
    var host = server.address().address;
    //console.log(t);
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
 })


 