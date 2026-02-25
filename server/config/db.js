import mongoose from "mongoose";


const conneDB = async ()=>{
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database connected: ${connection.host}`)
        
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);   
    }
}

export default conneDB;