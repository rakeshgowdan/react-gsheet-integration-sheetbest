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

## Let's change our Google sheets into a REST API. We will be posting data to Google Sheets as a REST API, and for that, we need to install Axios. It is a library that you can use for sending requests to APIs, just like fetch.Open a new Spreadsheet by clicking File, then New, and then Spreadsheet. 

## Name the sheet to name of your choice and save. Click the share button on the top right of your screen, and edit the permission to public. 

## Copy the link and go to http://sheet.best and create your free account. Create a new connection and paste your copied URL from the Google Sheets in the connection URL box. Click on connect. You'll be redirected to your connections page. 
## Here, you can see all your connections. Click on the details of your new connection. Copy the CONNECTION URL. This URL will be used as the endpoint for sending POST Requests.

## Paste the copied CONNECTION URL endpoint from http://sheet.best and replace it with the URL in http://axios.post('url').


## By default in free tier it allows 2 connections & 250 Requests 
