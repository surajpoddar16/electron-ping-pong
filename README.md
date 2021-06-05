# Basic Ping Pong

## Installation

### Install application dependencies

#### Install NodeJS

If you dont have NodeJs install you can do install an LTS version here

https://nodejs.org/en/download/

In the application directory:

#### Install NodeJS packages

```shell script
npm install
```

### Running the application

Run the following command

```shell script
npm run start
```

This will start NodeJs server with electron as dependency
This will also run backend jar as a child process 


### Changing Ping Endpoint

in `src/renderer.js` replace argument of [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) method with your url, inside `pingServer` method
By default this points to the backend server ping pong api.

use `renderPong` method to return html to be rendered in pong response.

### Packaging the application

Run the following command
```shell script
npm run dist
```
