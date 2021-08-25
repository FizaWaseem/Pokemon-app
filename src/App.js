import { ChakraProvider } from "@chakra-ui/react"
import Home from "./pages/home";
import {
 
  Switch,
  Route,
 
} from "react-router-dom";
import PokeMonDetail from "./pages/pokeMoneDetail";
import Header from "./copmonent/header/header";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/reducer/rootReducer'
import MyTeam from "./pages/myTeam";

const store = createStore(rootReducer)
function App() {
  return (
    <Provider store={store}>
    <ChakraProvider>
   
   <Switch>
     <Header>
<Route exact path="/" component={Home}/>
<Route path="/det/:id" component={PokeMonDetail}/>
<Route path="/team" component={MyTeam}/>

</Header>
   </Switch>
     </ChakraProvider>
     </Provider>
  );
}

export default App;
