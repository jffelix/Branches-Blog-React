const mongoose = require("mongoose");

const mongoUri = "mongodb://localhost:27017";

const db = mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() =>
     console.log(`Connected to ${mongoUri}!`)
   )
  .catch(err => 
    console.log(err)
  );

module.exports = db;