const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../model/user');
const mongoose = require('mongoose');
const checkAuth = require('../auth/checkAuth');

router.post('/signup', (req, res) => {
  // first thing we do is look for a user object in mongo
  // if we dont find it we encrypt the password
  // then make our user model and save to mongodb.

  const password = req.body.password;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      const user = new User({
        _id: mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        email: req.body.email,
        password: hash,
      });
      // save to db
      res.status(201).json({
        message: 'User Created',
        name: req.body.firstName,
      });
    }
  });
});

router.post('/login', (req, res) => {
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  // find user by email
  // if not found return authorization failed
  // else
  // compare passwords using bcrypt get error or result of true or false
  // if error return err.message
});

router.get('/profile', checkAuth, (req, res, next) => {
  res.status(200).json({ message: req.userData });
});

module.exports = router;
