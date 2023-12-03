import { useLoaderData } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import PropertyCard from "../components/PropertyCard";

const NearbyProperties = () => {
  const properties = useLoaderData();
  let lat;
  let long;
  navigator.geolocation.getCurrentPosition(function (position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
  });
  const paramsString = `?lng=${long}lat=${lat}&distance=5000`;
  const searchParams = new URLSearchParams(paramsString);

  for (const p of searchParams) {
    console.log(p);
  }

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={8}>
      {properties.map((property) => {
        return <PropertyCard key={property._id} property={property} />;
      })}
    </Grid>
  );
};

export default NearbyProperties;
