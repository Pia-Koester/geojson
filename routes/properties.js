const express = require("express");
const propertyRouter = express.Router();
const {
  createProperty,
  getProperties,
  getProperty,
  getNearbyProperties,
} = require("../controllers/properties");

propertyRouter.route("/").post(createProperty).get(getProperties);
propertyRouter.route("/near-by").get(getNearbyProperties);
propertyRouter.route("/:id").get(getProperty);

module.exports = propertyRouter;
