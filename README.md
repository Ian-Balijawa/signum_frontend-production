# Signum Advocates Frontend

This is the frontend for the Signum Advocates Website. This application runs on Next.js and thus requires a Node.js environment to run, preferably on the same server as its respective API. The frontend will attempt to fetch from http://localhost:5005 as the base api unless otherwise edited in [the config file](./beConstants/index.js). To run the API and the frontend concurrently on the same server, consider using [PM2](https://pm2.keymetrics.io/)

# SETUP

## Installation.

1. You can use npm to setup.

`npm install`

## Running the app

### Dev Mode:

`npm run dev`

### Production:

1. Create a build first with this command:

`npm run build`

2. Then start the built app with this command:

`npm run start`
