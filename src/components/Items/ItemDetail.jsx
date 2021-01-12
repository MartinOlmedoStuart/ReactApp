import ItemCount from "./ItemCount";
import { matchPath, useHistory } from 'react-router-dom';
import {Store} from "../../store";
import {useState, useContext, useEffect} from "react";
import {Carro} from "../../carro"

function ItemDetail({id}){

//   let history = useHistory();
const [bandera, setBandera] = useState(false);
const [data, setData] = useContext(Store);
const [abierto, setAbierto] = useContext(Carro);

 function aumentarContador(){
//     const consultarStock= new Promise((resolve, reject) => {
        
//         setTimeout(()=>{
//             if(data.items < pedro.stock){
//             resolve( setData({...data, }));
//             }
//             else{
//                 reject(alert("¡Uy! No tenemos más stock de este producto para agregarlo al carrito"))
//             }
        
//     },2000)
// })

 };



const mapeo = () =>{
    let copia = data;
    let band = true;
    for(let i=0; i<data.items.length; i++){
    if (data.items[i].nombre === pedro.nombre){
        copia.cantidad=copia.cantidad+1;
        copia.items[i].cantidad=copia.items[i].cantidad + 1;
        setData(copia);
         band = false;
    }
    }
    if(band){
        
        setData({...data,cantidad:data.cantidad+1, items:[...data.items, pedro]}
            );
    }
    };

  const handelClickCarro = () => {
    // history.push('/carro')
    aumentarContador();
    setAbierto(true);
    
    mapeo();
   
    
    setBandera(true);
  }
    

  console.log(data);

    const products=
    [
    {   id: 0,
        url:"https://s3.surfinc.co/1274-product_ss19/merino-beanie.jpg",
        nombre:"Gorro Merino Gris Claro",
        precio:67,
        categoria:"hombre",
        stock: 2,
        cantidad:1 
    },
    {   id: 1,
        url:"https://s1.surfinc.co/2325-product_ss19/classy-hoodie-black.jpg",
        nombre: "Sudadera con capucha",
        precio: 59,
        categoria:"mujer",
        stock: 4,
        cantidad:1 
    },
    {   id: 2,
        url:"https://s1.surfinc.co/2296-product_ss19/sunset-seeker-longsleeve.jpg",
        nombre:"SUNSET SEEKER MANGA LARGA",
        precio:28,
        categoria:"hombre",
        stock: 1,
        cantidad:1 
    },
    {   id: 3,
        url:"https://s2.surfinc.co/2246-product_ss19/linen-shirt.jpg",
        nombre:"Camisa de Lino",
        precio:67,
        categoria:"mujer",
        stock: 6,
        cantidad:1 
    },
    {   id: 4,
        url:"https://s1.surfinc.co/2554-product_ss19/knitted-v-sweater-purple-haze.jpg",
        nombre:"Jersey de punto de punto",
        precio:63,
        categoria:"mujer",
        stock: 7,
        cantidad:1 
    },

    {   id: 5,
        url:"https://s2.surfinc.co/2269-product_ss19/high-hopes-tee-space-black.jpg",
        nombre:"CAMISETA HIGH HOPES",
        precio:19,
        categoria:"niño",
        stock: 3,
        cantidad:1 
    },
    {   id: 6,
        url:"https://s3.surfinc.co/1078-product_ss19/grey-tee.jpg",
        nombre:"CAMISETA GRIS",
        precio:21,
        categoria:"hombre",
        stock: 2,
        cantidad:1 
    },
    {   id: 7,
        url:"https://s2.surfinc.co/2551-product_ss19/srf-tee.jpg",
        nombre:"SRF TEE Stone GRIS",
        precio:67,
        categoria:"surf",
        stock: 2,
        cantidad:1 
    }
]
    let pedro = products[id-1];

    return( 
        <article>
            <div >
                <img id="img-detail" src={pedro.url} alt=""/>
            </div>
            
            <div className="flexor">
                <h2>Descripcion: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, rerum quas officia beatae debitis, cumque corrupti asperiores laboriosam dolores excepturi at illo eius, unde autem facilis eaque dolore est. Deleniti.</h2>
                <h2 className="precio-detail">Precio: {pedro.precio}</h2>
                {/* <ItemCount stock={pedro.stock}/> */}
                <button disabled={bandera} onClick={handelClickCarro} className="BtnACarro">{bandera ? "Item Agregado" : "Añadir al carrito"}</button>
            </div>
         
        </article>
    )
}



export default ItemDetail;