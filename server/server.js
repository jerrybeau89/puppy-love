//initializing variables
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
require('dotenv').config();

//set up the app
const app = express();
const PORT = process.env.PORT || 3001;

db.once('open', () => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
})