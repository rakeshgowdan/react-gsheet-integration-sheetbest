# How to Turn Google Sheets into a REST API and Use it with a React Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## how to POST form data from React to Google Sheets like REST APIs.

## Required NPM packages

### `npm install semantic-ui-react semantic-ui-css`

### `npm install axios`

## How to Post the data to Google Sheets

Let's change our Google sheets into a REST API. We will be posting data to Google Sheets as a REST API, and for that, we need to install Axios. It is a library that you can use for sending requests to APIs, just like fetch.Open a new Spreadsheet by clicking File, then New, and then Spreadsheet.

Name the sheet to name of your choice and save. Click the share button on the top right of your screen, and edit the permission to public.

Copy the link and go to http://sheet.best and create your free account. Create a new connection and paste your copied URL from the Google Sheets in the connection URL box. Click on connect. You'll be redirected to your connections page.
Here, you can see all your connections. Click on the details of your new connection. Copy the CONNECTION URL. This URL will be used as the endpoint for sending POST Requests.

Paste the copied CONNECTION URL endpoint from http://sheet.best and replace it with the URL in http://axios.post('url').

## By default in free tier it allows 2 connections & 250 Requests

## Adding Eslint,Pretier & husky

### `npm i -D eslint eslint-plugin-react husky lint-staged prettier`

### In case you were wondering:

Husky adds a git commit hook so that...
Lint-staged only runs Prettier on new stuff that you stage in git

### add below code to .prettierrc.json

### ` {

"scripts": {  
 "format": "prettier --write .",
"prepare": "husky install"
},
"lint-staged": {
"\*_/_": "prettier --write --ignore-unknown"
},
} `

### add below code to .eslintrc.json

### ` {

    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": [0, {}],
        "react/no-unescaped-entities": [0, {}],
        "no-unused-vars": [1, {}],
    }

} `

### https://dev.to/swyx/how-to-add-prettier-and-eslint-automation-to-a-react-codebase-2gk1



## Adding CRA environmental variables to project

### What is ENV 🤔
env file to store your sensitive credentials like API keys.
Environment variables can also help you to store your API link in one location so that you don't have to change the link in each file manually.

Usually, you create one .env file which triggers for local, integration and production.

### What if you want to create different Keys for integration and production
If you have to use different keys for integration and production, in that case you have to customise your environment.

Now, let's see what are we going to cover in this article:

1. Customise Environment Variable for build environment

2. Use Environment variable in HTML

1. Customise Environment Variable for build environment
There are already few environment which React supports like .env.development, .env.test, .env.production etc.

.env files can be used:

.env: Default
.env.local: Local overrides. This file is loaded for all environments except test
.env.development, .env.test, .env.production: Environment-specific settings
You can create your own env file which is not added in react. You need to install one package called env-cmd for setup the custom environment.

Create a file called .env.integration where .env exists
Set the environment variable which you wanted for integration in .env.integration
  REACT_APP_NAME=XXXX


2. Use ENV variables in HTML
You only use environment variable in JavaScript files. But what when you need to use environment variable in HTML, It can be Google Map keys or any secret keys of script.

You can access the environment variables in the index.html, just to remember that the env variable should be prefix with REACT_APP_.
<title>%REACT_APP_NAME%</title>
Define permanent environment variables in .env file in root of the project.

.env:
REACT_APP_NAME=ProjectName


* 📝 Remember to restart the server when you make any changes in .env file. *



### Important links
open [https://create-react-app.dev/docs/deployment/#customizing-environment-variables-for-arbitrary-build-environments](https://create-react-app.dev/docs/deployment/#customizing-environment-variables-for-arbitrary-build-environments)
open [https://create-react-app.dev/docs/deployment/#customizing-environment-variables-for-arbitrary-build-environments](https://create-react-app.dev/docs/deployment/#customizing-environment-variables-for-arbitrary-build-environments)
open [https://create-react-app.dev/docs/adding-custom-environment-variables/](https://create-react-app.dev/docs/adding-custom-environment-variables/)
