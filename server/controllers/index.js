const User = require("../database/user.js");

const signUp = async (req, res) => {

    const { username, email } = req.body;

    // create database
      // add user to database




    // try {
    //   const user = await User.find({email});

    //   if (!user.length) {
    //     const user = await User.create({ name, email });
    //     return res.status(201).send('New user created.');
    //   }
    //   return res.sendStatus(200);

    // } catch (error) {
    //   res.status(400).send(error);
    // }
};

module.exports = {
    signUp
}