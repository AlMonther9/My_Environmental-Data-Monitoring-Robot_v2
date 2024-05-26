# Environmental Monitoring System

This project is a React application for an environmental monitoring system. It displays sensor readings and charts for various environmental data. The app is structured as follows:

## Project Structure

```
env-monitor-app/
├── node_modules/
├── public/
├── src/
├── .gitignore
├── package.json
├── README.md
└── yarn.lock or package-lock.json
```

- **node_modules/**: Contains the project's dependencies.
- **public/**: Contains the public assets for the app.
- **src/**: Contains the main application code.
- **.gitignore**: Specifies which files and directories to ignore in version control.
- **package.json**: Manages project dependencies and scripts.
- **README.md**: Contains information about the project.
- **yarn.lock or package-lock.json**: Lock file for dependency versions.

## Source Directory

```
src/
├── components/
│   ├── SensorReadings.js
│   └── SensorChart.js
├── App.js
├── App.css
├── index.js
└── serviceWorker.js
```

- **components/**: Contains React components for sensor readings and charts.
- **App.js**: Main component for the application.
- **App.css**: Styles for the App component.
- **index.js**: Entry point for the React application.
- **serviceWorker.js**: Service worker for offline capabilities.

## Running the Application

1. Install dependencies: `npm install` or `yarn install`
2. Start the development server: `npm start` or `yarn start`
3. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Features

- Displays sensor readings from environmental sensors.
- Shows a chart of sensor data over time.
- Responsive design for mobile and desktop.

## Technologies Used

- React
- Axios for HTTP requests
- Recharts for data visualization
- Styled-components for styling

## Author

[AlMonther Abdulhafeez]

---


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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
