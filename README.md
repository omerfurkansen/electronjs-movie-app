<!-- Author: Omer Furkan Sen -->
# ElectronJS Movie App

The app is built/initiated using TypeScript-React-Electron (desktop-web) and utilizes additional packages such as:
- mui
- redux / redux-thunk / redux-toolkit
- axios
- react-navigation
- react-taastify

# Installation
1. First clone the repository into your local machine by running this command:
- `git clone https://github.com/omerfurkansen/electronjs-movie-app.git` 
- or [download the repository](https://github.com/omerfurkansen/electronjs-movie-app/archive/refs/heads/main.zip) as a zip file and extract it.
2. Then, in the project root, execute `yarn` to download all necessary packages to run the app.
```
cd electronjs-movie-app
yarn
```

3. If you'd like to view the app only in a browser, simply run `yarn start`. The application will be accessible at `http://localhost:3000`.

4. If you'd like to view the app as a desktop app, execute `yarn electron:serve-dev`. This will open the application as a desktop app.

5. To create a build, run `yarn make`. This will generate a `out` folder containing the necessary files to run the production app.

# Features:
- Displaying 10 random movies on the Home Screen
- Searching for movies by providing the name of the movie
- Opportunity to learn more about the movie by directing to the movie detail page
- Toggle between themes (dark & light) as desired

# Bonuses:
- App is built with Electron for desktop purposes
- API built as an SDK and can be used in other projects

