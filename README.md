# My Shelf

This is an application that allows a book-loving user to create an account, then search the Google Books API, save books that they're interested in reading, and optionally mark those books as complete once they've read them.

My Shelf uses the MERN Stack, with a React front-end and a Mongo DB back-end.  It's an MVC app with full CRUD operations (creating a user and adding books to those user's profile, retrieving that user's information upon login, updating books to reflect whether they've been read or not, and removing books from the database if the user so chooses.)

![Bookshelf](%PUBLIC_URL%/images/library.png)

![Search](%PUBLIC_URL%/images/search.png)

## Technologies Used

React [https://reactjs.org/](https://reactjs.org/)

My Shelf uses React to dynamically render items on the page depending on user input.  It's a Single Page Application that uses a router to select which page to render, and conditional logic that checks the state of the database to determine which components on that page should appear.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Context

Instead of passing information from component to component through the use of props, My Shelf primarily uses two contexts to pass information through to child components.

Semantic UI React [https://react.semantic-ui.com/](https://react.semantic-ui.com/)

As a style framework, My Shelf uses Semantic UI and Semantic UI React.  This allows for a mobile-friendly experience and a clean look.

Mongo

The database structure for this project is MongoDB and Mongoose was used to interact with the backend data.

[https://mongoosejs.com/](https://mongoosejs.com/)

Bcrypt

Bcrypt ensures that the user's password remains secure.

[https://www.npmjs.com/package/bcryptjs](https://www.npmjs.com/package/bcryptjs)