import { Box, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import { characterBag } from "../store";

const CardSpace = () => {
  const [personajes, fetchPersonajes] = characterBag((state) => [
    state.allPersonajes,
    state.setAllPersonajesData,
  ]);

  useEffect(() => {
    fetchPersonajes();
  }, []);

  return (
    <Box p="2">
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {personajes.map((v) => (
          <CharacterCard data={v} key={v.id} />
        ))}
      </Grid>
    </Box>
  );
};

export default CardSpace;
