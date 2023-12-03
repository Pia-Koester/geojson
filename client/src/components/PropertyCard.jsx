import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <Card>
      <CardBody>
        <Image
          src={property.image}
          alt={property.title}
          borderRadius="lg"
          boxSize="250px"
          objectFit="cover"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{property.title}</Heading>
          <Text>{property.owner.name}</Text>
          <Text>{property.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            ${property.price}
          </Text>
        </Stack>
        <Button>
          <Link to={`/properties/${property._id}`}>Property Details</Link>
        </Button>
      </CardBody>
    </Card>
  );
};

export default PropertyCard;
