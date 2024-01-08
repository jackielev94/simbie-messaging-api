# Simbie Messaging API

Prototype to send and receive messages built with TypeScript, Node, Express, and a Postgres Database.

## Instructions

In order to run the application locally, complete the following steps:
* Set up a postgres database locally (in your psql shell run ```create database <insert your db name here>;``` you might also need to run ```create extension if not exists "uuid-ossp";``` - these commands are located in ```index.sql```), and run the ```script.js``` file to create all the tables and types in the right order.
* Seed ... To come
* Create a ```.env``` file at the root of the repo with your pg connection string as an environment variable ```PG_CONN=<insert your pgconn here in the format PG_CONN=postgres://<email>:<password>@<server>/<databasename>>```
* Run ```npm install``` to install all required dependencies
* At this point, you should be able to run ```npm run dev``` to start the application on your local host and hit the following endpoints:
  - To come
* If you'd like to run the tests, you can do so by running ```npm run test```.

## Approach and Trade-offs

I took the following steps in working through this project:
To come

Trade-offs:
To come
