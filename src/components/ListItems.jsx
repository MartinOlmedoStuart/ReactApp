import {Link} from "react-router-dom";
import CarroWidget from "./CarroWidget";
import "./Listitems.css";


function Listitems({url, precio, nombre, id}){

   function addToCart(){
       
   };

   const linkk="/item/"+id;
   
   
    return(
        <>
     
        <div className="hol">
            <div>

                <img className="img2 toggle2" src={url} alt=""/>
                <img className="img3" src="https://image.flaticon.com/icons/png/512/1/1393.png" alt=""/>
                <Link to={linkk}><img onClick={addToCart} className="img-producto" src={url} alt="" /></Link>
                
               
                <div className="nombre-precio">
                    <h1>{nombre}</h1>
                    <h2>{precio}</h2>
                </div>
            </div>
           
        </div>
        </>
    )
}




export default Listitems;