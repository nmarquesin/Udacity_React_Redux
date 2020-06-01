## Steps Taken

1. Create React App

2. (PLANNING) Identify Each View

VIEWS:

- HOME
- QUESTION
- NEW QUESTION
- LEADER BOARD
- LOGIN

3. (PLANNING) Break Each View Into a Hierarchy of Components

COMPONENT HIERARCHY:

- APP
  - NAV
  - QUESTIONS LIST X
    - QUESTION X
      - ANSWER X
    - NEW QUESTION X
  - LEADER BOARD X
    - USER CARD X
  - LOGIN X

4. (PLANNING) Determine What Events Happen in the App (_set, get, modify, delete_)

NAV:

- _get_ active user to display on navbar
- _modify_ active user to null when logout happens

QUESTIONS LIST:

- _get_ questions
- _get_ active user to sort which questions were answered and which were not

QUESTION:

- _get_ a particular question from a list of questions

ANSWER:

- _get_ answer from active user; or
- _set_ aswer for active user

NEW QUESTION:

- _set_ new question authored by active user

LEADER BOARD:

- _get_ users and sort them by score

USER CARD:

- present an user

LOGIN:

- _modify_ the active user

5. (PLANNING) Determine What Data Lives in the Store

store: {
users: {
id: { id, name, avatarURL, answers, questions}
},
questions: {
id: { id, author, timestamp, answer1, answer2}
},
activeUser: userId,
selectedQuestion: questionId,
}

## Steps To Take

6. (CODING) Design the shape of the state and create actions to initialize data and reducers.

## Store:

store: {
users: {
'id': {
id: 'id',
name: 'name',
avatarURL: 'urlAddress',
answers: {
'questionId': 'answerOption',
'questionId': 'answerOption',
'questionId': 'answerOption',
},
questions: [
'questionId', 'questionId', 'questionId'
]
}
}
questions: {
'id': {
id: 'id',
author: 'author',
timestamp: 1234,
answer1: {
votes: ['userId', 'userId']
text: "lorem ipsum"
},
answer2: {
votes: ['userId', 'userId']
text: "lorem ipsum"
}}
},
activeUser: 'userId',
selectedQuestion: questionId,
}

## Actions:

setActiveUser
handleInitialData
receiveQuestions
receiveUsers

## Reducers:

users
questions
activeUser

7. (CODING) Create a Redux store. Connect logger middleware (optional) and Redux Thunk middleware (alternatively, you can use Redux Saga, etc.).

- To create a Redux store: install 'react-redux' (for create-store) and 'redux' (for combineReducers and Provider). X

- To connect middleware: install redux-thunk, create logger middleware. X

- Dispatch actions to store: use connect from react-redux to give 'App' access to dispatch and call handleInitialData inside componentDidMount from the App Component. X

8. (CODING) For each view that needs access to the store, create the component and connect it to the store.

- Create the QUESTIONS LIST component

9. (CODING) For the component you created in the last step, create any actions and action creators missing. Check that everything works correctly.

10. (CODING) Repeat Step 8 & Step 9 for each component that needs access to the store.

COMPONENTS CREATED:

- APP
  - NAV X
  - QUESTIONS LIST X (Already created)
    - QUESTION X
      - ANSWER X
    - NEW QUESTION X
  - LEADER BOARD X
  - LOGIN X

11. (CODING) Create presentational components and confirm that everything works correctly.

COMPONENT CREATED:

- USER CARD X

12. (CODING) Add React Router.

13. (CODING) Add finishing touches and make sure the project meets the rubric.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

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
