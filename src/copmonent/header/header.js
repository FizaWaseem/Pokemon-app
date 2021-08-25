import React from "react";
import { Box, Grid, GridItem, ButtonGroup,Text} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import lottie from "lottie-web";
import west from "../../assests/west.json";
const Header = ({children}) => {
  React.useEffect(() => {
   
    lottie.loadAnimation({
      container: document.querySelector("#west"),
      animationData: west
    });
  }, []);
  return (
      <div >
    <Grid
      bg="-webkit-linear-gradient(left top, #e6bc2f 55%, #ebc855 55%)"
      justifyContent="center"
      alignItems="center"
      templateColumns="repeat(5, 1fr)"
      h={65}
    >
      <GridItem colSpan={4}>
        <Box  w="100%"  px={4} h={10} color="white">
          <Box id="west" style={{width:"50px"}}/>
        </Box>
      </GridItem>
      <GridItem colSpan={0}>
        <ButtonGroup variant="link" spacing="6">
          <NavLink exact to="/">
          <Text fontSize="2xl" justifyContent="center" alignItems="center">
          Home 
            </Text>
          </NavLink>
          <NavLink exact to="/team">
           <Text fontSize="2xl" justifyContent="center" alignItems="center">
           My Team
            </Text>
          </NavLink>
        </ButtonGroup>
      </GridItem>
    </Grid>
    {children}
    </div>
  );
};
export default Header;
