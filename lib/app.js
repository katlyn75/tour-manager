const express = require('express');
const app = express();



app.use((req, res) => {
    console.log('app use');
    res.send('hello');
});


module.exports = app;
