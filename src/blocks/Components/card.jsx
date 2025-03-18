import { Card, CardBody, CardFooter, Image, Text, Heading, Button, Stack } from "@chakra-ui/react";

const CardChakra = () => {
  return (
    <Card maxW="sm" overflow="hidden" borderRadius="lg" boxShadow="md">
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
        borderRadius="lg"
      />
      <CardBody>
        <Stack spacing="3">
          <Heading size="md">Living Room Sofa</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired spaces.
          </Text>
          <Text fontSize="2xl" fontWeight="medium" letterSpacing="tight">
            $450
          </Text>
        </Stack>
      </CardBody>
      <CardFooter gap="2">
        <Button variant="solid" colorScheme="blue">
          Buy now
        </Button>
        <Button variant="ghost">Add to cart</Button>
      </CardFooter>
    </Card>
  );
};

export default CardChakra;
