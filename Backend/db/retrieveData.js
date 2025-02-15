const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;

const uri =
  "mongodb+srv://dbArjun:dbArjun27@junbase.8anzo.mongodb.net/Todo?retryWrites=true&w=majority&appName=JunBase";

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function connectToDatabase() {
  await mongoose.connect(uri, clientOptions);
  await mongoose.connection.db.admin().command({ ping: 1 });
}

async function retrieveDataById(id) {
  try {
    await connectToDatabase();

    const findCollection = mongoose.connection.db.collection("todo-apps");
    const getData = await findCollection.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });
    return getData;
  } catch (error) {
    console.log("Error: ", error);
  }
}

async function run() {
  try {
    await connectToDatabase();

    const findCollection = await mongoose.connection.db.collection("todo-apps");
    const task = await findCollection.find().toArray();
    return task;
  } finally {
    await mongoose.disconnect();
  }
}

module.exports = { run, retrieveDataById };
