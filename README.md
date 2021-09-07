# Surf forecast app front-end

The app allows users to select a surf spot from the world map or look for it in the database,
and add a public or secret surf spot to the DB. 
I scraped existing surf websites for the surf spots info, such best wind direction, best swell direction, dangers..
For the actual forecast I used a 3rd party API (https://stormglass.io), but first the data is processed on my server and served through a REST API, and then I used ChartJS to visualize it. 

## Technology used

This app is built with React, Redux for the state managment, React-router for the routing, MaterialUI as a CSS framework, ChartJS to visualise the forecast data and LeafletMap for the world map.

## Features

- Users can signup 
- Users can add surfspot, deciding if is public or secret, which means it's not showed on the map
- Users can remove single or multiple surfspot
- Users can modify their own surfspots
- Users save a surfspot in their favourites
- Users can use their GPS to get the closest surfspot location, search for it in the top bar or navigating the map.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
You need to start the server first.

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
