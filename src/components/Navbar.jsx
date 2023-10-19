import { Box, Center, Flex, Heading, Spacer } from "@chakra-ui/react";
import DarkmodeButton from "./DarkmodeButton";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Box shadow="lg" px="1" py="2" position="static">
      <Flex>
        <Center mx="2">
          <Heading textAlign="center" size="sm">
            Rick and Morty Wiki
          </Heading>
        </Center>
        <Spacer />
        <SearchBar />
        <Spacer />
        <DarkmodeButton />
      </Flex>
    </Box>
  );
};

export default Navbar;
