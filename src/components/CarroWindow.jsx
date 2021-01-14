import {useContext} from "react";
import {Store} from "../store";
import CartItem from "./Items/CartItem";
import {useHistory} from "react-router-dom";

function CarroWindow () {

    let history = useHistory();
    
    function handelRedirect(){
        history.push('/')
    };

    function handelCompra(){
        alert("Felicitaciones, terminaste tu compra!!")
    };

    const [data, setData] = useContext(Store);

    let total= 0;

    data.items.map(item => (
            total = item.precio + total
    ));
    if(data.items.length===0){
        return(
            <>
            <h1 id="fav">UPS, TODAVIA NO HAS AGREGADO NADA AL CARRITO</h1>
            <div className="ups">
                <h2>Haz click aqui para volver a la pagina principal</h2>
                <button onClick={handelRedirect}>CLICK ME</button>
            </div>
           
            </>
        )
    }
    return (
        <>
        <h1 id="fav">YA CASI ES TUYO...</h1>
        {data.items.map(item => (
                    <CartItem id={item.id} url={item.url} nombre={item.nombre} precio={item.precio} stock={item.stock} />
                    ))}
        <div className="wrapp">
            <h1>Total: {total}</h1>
            <button onClick={handelCompra}>Terminar Compra</button>
        </div>
        
        </>
    )
}

export default CarroWindow;