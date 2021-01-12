import "./Contenedor.css";
import Listitems from "../components/ListItems";
import {useState, useEffect} from "react";
import ItemDetail from "../components/Items/ItemDetail";
import {useParams} from "react-router-dom";


function Container(){

    const {id} = useParams();

    const [items, setItems] = useState([]);


    const getProducts = new Promise ((resolve,reject) =>{
        setTimeout(()=>{
            resolve(products);
        },500)
    })
    
    useEffect(() => {
        getProducts.then(rta => setItems(rta))
    },[]);

   

    const products=
        [
        {   id: 1,
            url:"https://s3.surfinc.co/1274-product_ss19/merino-beanie.jpg",
            nombre:"Gorro Merino Gris Claro",
            precio:67,
            categoria:"hombre",
            cantidad:1 
        },
        {   id: 2,
            url:"https://s1.surfinc.co/2325-product_ss19/classy-hoodie-black.jpg",
            nombre: "Sudadera con capucha",
            precio: 59,
            categoria:"mujer",
            cantidad:1 
        },
        {   id: 3,
            url:"https://s1.surfinc.co/2296-product_ss19/sunset-seeker-longsleeve.jpg",
            nombre:"SUNSET SEEKER MANGA LARGA",
            precio:28,
            categoria:"hombre",
            cantidad:1 
        },
        {   id: 4,
            url:"https://s2.surfinc.co/2246-product_ss19/linen-shirt.jpg",
            nombre:"Camisa de Lino",
            precio:67,
            categoria:"mujer",
            cantidad:1 
        },
        {   id: 5,
            url:"https://s1.surfinc.co/2554-product_ss19/knitted-v-sweater-purple-haze.jpg",
            nombre:"Jersey de punto de punto",
            precio:63,
            categoria:"mujer",
            cantidad:1 
        },
    
        {   id: 6,
            url:"https://s2.surfinc.co/2269-product_ss19/high-hopes-tee-space-black.jpg",
            nombre:"CAMISETA HIGH HOPES",
            precio:19,
            categoria:"niño",
            cantidad:1 
        },
        {   id: 7,
            url:"https://s3.surfinc.co/1078-product_ss19/grey-tee.jpg",
            nombre:"CAMISETA GRIS",
            precio:21,
            categoria:"hombre",
            cantidad:1 
        },
        {   id: 8,
            url:"https://s2.surfinc.co/2551-product_ss19/srf-tee.jpg",
            nombre:"SRF TEE Stone GRIS",
            precio:67,
            categoria:"surf",
            cantidad:1 
        }
    ]

    const productos = products.filter(product => product.id==id);

    return(
        <>
        
        <h1 id="fav">Detalle de Producto {id}</h1>
        
            { 
            items.length ? 
            <>
                <div id="contenedor">
                    {productos.length ? 

                    <>
                    { <ItemDetail id={id}></ItemDetail>}
                    </>
                        :
                    <h1>No existe tal producto</h1>

                    }
                    

                </div>
                 
    
            </> : 
                    <div id="contenedor2">
                    <p className="negro">Cargando Descripcion...</p>
                    <img className="gif" src="https://img1.picmix.com/output/stamp/normal/8/5/2/9/509258_fb107.gif" alt=""/>
                    </div>
            }
       

        </>
        
    )
}

export default Container;