const { Schema, model } = require("mongoose");

const propertySchema = new Schema({
  title: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  bedrooms: { type: Number, required: true, min: 1 },
  image: { type: String, required: true },
  images: { type: Array },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  availability: {
    type: String,
    enum: ["vacant", "rented", "sold"],
    default: "vacant",
  },
  createdAt: { type: Date, default: Date.now },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
      default: "Point",
    },
    coordinates: {
      type: [Number],
      required: true,
      index: "2dsphere",
    },
  },
});

const Property = model("Property", propertySchema);

Property.collection.createIndex({ location: "2dsphere" });

module.exports = Property;
