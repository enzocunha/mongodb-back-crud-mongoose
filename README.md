# Back Crud with Mongoose

## Description

This is a simple CRUD with Mongoose and NextJS for a simple API.

## Steps

1. Create a cluster in [MongoDB Atlas](https://cloud.mongodb.com/)
2. Get the connection string from the cluster and store it in a [.env file](/.env.example)
3. Install `mongoose` and create the [models](/models) for the database
4. Create a [connection](/lib/dbConnect.js) to the database
5. Create the [routes](/pages/api/) for the API using the connection