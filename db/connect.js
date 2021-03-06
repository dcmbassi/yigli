import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI) throw new Error('Please define a MongoDB URI in your environment file')

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

const dbConnect = async () => {
    if (cached.conn) return cached.conn

    if (!cached.promise) {
        const opts = { bufferCommands: false }

        cached.promise = mongoose.connect(MONGO_URI, opts).then(mongoose => mongoose)

        cached.conn = await cached.promise
        return cached.conn
    }
}

export default dbConnect