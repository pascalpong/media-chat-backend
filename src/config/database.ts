import mongoose from 'mongoose';

export default function connectDB() {
  const url = `${process.env.DATABASE}`;
  mongoose.connect(url);

  const dbConnection = mongoose.connection;

  dbConnection.once('open', () => {
    console.log(`Database connected`);
  });

  dbConnection.on('error', (err) => {
    console.error(`Connection error: ${err}`);
  });
  
}
