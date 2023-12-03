import { useLoaderData } from "react-router-dom";
import {
  Tag,
  Card,
  CardHeader,
  CardBody,
  Stack,
  Heading,
  Text,
  Image,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { LuMailbox, LuPhone } from "react-icons/lu";

const PropertyDetails = () => {
  const property = useLoaderData();
  console.log(property);

  const tagColor = () => {
    if (property.availability === "vacant") {
      return "green";
    } else if (property.availability === "rented") {
      return "orange";
    } else if (property.availability === "sold") {
      return "red";
    } else {
      return "gray";
    }
  };

  return (
    <div>
      <Tag
        size={"md"}
        variant="solid"
        colorScheme={tagColor()}
        boxShadow="md"
        m={2}
      >
        {property.availability.toUpperCase()}
      </Tag>
      <Card>
        <CardBody>
          <Flex gap={8}>
            <Image
              src={property.images[0]}
              alt={property.title}
              borderRadius="lg"
              boxSize="250px"
              objectFit="cover"
            />
            <Image
              src={property.images[1]}
              alt={property.title}
              borderRadius="lg"
              boxSize="250px"
              objectFit="cover"
            />
          </Flex>
          <Stack mt="6" spacing="3">
            <Heading size="md">{property.title}</Heading>
            <Text>{property.description}</Text>
            <Divider />
            <Heading size="md">Contact Owner: </Heading>
            <Text>{property.owner.name}</Text>
            <Flex gap={4}>
              <LuMailbox />
              <Text>{property.owner.email}</Text>
            </Flex>
            <Flex gap={4}>
              <LuPhone />
              <Text>{property.owner.phoneNumber}</Text>
            </Flex>
            <Text color="blue.600" fontSize="2xl">
              ${property.price}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default PropertyDetails;
