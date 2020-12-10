// hentet fra forelesnings eksempelet
import mongoose from 'mongoose';

const connectDB = async () => {
  let dbCon;
  try {
    dbCon = await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  } catch (error) {
    console.log(error.message);
  }

  console.log(`Connected to mongodb ${dbCon.connection.host}`);
};

export default connectDB;
