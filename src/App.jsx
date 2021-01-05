import NavigationBar from "./components/NavigationBar";
import Container from "./containers/Container";
import Footer from "./components/Footer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Error404 from "./components/Eror404";
import Category from "./components/Category";
import CarroWindow from "./components/CarroWindow";

function App() {

  return (
    <BrowserRouter>
    <NavigationBar />
    <Switch>
      <Route exact path="/">
        <Container />
      </Route>
   
      <Route path="/category/:name?">
      <Category />
      </Route>
    
      <Route path="/item/:id">
        <ItemDetailContainer />
      </Route>

      <Route path="/carro">
        <CarroWindow />
      </Route>

      <Route path="*">
        <Error404 />
      </Route>

    </Switch>
    <Footer />
    </BrowserRouter>
    // {/* < NavigationBar/>
    // < StarWars />
    // < ItemDetailContainer />
    // <Container/> */}
    // {/* <Footer /> */}
    
  )
};

export default App;
