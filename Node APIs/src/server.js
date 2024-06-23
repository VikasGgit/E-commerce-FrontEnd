import { connectDb } from "./config/db.js";
import app from "./index.js";

app.listen(4000, 
    async ()=>{
       await connectDb();
        console.log("app listening on 4000 ") 
    }
    )