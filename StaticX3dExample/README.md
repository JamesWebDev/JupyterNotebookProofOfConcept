# Running Locally

## Prerequisites 

1. You will need node.js installed. At the time of writing I personally have v11.12.0 installed and I am running on a windows computer

## Troubleshooting 
**Error: listen EADDRINUSE: address already in use :::3000**
 We are going to be using express.js to run a web server locally. The project is coded to use port 3000 which is one of the ports commonly used when running node.js sites locally. If you happen to have something else already listening to port 3000 you will need to try a different port the port number is hardcoded in the server.js file. 

## Running the website
1. open a terminal
1. cd into the StaticX3dExample folder
1. run `npm run ci` 
1. run `npm start` 
1. open a browser and go to http://localhost:3000/
1. click the Hello World X3D example link
1. mouse over the teapot
1. click and drag, or spin your scroll wheel to observe the teapot is interactive
