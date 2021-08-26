import React from "react";
import { Text, Box, Stack, Image, IconButton } from "@chakra-ui/react";
import { ImBin } from "react-icons/im";
import { RiArrowRightUpLine } from "react-icons/ri";

const TeamBox = ({ Name, src, Detail, onRemove }) => {
  return (
    <Box
      maxW={{ base: "md", md: "xl", lg: "xl" }}
      mt={2}
      borderColor="none"
      borderWidth="none"
      borderRadius="lg"
      bg="white"
      overflow="hidden"
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Image
          boxSize="130px"
          objectFit="cover"
          src={src}
          bg="yellow.500"
          alt="Segun Adebayo"
        />
        <Text fontSize={{ base: "20px", md: "3xl", lg: "3xl" }}>{Name}</Text>
        <Stack direction="row" pr={2}>
          <IconButton
            colorScheme="red"
            aria-label="Call Segun"
            size={"lg"}
            fontSize={23}
            icon={<ImBin />}
            onClick={onRemove}
          />

          <IconButton
            variant="outline"
            colorScheme="red"
            aria-label="Call Segun"
            size={"lg"}
            fontSize={25}
            onClick={Detail}
            icon={<RiArrowRightUpLine />}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default TeamBox;
