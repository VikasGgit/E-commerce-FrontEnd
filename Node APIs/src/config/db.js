// const password= f0yDkJ8Ayn83NIlx;

const mongourl="mongodb+srv://vikascollege001:f0yDkJ8Ayn83NIlx@cluster0.etf8guk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const newMongourl="mongodb+srv://vikasguptagkp:@cluster0.bjwssiq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const testp="AkUlHk3FhW2FMhll"
// const url="mongodb+srv://vikascollege001:AkUlHk3FhW2FMhll@cluster0.tdhy6wt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

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
