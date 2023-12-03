import { useLoaderData } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import PropertyCard from "../components/PropertyCard";

const PropertiesOverview = () => {
  const properties = useLoaderData();
  console.log(properties);

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={8}>
      {properties.map((property) => {
        return <PropertyCard key={property._id} property={property} />;
      })}
    </Grid>
  );
};

export default PropertiesOverview;
