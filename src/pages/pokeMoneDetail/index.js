
import React, { useEffect, useState } from "react";
import { Flex, Image } from "@chakra-ui/react";
import DetailBox from "../../copmonent/detailBox";
import { useParams } from "react-router-dom";
import pokemon from "../../assests/pokemon.png"
import { PokemonDetail } from "../../utils/api/api";
import Loaders from "../../copmonent/loader";
import { useSelector,useDispatch } from "react-redux";
import {add,remove} from "../../redux/reducer/teamSlice"
import { useToast } from "@chakra-ui/toast";
const PokeMonDetail = () => {
  const SelectedItem=useSelector(state=>state.team.SelectedItem)
  const id = useParams();
  const dispatch = useDispatch();
  const [loader, setloader] = useState(false);
  const [pokemonData, setPokemonData] = useState({
    id: "",
    name: "",
    species: "",
    img: "",
    img1: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
    moves: "",
    weight: "",
    height: "",
  });
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchData = async () => {
    await PokemonDetail(id.id).then((res)=>{
      if(res.status===200)
      {
          setloader(false)
          setPokemonData({
            id:res.data.id,
              name:res.data.name,
              species: res.data.species.name,
              img: res.data.sprites.front_default,
              img1: res.data.sprites.front_shiny,
              img2: res.data.sprites.back_default,
              hp: res.data.stats[0].base_stat,
              attack: res.data.stats[1].base_stat,
              defense: res.data.stats[3].base_stat,
              type: res.data.types[0].type.name,
              weight: res.data.weight,
              moves:res.data.moves.length,
              height: res.data.height,
            });
       
      }
      else {
        setloader(false)
        alert(
          `${res} You Entered incorrect Data e.g pikachu`
        )
       
      }
      }).catch((error) => {
        if (error.status === 401) return alert(error);
      });
      
  };

  const toast = useToast()
  const removeItem = () => {
    console.log("remove",);
    toast({
        title: `${pokemonData.name} Removed`,
        description: `${pokemonData.name} has been removed from your team`,
        status: "warning",
        variant:"subtle",
        duration: 6000,
        position:"bottom-left",
        isClosable: true,
      })
   dispatch(remove(pokemonData))
  };
  const AddItem=()=>{
   console.log("press",SelectedItem.length)
   const exist=SelectedItem.find(i=>i.id ===pokemonData.id)
  if (SelectedItem.length === 6){
    return (
     toast({
       title: `${pokemonData.name} cannot be added`,
       description: `You can only add max 6 players in your team`,
       status: "warning",
       duration: 6000,
       variant:"subtle",
       position:"bottom-left",
       isClosable: true,
     })
    )
  } else if(exist!== undefined){
    return(
      toast({
        title: `${pokemonData.name} already Add`,
        description: `${pokemonData.name} already added into your team`,
        status: "info",
        duration: 6000,
        variant:"subtle",
        position:"bottom-left",
        isClosable: true,
      })
    )
  }
  
  else {
    return(
    
   toast({
     title: `${pokemonData.name} Added`,
     description: `${pokemonData.name} has been added into your team`,
     status: "success",
     duration: 6000,
     variant:"subtle",
     position:"bottom-left",
     isClosable: true,
   }),
   dispatch(add(pokemonData)) 
    )}
  
 }
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="flex-start"
      style={{ flexDirection: "column" ,backgroundColor: '#33343d'}}
    >
<Image  height="120px" src={pokemon}/>

{
  loader ===true ? <Loaders timeout={loader}/> :
 <>
  <DetailBox
        src={pokemonData.img}
        src2={pokemonData.img2}
        src3={pokemonData.img1}
        Name={pokemonData.name}
        Type={pokemonData.type}
        Weight={pokemonData.weight}
        Height={pokemonData.height}
        Defense={pokemonData.defense}
        Attack={pokemonData.attack}
        Move={pokemonData.moves}
        key={pokemonData.id}
        onAdd={()=>AddItem()}
        onRemove={()=>removeItem()}
      />
 </>

}
  
    </Flex>
  );
};
export default PokeMonDetail;
