const express = require("express");
const cors = require("cors");
const routers = require("./routers/index.js");
const path = require("path");
const app = express();
const port = 3001;

const db = require("./database/index.js");

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());

app.use("/", routers);

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
})
