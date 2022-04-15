# Yelp App

This app allows you to type in any location and get the first 20 listings from Yelp, including their rating, review count and a link to the coresponding Yelp page of the listing.

## Getting Started

Here is how to get started with the project:

- Request access to CORS Anywhere demo server [here](https://cors-anywhere.herokuapp.com/corsdemo)
- Get your private API key on [Yelp Developer Portal](https://docs.developer.yelp.com/)
- Clone the repo locally with `git clone git@github.com:Valentino30/Yelp_App_React_Typescript.git`
- Open the project in your favorite IDE (i.e. [VSCode](https://code.visualstudio.com/))
- Add your API key to the .env.example file and rename it as .env
- Run the command `yarn` in the project directory to install all dependencies
- Run the command `yarn start` in the project directory to launch the app
- You're good to go :)

The app will run in development mode at [http://localhost:3000](http://localhost:3000) and the page will automatically reload if you make any changes.

## Usage

- Type your current location in the input field and hit enter
- If the location is valid, Yelp's API will return 20 listings close to your location
- Each listing will be displayed with a media card containing the listing's image, rating and review count
- Clicking on a listing will open the corresponding Yelp's page on a new tab

## Error Handling

- Hitting enter without inputting any location will return an error (no API call)
- Hitting enter after inputting an invalid location will return an error (API call)
- Hitting enter without an internet connection will return an error (API call attempt)

## Dependencies

This project relies on the following dependencies:

- [Create React App Typescript](https://create-react-app.dev/docs/adding-typescript/)
- [Styled Components](https://styled-components.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)
- [Material UI](https://mui.com/getting-started/installation/)
- [ENV CMD](https://www.npmjs.com/package/env-cmd)
- [Axios](https://axios-http.com/)

## Feedback

- Overall, very clean and organized code
- Good read me
- Good commit history
- Good UX in terms of error handling
- More feedback can be found in the code by searching for the keyword // FEEDBACK
