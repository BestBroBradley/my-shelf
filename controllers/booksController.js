const db = require ("../models")

const { Book } = db

module.exports = {
    findAll: function(req, res) {
      Book
        .find({userid: req.params.userid})
        .then(data => {
          console.log(`This is the data: ${data}`)
          res.json(data)
        })
        .catch(err => console.log(err));
    },
    create: function(req, res) {
      Book
        .create(req.body)
        .then(data => res.json(data))
        .catch(err => console.log(err))
    },
    update: function(req, res) {
      Book
        .findOneAndUpdate({_id: req.params.id}, {isRead: true})
        .then(data => res.json(data))
        .catch(err => console.log(err));
    },
    remove: function(req, res) {
      Book
        .findById({ _id: req.params.id })
        .then(book => book.remove())
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    },
    clear: function(req, res) {
      Book
        .deleteMany({isRead: true})
        .then(data => {
          console.log(data)
          res.json(data)})
        .catch(err => console.log(err))
    }
  };
  