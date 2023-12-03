import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Heading, Button, Grid, GridItem, Highlight } from "@chakra-ui/react";

const Start = () => {
  return (
    <>
      <Grid
        templateAreas={`"header header"
                  "main main"
                  "footer footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" area={"header"}>
          <Heading lineHeight="tall">
            <Highlight
              query="castle"
              styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
            >
              Find the right castle today!
            </Highlight>
          </Heading>
        </GridItem>

        <GridItem pl="2" area={"main"}>
          <Button>
            <Link to={"/properties"}>See all Properties</Link>
          </Button>
          <Outlet />
        </GridItem>
        <GridItem pl="2" area={"footer"}>
          <p>WBS Coding School GeoJSON Excercise</p>
        </GridItem>
      </Grid>
    </>
  );
};

export default Start;
