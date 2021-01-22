import NavigationBar from "./components/NavigationBar";
import Container from "./containers/Container";
import Footer from "./components/Footer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Error404 from "./components/Eror404";
import Category from "./components/Category";
import CarroWindow from "./components/CarroWindow";
import {Store} from "./store/index";
import {useState, useEffect} from "react";
import CarroWidget from "./components/CarroWidget";
import {Carro} from "./carro/index";
import CheckOut from "./Checkout";

function App() {

  const [abierto, setAbierto] = useState(false);

  const [data, setData]= useState({
    cantidad:0,
    items:[]
  });

  useEffect(() => {
    console.log(data)
},[data]);

  return (
    <Store.Provider value={[data,setData]}>
    <Carro.Provider value={[abierto, setAbierto]}>

       <BrowserRouter>
        <NavigationBar />
        <CarroWidget />
    <Switch>
      <Route exact path="/">
        <Container />
      </Route>

      <Route exact path="/checkout">
      <CheckOut />
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

    </Carro.Provider>
    </Store.Provider>
    
  )
};

export default App;
