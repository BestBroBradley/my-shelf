import axios from "axios"

const apiKey = "AIzaSyDCaM1c8Cy5qGZXdt0fdcTdmyrtS39_2d4"
let queryURL = ""

export default {
    search: function(state) {
        const { type, term } = state
        switch (type) {
            case "Title":
                    queryURL = `https://www.googleapis.com/books/v1/volumes?q=${term}&key=${apiKey}`
                    return axios.get(queryURL)
            case "Author":
                    queryURL = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${term}&key=${apiKey}`
                    return axios.get(queryURL)
            case "Subject":
                    queryURL = `https://www.googleapis.com/books/v1/volumes?q=subject:${term}s&key=${apiKey}`
                    return axios.get(queryURL)
            default:
                break;
        }
    },
    getUserBooks: function () {
            return axios.get("/api/books/")
    },
    updateBook: function (id) {
            return axios.get("/api/books/" + id)
    },
    deleteBook: function (id) {
            return axios.get("/api/books/" + id)
    },
    addBook: function (book) {
            return axios.post("/api/books", book)
    }
}