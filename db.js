const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://saurab07h_db_user:mern12@cluster0.hmibfdy.mongodb.net/GOFOOD?retryWrites=true&w=majority&appName=Cluster0";


const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected to MongoDB');
    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection("foodCategory");
    const catData = await foodCategory.find({}).toArray();
    global.food_items = data;
    global.foodCategory = catData;
  } catch (err) {
    console.log("---", err);
    console.error(err.stack);
  }
};

module.exports = mongoDB;