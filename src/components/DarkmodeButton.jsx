import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";

const DarkmodeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button mx="1" onClick={toggleColorMode}>
      {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default DarkmodeButton;
