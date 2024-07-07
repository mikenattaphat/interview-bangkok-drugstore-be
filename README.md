# Bangkok Drugstore API

This project is an API designed for managing the operations of a drugstore in Bangkok. It provides endpoints for various functionalities needed to manage inventory, sales, customer information, and other related operations. The API is built using Node.js and relies on MongoDB for data storage.

## Table of Contents

- [Setup MongoDB](#setup-mongodb)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Testing](#testing)
- [Deployment](#deployment)

- **node 16**

## Setup MongoDB

To set up MongoDB using Docker, navigate to the `db` directory and run the following command:

```bash
cd db
docker-compose up -d
```

# Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Deploy

## Edit .env File
```bash
replace localhost -> host.docker.internal
```

## build
```bash
docker build -t bangkok-drugstore-api:latest . 
docker run -d -p 3000:3000  bangkok-drugstore-api:latest   
```