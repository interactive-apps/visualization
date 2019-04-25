# Vn

[![Build Status](https://travis-ci.org/interactive-apps/visualization.svg?branch=master)](https://travis-ci.org/interactive-apps/visualization)
[![Greenkeeper badge](https://badges.greenkeeper.io/interactive-apps/visualization.svg)](https://greenkeeper.io/)
[![Maintainability](https://api.codeclimate.com/v1/badges/02ee03f17f8891ad73ed/maintainability)](https://codeclimate.com/github/interactive-apps/visualization/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/02ee03f17f8891ad73ed/test_coverage)](https://codeclimate.com/github/interactive-apps/visualization/test_coverage)

# Visualization Library

Starter javascript app to help developing, building and testing ES6 javascript libraries with ease

## Prequisites

- node
- git
- npm
- webpack
- babel

## Getting started

Clone the repository by running this command

```bash
$ git clone https://github.com/interactive-apps/visualization.git
```

Go to the app directory

```bash
$ cd visualization
```

Install all required dependencies for the app

```bash
$ npm install
```

## Development environments

To start an application for testing your library,

1. If you want to test your library over the browser then run

   ```bash
   $ npm run start:browser
   ```

The command will automatically open [http://localhost:3000/](http://localhost:3000/). on your default browser.

2. If you want to test your library over the terminal as nodejs script then run

   ```bash
   $ npm run start:node
   ```

**_NOTE_**: In both cases, the app will automatically reload if you change any of the source files inside app directory

## Building library

To build your library, run

```bash
$ npm run build-lib
```

## Publishing library

Inorder to publish your library in npm, make sure you already have npm account and have already logged in to npm in the command line tool of your computer, to login to npm run

```bash
$ npm login
```

You will be required to provide username and password for npm

To publish your library to npm run

```bash
$ npm run publish
```

If you are publishing to an npm organisation, make sure that you are member for that organisation
