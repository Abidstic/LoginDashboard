# Getting Started 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
First, install the packages:
###'npm install'

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
Create a project in google cloud and add the client id in app.js.Here:
 > <GoogleOAuthProvider clientId={'google client-id'}>\

<br>The page will reload when you make changes.
You may also see any lint errors in the console.

The page has two routes [http://localhost:3000/](http://localhost:3000/) opens the login page and [http://localhost:3000/dashboard](http://localhost:3000/dashboard) opens the dashboard

I have added protected routing in the dashboard page so only logged-in members can access the page.
<br>Also added a logout button in the dashboard for interactivity.



