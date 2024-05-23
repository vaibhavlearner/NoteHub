const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Databse connected : ${connect.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error");
        console.log(error.message);
    }
};

module.exports = connectDB;
