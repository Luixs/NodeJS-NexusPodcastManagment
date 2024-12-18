import * as mongoDB from 'mongodb';

let client: mongoDB.MongoClient;

export const connectToDatabase = async (): Promise<mongoDB.Db> => {
    try {

        if (!client) {
            // Initialize the MongoDB client
            client = new mongoDB.MongoClient(process.env.MONGODB_STRINGC!);
            await client.connect();
            console.log('Successfully connected to MongoDB');
        }

        // Return the database instance
        return client.db(process.env.MONGODB_DATABASE);

    } catch (error) {
        
        console.error('Error connecting to MongoDB:', error);
        throw new Error('Failed to connect to database');
    }
};

export const closeDatabaseConnection = async () => {
    if (client) {
        await client.close();
        console.log('MongoDB connection closed');
    }
};
