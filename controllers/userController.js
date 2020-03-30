const db = require("../models")
const bcrypt = require('bcryptjs')

const { User } = db

module.exports = {
  // usersSchema.methods.validPassword = function(password, encrypted) {
  //     return bcrypt.compareSync(password, encrypted);
  // }
  // findAll: function(req, res) {
  //   User
  //     .find()
  //     .then(data => {
  //       res.json(data)
  //     })
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function(req, res) {
  //   Book
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  create: function (req, res) {
    User
      .findOne({ username: req.body.username })
      .then(data => {
        if (data) {
          res.send("Username already exists")
        } else {
          console.log(req.body.password)
          bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(req.body.password, salt, function (err, hash) {
              req.body.password = hash
              User
                .create(req.body)
                .then(data => {
                  console.log(data)
                  console.log('User Added!')
                  res.json(data)
                })
                .catch(err => console.log(err))
            })
          })
        }
      })
  },
  // update: function(req, res) {
  //   Book
  //     .findOneAndUpdate({_id: req.params.id}, {isRead: true})
  //     .then(data => res.json(data))
  //     .catch(err => console.log(err));
  // },
  // remove: function(req, res) {
  //   Book
  //     .findById({ _id: req.params.id })
  //     .then(book => book.remove())
  //     .then(data => res.json(data))
  //     .catch(err => res.status(422).json(err));
  // },
  // clear: function(req, res) {
  //   Book
  //     .deleteMany({isRead: true})
  //     .then(data => {
  //       console.log(data)
  //       res.json(data)})
  //     .catch(err => console.log(err))
  // }
};
