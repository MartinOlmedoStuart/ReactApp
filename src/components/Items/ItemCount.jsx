import {useState} from "react";
import "./ItemCount.css";


function ItemCount({stock}){

   const [band, setBand] = useState(true)

    const [contador, setContador] = useState(1);
    function disminuirContador(){
        const consultarStock= new Promise((resolve, reject) => {
            setBand(false);
            setTimeout(()=>{
                if(contador > 1){
                resolve( setContador(contador-1));
                }
        if(contador>1){
            setContador(contador-1);
        }
        setBand(true);
        },2000)
        })
    };
    function aumentarContador(){
        const consultarStock= new Promise((resolve, reject) => {
            setBand(false);
            setTimeout(()=>{
                if(contador < stock){
                resolve( setContador(contador+1));
                }
                else{
                    reject(alert("¡Uy! No tenemos más stock de este producto para agregarlo al carrito"))
                }
            setBand(true);
            },2000)
        })
      
    };

    return(
        <>
        
        <div className="contador-items">
            <div className="espesor" onClick={disminuirContador}>
                <div  className="restar"></div>
            </div>
           
            {
            band ? <span className="spanstyle">{contador}</span> : <span className="spanstyle"><img id="refresh" src="https://cdn.lowgif.com/full/81ba4d9c4c799e48-.gif" alt=""/></span>
            
            }
           
            <div className="espesor2" onClick={aumentarContador}>
                <div className="sumar"></div>
                <div className="sumar sumar2"></div>
                
            </div>
            
        </div> 
    </>
    )
}



export default ItemCount;