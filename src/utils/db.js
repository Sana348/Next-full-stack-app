import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      strictQuery: true // Add this line to enable strictQuery mode
    });
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
