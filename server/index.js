const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
})
