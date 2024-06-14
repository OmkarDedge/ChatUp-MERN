const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://omkardedge10:JohnyDepp2000@cluster0.g6wn2xz.mongodb.net/chatapp",
      {}
    );
    console.log(`DB Connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;
