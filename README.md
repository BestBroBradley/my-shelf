# My Shelf

This is an application that allows a book-loving user to search the Google Books API, save books that they're interested in reading, and then mark those books as complete once they've read them.

My Shelf is an MVC app that has a complete backend and the ability to do full CRUD operations within the database.

![Bookshelf](%PUBLIC_URL%/images/library.png)

![Search]("%PUBLIC_URL%/images/search.png")


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


## Future Improvements

In the future, My Shelf will have full authentication and will allow users to login to their library anywhere.