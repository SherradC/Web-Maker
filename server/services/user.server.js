module.exports = function(app){
    let users= [
        {username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
        {username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
        {username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@ulem.com"},
        {username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
      ]
// find user by username and password
      app.get("/api/user", (req, res) => {
          const username = req.query["username"];
          const password = req.query["password"];
          let user;
        //   login to check user credentials
          if(username && password) {
                user = users.find((user) => {
                return  user.username === username && user.password === password
              })   
          }
        //   check if username is taken
          if (username) {
              user = users.find((user) => {
                  return user.username === username;
              })
          }
          res.json(user);
      })
// create new user
      app.post("/api/user", (req, res) => {
          const user = req.body;
          users.push(user);
          res.json(user);
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

//  updat user
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