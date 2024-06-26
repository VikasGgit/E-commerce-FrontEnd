// const password= f0yDkJ8Ayn83NIlx;

const mongourl="mongodb+srv://vikascollege001:f0yDkJ8Ayn83NIlx@cluster0.etf8guk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const newMongourl="mongodb+srv://vikasguptagkp:@cluster0.bjwssiq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const testp="AkUlHk3FhW2FMhll"
const url="mongodb+srv://vikascollege001:AkUlHk3FhW2FMhll@cluster0.tdhy6wt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

import mongoose from "mongoose"
const connectDb=()=>{
 mongoose.connect(mongourl, {
    dbName: "Ecommerce",
}).then(
    ()=>{
        console.log("db connection established");
    }
).catch(err=>{
    console.error("Error connecting: " + err.message);
});
}
 export {connectDb};

  
// import { MongoClient, ServerApiVersion }  from "mongodb"
// const uri = "mongodb+srv://vikascollege001:f0yDkJ8Ayn83NIlx@cluster0.etf8guk.mongodb.net/?appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
// strict: true,
//     deprecationErrors: true,
//   }
// });

// async function connectDb() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// connectDb().catch(console.dir);

// export { connectDb };
