const db = require ("../models")

const { Book } = db

module.exports = {
    findAll: function(req, res) {
      Book
        .find()
        .then(data => {
          res.json(data)
        })
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      Book
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      Book
        .create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
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
  