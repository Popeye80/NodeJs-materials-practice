const MongoClient = require('mongodb').MongoClient;
const collections = {};

const getCollections = () => {
  return collections;
};

const connectMongo = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();
  collections.Posts = db.collection('posts');
};
module.exports = {connectMongo, getCollections};
