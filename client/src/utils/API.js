import axios from "axios"
import { CommentActions } from "semantic-ui-react"

const APIKEY = process.env.REACT_APP_APIKEY

let queryURL = ""

export default {
    search: function(state) {
        const { type, term } = state
        switch (type) {
            case "Title":
                    queryURL = `https://www.googleapis.com/books/v1/volumes?q=${term}&key=${APIKEY}`
                    return axios.get(queryURL)
            case "Author":
                    queryURL = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${term}&key=${APIKEY}`
                    return axios.get(queryURL)
            case "Subject":
                    queryURL = `https://www.googleapis.com/books/v1/volumes?q=subject:${term}s&key=${APIKEY}`
                    return axios.get(queryURL)
            default:
                break;
        }
    },
    createUser: function (user) {
            console.log(user)
            return axios.post("/api/user", user)
    },

    login: function (details) {
            console.log(details)
            return axios.post("/api/user/" + details.user, details)
    },

    getUserBooks: function () {
            return axios.get("/api/books/")
    },
    updateBook: function (id) {
            return axios.put("/api/books/" + id)
    },
    deleteBook: function (id) {
            return axios.delete("/api/books/" + id)
    },
    addBook: function (book) {
            return axios.post("/api/books", book)
    },
    deleteRead: function () {
            console.log(`delete`)
            return axios.delete("/api/books")
    }
}
