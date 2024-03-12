import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, Textarea, VStack, List, ListItem } from "@chakra-ui/react";
import { useState } from "react";
import { FaMusic, FaPaperPlane, FaStar } from "react-icons/fa";

const Index = () => {
  const [activitySuggestions, setActivitySuggestions] = useState([]);
  const [songSuggestions, setSongSuggestions] = useState([]);

  const handleActivitySubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newActivity = {
      name: formData.get("activity_name"),
      description: formData.get("activity_description"),
    };
    setActivitySuggestions([...activitySuggestions, newActivity]);
  };

  const handleSongSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newSong = {
      title: formData.get("song_title"),
      artist: formData.get("artist_name"),
    };
    setSongSuggestions([...songSuggestions, newSong]);
  };
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={10}>
        <Heading as="h1" size="2xl" color="#0A1128" textAlign="center">
          Weekend Getaway!
        </Heading>
        <Text fontSize="xl" color="gray.600" textAlign="center">
          Join us for an unforgettable adventure with friends. Let's make some memories!
        </Text>
        <Box p={5} borderRadius="lg" bgColor="#0A1128" color="black" textAlign="center">
          <Heading as="h3" size="lg">
            Trip Details
          </Heading>
          <Text mt={3}>Date: June 10-12, 2023</Text>
          <Text>Location: Lake Tahoe, NV</Text>
          <Text>Accommodation: Tahoe Star Villa</Text>
          <Text>Don't forget to bring your swimwear and hiking shoes!</Text>
        </Box>

        <Flex direction={{ base: "column", md: "row" }} gap={10}>
          <Box w={{ base: "100%", md: "50%" }} bgColor="#0A1128" p={5} borderRadius="lg">
            <form onSubmit={handleActivitySubmit}>
              <VStack spacing={4}>
                <Heading as="h4" size="md" color="white">
                  Suggest an Activity <FaStar />
                </Heading>
                <FormControl id="activity_name">
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Activity name" name="activity_name" />
                </FormControl>
                <FormControl id="activity_description">
                  <FormLabel>Description</FormLabel>
                  <Textarea placeholder="What's this activity about?" name="activity_description" />
                </FormControl>
                <Button colorScheme="teal" variant="solid" rightIcon={<FaPaperPlane />} type="submit" w="full">
                  Submit
                </Button>
              </VStack>
            </form>
          </Box>

          <Box w={{ base: "100%", md: "50%" }} bgColor="#0A1128" p={5} borderRadius="lg" display="flex" flexDirection="column" justifyContent="space-between">
            <form onSubmit={handleSongSubmit} style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <VStack spacing={4} flex={1}>
                <Heading as="h4" size="md" color="white">
                  Add to Playlist <FaMusic />
                </Heading>
                <FormControl id="song_title">
                  <FormLabel>Song Title</FormLabel>
                  <Input placeholder="What's the jam?" name="song_title" />
                </FormControl>
                <FormControl id="artist_name">
                  <FormLabel>Artist</FormLabel>
                  <Input placeholder="Who's the artist?" name="artist_name" />
                </FormControl>
                <Button colorScheme="brand" variant="solid" rightIcon={<FaPaperPlane />} type="submit" w="full">
                  Add Song
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      </VStack>
      <Box w="100%" p={5}>
        <Heading as="h3" size="lg" color="brand.900" textAlign="center">
          Submitted Activity Suggestions
        </Heading>
        <List spacing={3}>
          {activitySuggestions.map((activity, index) => (
            <ListItem key={index} bgColor="brand.700" p={3} borderRadius="md">
              <Text fontWeight="bold">{activity.name}</Text>
              <Text>{activity.description}</Text>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box w="100%" p={5}>
        <Heading as="h3" size="lg" color="brand.900" textAlign="center">
          Submitted Song Suggestions
        </Heading>
        <List spacing={3}>
          {songSuggestions.map((song, index) => (
            <ListItem key={index} bgColor="brand.600" p={3} borderRadius="md">
              <Text fontWeight="bold">{song.title}</Text>
              <Text>by {song.artist}</Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Index;
