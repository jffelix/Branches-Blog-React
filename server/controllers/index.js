const User = require("../database/user.js");

const signUp = async (req, res) => {

    const { username, email } = req.body;

    // create database
      // add user to database
    try {
      const user = await User.find({email});

      if (!user.length) {
        const user = await User.create({ username, email });
        return res.status(201).send('New user created.');
      }
      return res.sendStatus(200);

    } catch (error) {
      res.status(400).send(error);
    }

};

const getUsername = async (req, res) => {

    const emailObj = {
      email: req.params.id
    }

    try {
        const user = await User.find({email: emailObj.email});

        if (user.length === 1) {
          return res.status(200).send(user);
        } else {
          return res.status(400).send("Error while searching for user");
        }

    } catch {
      res.status(400).send(error);
    }
}

const createNewPost = async (req, res) => {

  const postObj = req.body;
  console.log("req.body: ", req.body);

}

module.exports = {
    signUp,
    getUsername,
    createNewPost
}