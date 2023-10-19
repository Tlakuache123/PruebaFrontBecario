import { Image, Box, Flex, Heading } from "@chakra-ui/react";
import { characterBag } from "../store";

const FavIcons = () => {
  const [favoritos, allPersonajeData] = characterBag((state) => [
    state.favoritos,
    state.allPersonajesData,
  ]);

  return (
    <Box p="2">
      <Heading mb="2">Favoritos</Heading>
      <Flex gap="2">
        {allPersonajeData
          .filter((v) => favoritos.includes(v.id))
          .map((v) => (
            <Image key={v.id} boxSize="80px" rounded="full" src={v.image} />
          ))}
      </Flex>
    </Box>
  );
};

export default FavIcons;
