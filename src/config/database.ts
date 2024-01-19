import mongoose from 'mongoose';

export default function connectDB() {
  const url = 'mongodb+srv://root:root@bestpick.cjnjuhs.mongodb.net/social-chat';

  mongoose.connect(url);

  const dbConnection = mongoose.connection;

  dbConnection.once('open', () => {
    console.log(`Database connected: ${url}`);
  });

  dbConnection.on('error', (err) => {
    console.error(`Connection error: ${err}`);
  });
}
