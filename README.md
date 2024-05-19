# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# React Router Documentation

## Routes

### / - Main Page

#### Description
Renders the main page of the application.

### /login - User Login

#### Description
Renders the user login page for authentication.

### /signup - User Signup

#### Description
Renders the user signup page for registering new users.

### /update-Password/:email - Update Password

#### Description
Renders the update password page where users can update their passwords. Requires the email parameter in the URL.

### /view/:id - View Page

#### Description
Renders a page to view user details. Requires the id parameter in the URL.

### /update/:id - Update Page

#### Description
Renders a page to update user details. Requires the id parameter in the URL.

### /forgot-password - Forgot Password

#### Description
Renders a page for users to reset their password if they have forgotten it.

### /verify-otp/:email - OTP Verification

#### Description
Renders a page for OTP verification during the password reset process. Requires the email parameter in the URL.

### /users/:otp/verify/:email - Email Verification

#### Description
Renders a page for email verification during the signup process. Requires the otp and email parameters in the URL.
