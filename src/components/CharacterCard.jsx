import { StarIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  Image,
  CardHeader,
  Box,
  Text,
  Heading,
  CardFooter,
  Button,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { characterBag } from "../store";
import { useState } from "react";

const CharacterCard = ({ data }) => {
  const [addFavorito, delFavorito] = characterBag((state) => [
    state.addFavorito,
    state.delFavorito,
  ]);
  const { name, image, status, species, gender, id } = data;
  const [favorito, setFavorito] = useState(false);
  const toast = useToast();

  const getStatusColor = (status) => {
    if (status === "Alive") {
      return "green";
    }
    if (status === "Dead") {
      return "red";
    }
    return "gray";
  };

  const agregarFavorito = () => {
    axios
      .post("http://localhost:3030/", { id: id })
      .then((r) => {
        addFavorito(id);
        return toast({
          title: "Agregado",
          description: `${name} agregado a favoritos`,
          status: "success",
          isClosable: true,
        });
      })
      .then(() => setFavorito(true))
      .catch((e) =>
        toast({
          title: "Error",
          description: "No se pudo agregar a favoritos",
          status: "error",
          isClosable: true,
        })
      );
  };

  const quitarFavorito = () => {
    axios
      .delete("http://localhost:3030/", { id: id })
      .then((r) => {
        delFavorito(id);
        return toast({
          title: "Eliminado",
          description: `${name} se elimino de favoritos`,
          status: "success",
          isClosable: true,
        });
      })
      .then(() => setFavorito(false))
      .catch((e) =>
        toast({
          title: "Error",
          description: "No se pudo agregar a favoritos",
          status: "error",
          isClosable: true,
        })
      );
  };

  const handleFavorito = () => {
    if (!favorito) {
      agregarFavorito();
    } else {
      quitarFavorito();
    }
  };

  return (
    <Card
      shadow="md"
      _hover={{ bg: name.includes("Morty") ? "#0a0a0a" : "darkGray" }}
    >
      <CardHeader>
        <Heading size="lg">{name}</Heading>
        <Heading size="sm" color={getStatusColor(status)}>
          {status}
        </Heading>
      </CardHeader>
      <CardBody>
        <Box size="sm">
          <Image src={image} boxSize="140px" rounded="md" />
        </Box>
        <Box>
          <Text>{species}</Text>
          <Text>{gender}</Text>
        </Box>
        <CardFooter>
          <Button onClick={handleFavorito} leftIcon={<StarIcon />}>
            {favorito ? "Quitar" : "Agregar"} Favorito
          </Button>
        </CardFooter>
      </CardBody>
    </Card>
  );
};

export default CharacterCard;
