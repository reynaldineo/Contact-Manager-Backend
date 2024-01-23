const mongose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongose.connect(process.env.CONNECTION_STRING);
    console.log(
      "MongoDB connected:",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
