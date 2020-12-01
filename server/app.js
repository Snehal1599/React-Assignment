const express = require('express');
var app = express();
const router = require('./user-services');
var cors = require('cors');
app.use(cors());
app.use(router);


app.listen(3001, () => {
    console.log('Express server is running at http://localhost:3001');
});






