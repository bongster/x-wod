import mongoose, { Schema } from "mongoose";

const foodSchema = new Schema({
  author: {
    type: String,
    required: true,
  },
  desc: {
    type: String
  },
  imageUrl: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: true,
  },
}, {
  timestamps: true
})

let foodModel;
try {
  foodModel = mongoose.model("foods");
} catch (e) {
  foodModel = mongoose.model("foods", foodSchema);
}

export default async (req, res) => {
  try {
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
    switch (req.method.toUpperCase()) {
      case "GET":
        return res.json(await foodModel.find().exec());
      case "POST":
        return res.json(await foodModel.create(req.body));
      default:
        return res.status(405).send(new Error(`Not supported method type: ${req.method}`))
        break;
    }
  } catch (e) {
    res.status(500).send(e)
  }
}