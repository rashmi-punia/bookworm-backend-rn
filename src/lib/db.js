import mongoose from "mongoose";
import "dotenv/config";

let isConnected = false;


export const connectDb = async () => {
    mongoose.set('strictQuery', true);
    if(isConnected){
        console.log("Already connected db");
        return
    }
    try {
    const conn = await mongoose.connect(process.env.MONGO_URI,{
        dbName: "myFirstApp",
        // useNewUrlParser: true,
        // useUnifiedTopology: true,

    });
    isConnected = true;

    console.log(`Database connected ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connecting with db", error);

    process.exit(1); //exit with failure
    
  }
};


