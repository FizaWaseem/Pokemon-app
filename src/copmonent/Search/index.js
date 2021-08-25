import React from "react";
import { Box, Input, InputLeftElement, InputGroup, Button } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
export const CustomSearch = ({ value, onChange,onClick }) => {
  return (
    <Box width="60%" >
      <InputGroup >
        <InputLeftElement children={<FaSearch  />} />
        <Input
        borderRightRadius="0px"
        bg="white"
          type="search"
          value={value}
          onChange={onChange}
          placeholder="Search Pokemon"
        />
        <Button onClick={onClick}  borderLeftRadius="0px" bg="white">Search</Button>
      </InputGroup>

    </Box>
  );
};
