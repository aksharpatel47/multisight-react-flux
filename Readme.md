# Multisight built on React & Flux

This project has been undertaken as a challenge given by Cory House in his Pluralsight
course on React and Flux. I learnt a lot from his course and its worth checking out.

To get this project up and running you'll need Node.js installed on your computer and run
the following commands in the root directory.

```
> npm i                  // Installs all the dependencies
> npm i -g webpack knex  // Installs webpack and knex globally
> webpack                // Bundles and compiles JSX
> cp knexfile.example.js knexfile.js
> knex migrate:latest    // Creates sqlite database
> npm start              // Starts the server on port 8000
```

## Frontend built using

* React
* Flux
* React-Router
* History
* Bootstrap

## Backend built using

* Node.js, Express
* Knex
* Sqlite3

## Dev Tools used

* Webpack
* Babel