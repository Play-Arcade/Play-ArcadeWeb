var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");

// change to directory for user schema once it's done
var mong = require("mongoose");

var userSchema = new mong.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true }
});

var userModel = mong.model("User", userSchema);

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("this is an API route");
});

router.post("/newuser", (req, res) => {
  const cred = req.body;

  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(cred.email.toLowerCase)){
    bcrypt.hash(cred.Password, 10, (e, hash) => {
      if (e) {
        error("error while hashing password", e);
        res.sendStatus(500);
      }
      else{
        const newUser = new userModel({
          Name: cred.Name,
          Email: cred.Email,
          Password: hash
        });

        newUser.save(e => {
          if (e) {
            console.error("error while saving user to database", e);
            res.sendStatus(500);
          }
          else {
            const response = {user: newUser}; // add tokens once implemented
            res.json(response);
          }
        });
      }
    });
  }
});
router.post("/signin", (req, res) => {
  const cred = req.body;

  userModel.findOne({ Name: cred.Name }, (e, user) => {
    if (e) {
      console.error("error while finding user", e);
      res.sendStatus(500);
    }
    else {
      if (user) {
        bcrypt.compare(cred.Password, user.Password).then(same => {
          if (same) {
            const response = {user: user}
            res.json(user);
          }
          else {
            console.error("user password is incorrect");
            res.json({
              error_type: "password"
            });
          }
        });
      }
      else {
        console.error("no such user exists");
        res.json({
          error_type: "username"
        });
      }
    }
  });
});

module.exports = router;
