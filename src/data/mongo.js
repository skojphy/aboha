import { MongoClient } from 'mongodb';
import { MONGO_URL } from '$lib';

const client = new MongoClient(MONGO_URL);

export default client.db('Aboha');
