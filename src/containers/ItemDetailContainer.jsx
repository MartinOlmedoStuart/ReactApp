import "./Contenedor.css";
import Listitems from "../components/ListItems";
import {useState, useEffect} from "react";
import ItemDetail from "../components/Items/ItemDetail";
import {useParams} from "react-router-dom";
import {getFirestore} from "../firebase";

function Container(){

    const {id} = useParams();
    const [bandera, setBandera] = useState(false);
    const [item, setItem] = useState({});

    const db = getFirestore();

    const getProductsFromDB = () =>{
        db.collection("productos").doc(id).get()
        .then(doc => {
            if (doc.exists){
                console.log(doc.data())
                setItem({id:id, data:doc.data()});
                setBandera(true);
            }
            
            })
        .catch(e => console.log(e));
    }
    
    useEffect(() => {
        getProductsFromDB();
    },[]);


        // if(item){
        //     return(
        //         <div>
        //             <h1 id="fav">Detalle de Producto {id}</h1>
        //             <ItemDetail id={id}/>
        //         </div>
                
        //     )
        // }
        // return(
        //     <h1>No existe tal producto</h1>
        // )
        
        console.log(item);

        return(
            <>
            
            
            
            { 
            bandera ? 
            <>
                <h1 id="fav">Detalle de Producto "{item.data.nombre}"</h1>
                <div id="contenedor">
                    {bandera ? 

                    <>
                        <ItemDetail item={item} /> 
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