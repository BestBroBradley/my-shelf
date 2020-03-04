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

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
