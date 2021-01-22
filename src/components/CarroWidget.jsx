import "./CarroWidget.css";
import CartItem from "./Items/CartItem";
import {Carro} from "../carro";
import {useContext} from "react";
import {Store} from "../store";
import {useHistory} from "react-router-dom";

function CarroWidget(){

    let history = useHistory()

    function handelRedirect(){
        cerrar();
        history.push('/carro')
    };

    const [data, setData] = useContext (Store);
    const [abierto, setAbierto] = useContext(Carro);

    function cerrar(){
        setAbierto(!abierto);
    }

    let total= 0;

    data.items.map(item => (
            total = item.data.precio + total
    ));


    return(
        <div className={`carro-desplegable ${abierto ? "toggle" : "close"}`}>
            <div className="cdc">
                <img  className="cross" onClick={cerrar} src="https://static.thenounproject.com/png/74835-200.png" alt=""/>
                <h1>Carrito de Compras</h1>
            </div>

            {data.items.map(item => (
                    <CartItem id={item.id} url={item.data.url} nombre={item.data.nombre} precio={item.data.precio} stock={5} cantidad={item.data.cantidad}/>
                    ))}

           
            {/* <CartItem url="https://s2.surfinc.co/1841-product_ss19/classy-hoodie-black.jpg" nombre="Sudadera Con Capucha" precio="3.699" stock={2}/>
            <CartItem url="https://s1.surfinc.co/2619-product_ss19/merino-beanie.jpg" nombre="Gorro Merino Gris Claro" precio="$20" stock={5}/> */}
           
            <div className="subtotal">
                <h2>Subtotal <span className="envio">(sin envio) </span> :</h2>
                <h2 className="prec">{total}</h2>
            </div>
           
            <h2>Calcula el costo de tu envio:</h2>
            <form action="">
                <input type="text" placeholder="Código postal"/>
                <button>Aplicar</button>
            </form>
            <div className="total">
            <h1>Total:</h1>
            <h1>{total}</h1>
            </div>
           
            <button id="btn-1" onClick={handelRedirect}>Iniciar Compra</button>
            <button id="btn-2">Seguir Comprando</button>
        </div>
    )
}

export default CarroWidget;