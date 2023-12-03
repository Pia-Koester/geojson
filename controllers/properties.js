const Property = require("../models/property");

const createProperty = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      bedrooms,
      image,
      images,
      owner,
      availability,
      location,
    } = req.body;
    const property = await Property.create({
      title,
      description,
      price,
      bedrooms,
      image,
      images,
      owner,
      availability,
      location,
    });
    res.status(201).json(property);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occured! Stay calm");
  }
};

const getProperties = async (req, res) => {
  try {
    const properties = await Property.find({}).populate("owner");
    res.json(properties);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occured while fetching! Stay calm");
  }
};

const getProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await Property.findById(id).populate("owner");
    res.json(property);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occured while fetching! Stay calm");
  }
};

const getNearbyProperties = async (req, res) => {
  try {
    const { lng, lat, distance } = req.query;
    const properties = await Property.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(lng), parseFloat(lat)],
          },
          $maxDistance: parseFloat(distance),
        },
      },
    });

    res.send(properties);
  } catch (error) {
    res.json(error);
  }

  // const properties = Property.geoNear(
  //   {
  //     type: "Point",
  //     coordinates: [parseFloat(lng), parseFloat(lat)],
  //   },
  //   { maxDistance: 100000, spherical: true }
  // );
};

module.exports = {
  createProperty,
  getProperties,
  getProperty,
  getNearbyProperties,
};
