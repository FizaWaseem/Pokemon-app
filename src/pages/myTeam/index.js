import React from "react";
import { Flex, Text, Stack, Image, Grid, useToast } from "@chakra-ui/react";
import pokemon from "../../assests/pokemon.png";
import TeamBox from "../../copmonent/teamBox";
import { useSelector,useDispatch } from "react-redux";
import {remove} from "../../redux/reducer/teamSlice"
import { useHistory } from "react-router-dom";
const MyTeam = () => {
    const dispatch = useDispatch();
const history=useHistory();
  const SelectedItem = useSelector((state) => state.team.SelectedItem);
  const toast = useToast()
  const removeItem = (items) => {
    console.log("remove",items);
    toast({
        title: `${items.name} Removed`,
        description: `${items.name} has been removed from your team`,
        status: "warning",
        variant:"subtle",
        duration: 9000,
        position:"bottom-left",
        isClosable: true,
      })
   dispatch(remove(items))
  };
  const detailItem = (id) => {
  history.push(`/det/${id}`)
  };
  return (
    <Flex
      justifyContent="flex-start"
      bg="#33343d"
      style={{ flexDirection: "column", padding: "1rem" }}
    >
      <Stack direction="row" justifyContent="center">
        <Image
         height="110px"
          objectFit="cover"
          src={pokemon}
          alt="team"
        />
      </Stack>
      <Grid templateColumns="repeat(2, 1fr)" gap={1}>
        {SelectedItem.length === 0 ? (
          <Stack
            height="66.8vh"
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {" "}
            <Text fontSize="3xl" color="white" justifyContent="center" alignItems="center">
              No items
            </Text>
          </Stack>
        ) : (
          SelectedItem.map((i) => {
            return (
              <TeamBox
                key={i.id}
                Name={i.name.charAt(0).toUpperCase() + i.name.slice(1)}
                src={i.img}
                onRemove={()=>removeItem(i)}
                Detail={()=>detailItem(i.id)}
              />
            );
          })
        )}
      </Grid>
    </Flex>
  );
};

export default MyTeam;
