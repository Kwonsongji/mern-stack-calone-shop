require('dotenv').config();
// connect mongoose to database
const mongoose = require('mongoose');
// mongoose.connect(uri, options);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI  || 'mongodb://localhost/calone', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     /*  useCreateIndex: true,
        useFindAndModify: false,  */  
    });
  
    console.log('MongoDB connection SUCESS');
  } catch (error) {
    console.error('MongoDB connection FAIL');
    process.exit(1);
  }
}
module.exports = connectDB;