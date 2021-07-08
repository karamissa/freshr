# Freshr

## Freshr is a music recommendation app. It uses the spotify API to search for artists/tracks & fetch recommendations.

The app was built using React & Node.js. Framer Motion for React was also used and It's a very intuitive fun to use animation library.

To get started with the project, you can clone the github repo:

    git clone https://github.com/beardedpirate/freshr

Navigate to the project folder & install Node app dependencies:

    cd freshr
    npm install

Navigate to the client folder and Install front end dependencies:

    cd client
    npm install

In the root project `frehsr` folder create a `.env` file & add your spotify client ID + client secret (You can get them [here](https://developer.spotify.com/dashboard/applications)) so the file should look like:

    SPOTIFY_CLIENT_ID=<Your Spotify client ID here>
    SPOTIFY_CLIENT_SECRET=<Your Spotify client secret here>

Finally, run the `dev` command:

    npm run dev
