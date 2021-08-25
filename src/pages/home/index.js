import React,{ useState,useEffect} from "react";
import {
  Box,
  Flex,
  Grid,
  Stack,
  Text,
  Image
} from "@chakra-ui/react";
import { CustomSearch } from "../../copmonent/Search";
import { useDispatch,useSelector } from "react-redux";
import {add} from "../../redux/reducer/teamSlice"
import DetailBox from "../../copmonent/detailBox";
import { useToast } from "@chakra-ui/react"
import { SearchData } from "../../utils/api/api";
import Loaders from "../../copmonent/loader";
import pikachu from "../../assests/pikachu.json"
import lottie from "lottie-web";
import pokemon from "../../assests/pokemon.json";
import pokemons from "../../assests/pokemon.png";

const Home = () => {
    const dispatch = useDispatch();
    const SelectedItem = useSelector((state) => state.team.SelectedItem);
  const [value, setValue] =useState("");
  const [loader, setloader] =useState(false);

  const handleChange = (event) => setValue(event.target.value);
  const [pokemonData, setPokemonData] = useState({
    id:"",
      name:"",
      species: "",
      img: "",
      img1: "",
      hp: "",
      attack: "",
      defense: "",
      type: "",
      moves:"",
      weight:"",
      height:""
    });
   const fetchData=async()=>{
setloader(true);
await SearchData(value).then((res)=>{
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
 }
   const toast = useToast()
   const AddItem=()=>{
    const exist=SelectedItem.find(i=>i.id ===pokemonData.id)
   if (SelectedItem.length === 6){
     return (
      toast({
        title: `${pokemonData.name} cannot be added`,
        description: `You can only add max 6 players in your team`,
        status: "warning",
        duration: 9000,
        variant:"subtle",
        position:"bottom-left",
        isClosable: true,
      })
     )
   }
   else if(exist!== undefined){
    return(
      toast({
        title: `${pokemonData.name} already Add`,
        description: `${pokemonData.name} already added into your team`,
        status: "info",
        duration: 9000,
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
      duration: 9000,
      variant:"subtle",
      position:"bottom-left",
      isClosable: true,
    }),
    dispatch(add(pokemonData)) 
     )}
   
  }
 useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: pokemon
    });
    lottie.loadAnimation({
      container: document.querySelector("#pikachu"),
      animationData: pikachu
    });
  }, []);
  return (
    <Flex
      alignItems="center"
      justifyContent="flex-start"
      style={{ flexDirection: "column",padding:"1rem",backgroundColor: '#33343d'}}
    >
      <Image  height="110px" src={pokemons}/>

      <CustomSearch value={value}  onChange={handleChange} onClick={fetchData} />
      {
         loader=== true ? <Loaders timeout={loader}/> :
         pokemonData.name==="" ? 
         <Grid templateColumns="repeat(1, 1fr)" gap={1} height="78vh">
    <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {" "}
           <Box id="react-logo"  style={{ width: 380, height: 380, }} />
           <Box id="pikachu" style={{ width: 380, height: 380, }} />
          
          </Stack>
         </Grid>
          :
          <>
          <Text fontSize="3xl" color="white">Your Searched Item</Text>
        <DetailBox src={pokemonData.img} src2={pokemonData.img2} src3={pokemonData.img1}
        Name={pokemonData.name}
        Type={pokemonData.type}
        Weight={pokemonData.weight}
        Height={pokemonData.height}
        Defense={pokemonData.defense}
        Attack={pokemonData.attack}
        Move={pokemonData.moves}
        key={pokemonData.id}
        onAdd={()=>AddItem(pokemonData)}
        />
    
</>    
      }
    </Flex>
  );
};
export default Home;
