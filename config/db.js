import mongoose from "mongoose";
import colors from "colors";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `connect to mongodb database ${conn.connection.host}`.bgYellow.white
    );
  } catch {
    console.log(`Error in ${error}`.bgRed.white);
  }
};

export default connectDb;
