# Google Sign: React + Firebase + Storybook
Set up google authentication using firebase and use the Context API to access the user's authentication status so as to prevent unauthorised access to protected routes

Configure the `.env` and drop your built storybook into `public/storybook` and it should just work.

## Setup

configure a `.env` file with the following:

```js
REACT_APP_API_KEY="get from firebase app"
REACT_APP_AUTH_DOMAIN="get from firebase app"
REACT_APP_DATABASE_URL="? maybe, get from firebase app"
REACT_APP_PROJECT_ID="get from firebase app"
REACT_APP_STORAGE_BUCKET="get from firebase app"
REACT_APP_MESSAGING_SENDER_ID="get from firebase app"
REACT_APP_APP_ID="get from firebase app"
REACT_APP_MEASUREMENT_ID="get from firebase app"

REACT_APP_COMPANY_EMAIL_DOMAIN="your-company-email.com domain"
REACT_APP_SITE_TITLE="Site title, can be anything"
```

### After building you can deploy to Firebase with

```bash
# do this once
npm install -g firebase-tools
firebase login
firebase init
# down arrow to Hosting, press space bar to select, then enter
# crate a new project ? depends if you have one already
# y to /index.html
# no to auto deploy
# no to overwrite public/index.html
```

Answers:

- down arrow to Hosting, press space bar to select, then enter
- crate a new project ? depends if you have one already
- y to /index.html
- no to auto deploy
- no to overwrite public/index.html

### Release

```bash
yarn release
# runs yarn build && firebase deploy
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
