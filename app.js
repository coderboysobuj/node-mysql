require('dotenv').config();
const {sequelize} = require('./models');
const express = require('express');
const cors = require('cors');


// Import all routes
const authRoutes = require('./routes/authRoutes');

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const apiVersion = name => `/api/v1/${name}`;

app.use(apiVersion('auth'), authRoutes);


app.listen(5000, async () => {
  console.log('Server running on port 5000');
  try {
    await sequelize.authenticate();
    console.log('Database connection success');
  } catch (error) {
    console.log('Database connection fail!');
  }
});
