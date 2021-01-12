import CarroWidget from "./CarroWidget";
import {useState, useEffect} from "react";
import {Store} from "../store/index";
import {useContext} from "react";
import {Carro} from "../carro";

function CartWidget(){
    const [data, setData] = useContext(Store);
    const [abierto, setAbierto] = useContext(Carro);

    function CambiarSetShow(){
    setAbierto(!abierto);
    };
    return(
        <>
        <img onClick={CambiarSetShow} src="https://img.icons8.com/material-rounded/452/shopping-cart.png" alt="" className="carrito"/>
        <span className="contador">{data.cantidad}</span>
        </>
    )
}

export default CartWidget;