const axios = require('axios');

axios.get('http://webcode.me').then(resp => {

    console.log(resp.data);
});

module.exports = {
    findAll: function(req, res) {
        const { type, term } = req.params
        switch (type) {
            case "Title":
                console.log("Title")
                break;
            case "Author":
                console.log("Author")
                break;
            case "Genre":
                console.log("Genre")
                break;
            default:
                break;
        }
    }}