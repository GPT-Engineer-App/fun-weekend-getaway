import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { FaMusic, FaPaperPlane, FaStar } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={10}>
        <Heading as="h1" size="2xl" color="teal.400" textAlign="center">
          Weekend Getaway!
        </Heading>
        <Text fontSize="xl" color="gray.600" textAlign="center">
          Join us for an unforgettable adventure with friends. Let's make some memories!
        </Text>
        <Box p={5} borderRadius="lg" bgColor="purple.500" color="white" textAlign="center">
          <Heading as="h3" size="lg">
            Trip Details
          </Heading>
          <Text mt={3}>Date: June 10-12, 2023</Text>
          <Text>Location: Lake Tahoe, NV</Text>
          <Text>Accommodation: Tahoe Star Villa</Text>
          <Text>Don't forget to bring your swimwear and hiking shoes!</Text>
        </Box>

        <Flex direction={{ base: "column", md: "row" }} gap={10}>
          <Box w={{ base: "100%", md: "50%" }} bgColor="orange.300" p={5} borderRadius="lg">
            <form>
              <VStack spacing={4}>
                <Heading as="h4" size="md" color="white">
                  Suggest an Activity <FaStar />
                </Heading>
                <FormControl id="activity_name">
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Activity name" />
                </FormControl>
                <FormControl id="activity_description">
                  <FormLabel>Description</FormLabel>
                  <Textarea placeholder="What's this activity about?" />
                </FormControl>
                <Button colorScheme="teal" variant="solid" rightIcon={<FaPaperPlane />} type="submit">
                  Submit
                </Button>
              </VStack>
            </form>
          </Box>

          <Box w={{ base: "100%", md: "50%" }} bgColor="blue.300" p={5} borderRadius="lg">
            <form>
              <VStack spacing={4}>
                <Heading as="h4" size="md" color="white">
                  Add to Playlist <FaMusic />
                </Heading>
                <FormControl id="song_title">
                  <FormLabel>Song Title</FormLabel>
                  <Input placeholder="What's the jam?" />
                </FormControl>
                <FormControl id="artist_name">
                  <FormLabel>Artist</FormLabel>
                  <Input placeholder="Who's the artist?" />
                </FormControl>
                <Button colorScheme="pink" variant="solid" rightIcon={<FaPaperPlane />} type="submit">
                  Add Song
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
