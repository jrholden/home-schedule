import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await connectWithRetry();
    } catch (err) {
        console.error("Could not connect to MONGO:: ", err);
    }
}

const connectWithRetry = () => {
    const MONGO_URI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?${process.env.DB_OPTIONS}`
    const retries = process.env.DB_CONNECT_RETRIES;
    const delay = process.env.DB_CONNECT_CHILLOUT;
    return new Promise((resolve, reject) => {
        const connect = async (attempts) => {
            try {
                await mongoose.connect(MONGO_URI, {});
                console.log('Connected to MongoDB');
                resolve();
            } catch (error) {
                console.error(`Failed to connect to MongoDB (attempt ${attempts}):`, error);
                if (attempts < retries) {
                    setTimeout(() => connect(attempts + 1), delay);
                } else {
                    reject(new Error(`Failed to connect to MongoDB after ${retries} retries`));
                }
            }
        };
        connect(1);
    });
};

export default connectDB;