const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/SignUpModels");

router.post("/signup", (req, res) => {
  const signedUpUser = new signUpTemplateCopy({
    fullName: req.body.fullName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });
  signedUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
