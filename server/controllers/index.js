const User = require("../database/user.js");

const signUp = async (req, res) => {
    const { username, email } = req.body;

    try {
      const user = await User.find({email});

      if (!user.length) {
        const user = await User.create({ username, email });
        return res.status(201).send('New user created.');
      }
      return res.sendStatus(200);

    } catch (error) {
      res.status(400).send("Error received during sign up.");
    }
};

const getUsername = async (req, res) => {
    // for some reason email property makes all letter lowercase
      // ex: testaccount becomes "testaccount"
    // usernames and emails with uppercase letters will return empty usernames
    const emailObj = {
      email: req.params.id
    }

    console.log("emailObj: ", emailObj);

    try {
        const user = await User.find({email: emailObj.email});
        
        if (user.length === 1) {
          return res.status(200).send(user);
        } else {
          return res.status(400).send("Error while searching for user");
        }

    } catch {
      res.status(400).send("Error while searching for user");
    }
}

module.exports = {
    signUp,
    getUsername
}