module.exports = function(app){
    const userModel = require("../models/user/user.model");

// find user by username and password
      app.get("/api/user", async (req, res) => {
          const username = req.query["username"];
          const password = req.query["password"];
          let user;
          if (username && password){
            user = await userModel.findUserByCredentials(username, password)
          } else if (username) {
            user = await userModel.findUserByUsername(Username);
          }
          res.json(user);
      })
// create new user
      app.post("/api/user", async (req, res) => {
        const user = req.body;
        const data = await userModel.createUser(user);
        res.json(data);
      })
// find user by _id
      app.get("/api/user/:uid", (req, res) => {
          const uid = req.params["uid"];
          let user;
          user = users.find((user) => {
              return user._id === uid;
          })

          res.json(user);
      })

//  update user
      app.put("/api/user", (req, res) => {
          const newUser = req.body;
          users = users.map(
              (user) => {
                  if(user._id === newUser._id){
                      user = newUser
                  }
                  return user;
              }
          )
          res.json(newUser);
      })

};