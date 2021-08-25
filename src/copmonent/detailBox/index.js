import React from "react";
import { Text, Box, Stack, Image, Button } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { ImBin } from "react-icons/im";

const DetailBox = ({
  onRemove,
  onAdd,
  src,
  src2,
  src3,
  Attack,
  Defense,
  Height,
  Weight,
  Type,
  Move,
  Name,
}) => {
  return (
    <Box maxW="lg" borderWidth="none" borderRadius="lg" overflow="hidden" bg="#ebc855">
      <Stack direction="row">
        <Image
          boxSize="150px"
          objectFit="cover"
          bg="red.600"
          src={src}
          alt="Segun Adebayo"
        />
        <Image
          boxSize="150px"
          objectFit="cover"
          bg="blue.600"
          src={src2}
          alt="Dan Abramov"
        />
        <Image boxSize="150px" bg="pink.600" src={src3} alt="Dan Abramov" />
      </Stack>
      <Box p="4">
        <Box d="flex" alignItems="baseline"></Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h1"
          lineHeight="tight"
          isTruncated
        >
          <Stack direction="row">
            <Text fontSize="4xl"> Name:</Text>{" "}
            <Text pt={2} fontSize="3xl" isTruncated>
              {Name.charAt(0).toUpperCase() + Name.slice(1)}
            </Text>
          </Stack>
        </Box>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Text fontSize="4xl"> Type : </Text>{" "}
          <Text pt={2} fontSize="3xl" color="gray" isTruncated>
            {Type.charAt(0).toUpperCase() + Type.slice(1)}
          </Text>
          <Text fontSize="4xl"> Moves : </Text>{" "}
          <Text pt={2} fontSize="3xl" color="gray" isTruncated>
            {Move}
          </Text>
        </Stack>
        <Box>
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Text fontSize="4xl"> Attacks: </Text>{" "}
            <Text pt={2} fontSize="3xl" color="gray" isTruncated>
              {Attack}
            </Text>
            <Text fontSize="4xl">Defence :</Text>{" "}
            <Text pt={2} fontSize="3xl" color="gray" isTruncated>
              {Defense}
            </Text>
          </Stack>
        </Box>
        <Box>
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Text fontSize="4xl"> Height : </Text>{" "}
            <Text pt={2} fontSize="3xl" color="gray" isTruncated>
              {Height}
            </Text>
            <Text fontSize="4xl"> Weight : </Text>{" "}
            <Text pt={2} fontSize="3xl" color="gray" isTruncated>
              {Weight}
            </Text>
          </Stack>
        </Box>
        <Box>
          <Stack
            direction="row"
            mt={2}
            justifyContent="flex-end"
            alignItems="center"
          >
            {onAdd && (
              <Button
                rightIcon={<MdAdd />}
                onClick={onAdd}
                colorScheme="red"
                variant="solid"
                color="white"
              >
                Add
              </Button>
            )}
            {onRemove && (
              <Button
                rightIcon={<ImBin />}
                onClick={onRemove}
                colorScheme="red"
                variant="solid"
                color="white"
              >
                Remove
              </Button>
            )}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailBox;
