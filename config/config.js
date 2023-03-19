const mongoose = require("mongoose");

const connectionString = process.env.MONGO_CONNECTION.replace(
  "<password>",
  process.env.MONGO_PASS
);
const DataBase = async () => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = DataBase;
