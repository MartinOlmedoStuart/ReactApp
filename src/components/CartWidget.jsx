import CarroWidget from "./CarroWidget";
import {useState} from "react";



function CartWidget(){
    const [show, setShow] = useState(false);
    function CambiarSetShow(){
       setShow(!show)
    
    };
    return(
        <>
        <img onClick={CambiarSetShow} src="https://img.icons8.com/material-rounded/452/shopping-cart.png" alt="" className="carrito"/>
        <span className="contador">3</span>
        
      
        <CarroWidget value={show} action={CambiarSetShow}/>
        </>
    )
}

export default CartWidget;