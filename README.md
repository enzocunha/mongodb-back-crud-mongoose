# Back Crud with Mongoose

Case Study: Mongoose ORM and MongoDB

## Steps

1. Create a cluster in [MongoDB Atlas](https://cloud.mongodb.com/)
2. Get the connection string from the cluster and store it in a [.env file](/.env.example)
3. Install `mongoose` and create the [models](/models) for the database
4. Create a [connection](/lib/dbConnect.js) to the database
5. Create the [routes](/pages/api/) for the API using the connection
6. For better organization use [controllers](/controllers) to handle the manipulation of the data

## References

- [Mongoose Docs](https://mongoosejs.com/docs/guide.html)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
- [NextJS with Mongoose Example](https://github.com/vercel/next.js/tree/canary/examples/with-mongodb-mongoose)