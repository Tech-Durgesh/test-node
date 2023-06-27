const {MongoClient} = require('mongodb');
const localUrl = 'mongodb://localhost:27017';
const client = new MongoClient(localUrl);
const database = 'school';

async function connection(){
    let connect = await client.connect();
    let dbConnect = connect.db(database);
    let collection = dbConnect.collection('students');
    return collection;
}

module.exports = connection;