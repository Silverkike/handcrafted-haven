import { Db, MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const dbName = process.env.MONGODB_DB || 'handcrafted_haven';

type MongoGlobal = {
    _mongoClient?: MongoClient;
    _mongoClientPromise?: Promise<MongoClient>;
};

const globalWithMongo = globalThis as typeof globalThis & MongoGlobal;

if (!globalWithMongo._mongoClientPromise) {
    globalWithMongo._mongoClient = new MongoClient(uri);
    globalWithMongo._mongoClientPromise = globalWithMongo._mongoClient.connect();
}

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
    const client = (await globalWithMongo._mongoClientPromise) as MongoClient;
    const db = client.db(dbName);

    return { client, db };
}
