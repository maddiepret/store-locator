// Add all packages
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectbd = require('./config/db');

//load env variables
dotenv.config({ path: './config/config.env' });
//initilize express
const app = express();

//connect mongo
connectbd();

//middleware
app.use(express.json());
//enable cors
app.use(cors());
//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/api/v1/stores', require('./routes/stores'));

//set up port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});