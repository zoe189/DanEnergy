const {MongoClient} = require('mongodb');

const databse = 'mydatabase';
const collection = 'users';

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run(){
    try {
        await client.connect();
        console.log('✅ Connected to MongoDB');
        const db= client.db(database);
        const usersCollection = db.collection(collection);

        const result = await usersCollection.inserOne({name: "Hawi", role: "admin"});
        console.log()
    }
}