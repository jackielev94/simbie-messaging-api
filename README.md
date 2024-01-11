# Simbie Messaging API

Prototype to send and receive messages built with TypeScript, Node, Express, and a Postgres Database.

## Instructions

In order to run the application locally, complete the following steps:
* Set up a postgres database locally (in your psql shell run ```create database <insert your db name here>;``` you might also need to run ```create extension if not exists "uuid-ossp";``` - these commands are located in ```index.sql```), and run the ```script.js``` file to create all the tables and types in the right order. Then you can seed some accounts by running the ```seed.sql``` file.
* Create a ```.env``` file at the root of the repo with your pg connection string as an environment variable ```PG_CONN=<insert your pgconn here in the format PG_CONN=postgres://<username>:<password>@<server>/<databasename>>```
* Run ```npm install``` to install all required dependencies
* At this point, you should be able to run ```npm run dev``` to start the application on your local host and hit the following endpoints:
  - GET /authentication/login (simply checks a matched email and password... not at all secure, and just meant to mock a login process)
  - GET /persons/:id/threads (gets all threads with messages for a person... if you've only seeded accounts and persons you won't be able to see any threads, but you can run the frontend app to create some threads)
  - GET /accounts?role=TypeOfRole (gets all providers or patients depending on the role you pass in)
  - POST /messages (send the message body type found in the express folder to create a new message)
  - PUT /messages/:id (mark a message read)

## Approach and Trade-offs

I took the following steps in working through the backend setup:
* Design a database schema for a simple messaging system between patients and healthcare providers
* Map out urls, request params/bodies and response bodies for each of the endpoints needed to read and send messages
* Create a TypeScript Node Express server to ensure strict typing and a simple setup
* Scaffold out the types, routes, service layer, and data provider layer
* Test functionality of routes and service layer

Trade-offs:
* Clinics: I did not create a 'clinic' data layer, so a patient can send messages to all providers in the system, and a provider can send messages to all patients for now. This is something that should be easily expandable in the future.
* Authentication: I decided not to use any sort of authentication library like ```passport.js``` for sake of time. I figured a more robust solution would be ideal anyway like an auth0 or some other third party, and decided to just mock a login process for now.
* Testing: I would've liked to include some unit tests, but didn't really have time to put them together and wanted to focus on getting as much code up as possible instead.
