import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db('better-auth-2');

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    })
})