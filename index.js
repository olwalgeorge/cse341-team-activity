const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', require('./routes'));

const db = require('./models');  

  mongoose.set("strictQuery", false);
  
  db.mongoose
    .connect(db.url) // Removed useNewUrlParser and useUnifiedTopology since they are decraprecated
    .then(() => {
      console.log('Connected to the database!');
    })
    .catch((err) => {
      console.log('Cannot connect to the database!', err);
      process.exit();
    });
  
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}.`);
  });