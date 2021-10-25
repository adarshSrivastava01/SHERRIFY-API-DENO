import { Bson, MongoClient } from "https://deno.land/x/mongo@v0.28.0/mod.ts";

const client = new MongoClient();

await client.connect(
  "mongodb+srv://sherrify:sherrify12345@sherrify.l7cox.mongodb.net/sherrify?retryWrites=true&w=majority"
);

const db = client.database("sherrify");

export default db;
