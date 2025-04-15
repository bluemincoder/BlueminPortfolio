import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;
const DB_NAME = "portfolio";

if (!MONGODB_URI) {
    throw new Error("⚠️ MONGODB_URI is not defined in environment variables.");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose
            .connect(MONGODB_URI, {
                dbName: DB_NAME,
                bufferCommands: false,
            })
            .then((mongooseInstance) => {
                console.log("Database connected.");
                return mongooseInstance;
            })
            .catch((error) => {
                console.error("Failed to connect to database:", error);
                throw error;
            });
    }

    cached.conn = await cached.promise;
    (global as any).mongoose = cached;
    return cached.conn;
};

export default connectToDatabase;
