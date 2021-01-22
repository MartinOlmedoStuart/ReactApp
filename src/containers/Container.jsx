import "./Contenedor.css";
import Listitems from "../components/ListItems";
import {useState, useEffect} from "react";
import ItemDetail from "../components/Items/ItemDetail";
import {getFirestore} from "../firebase";




function Container(){

    const [items, setItems] = useState([]);
    const db = getFirestore();

    const getProductsFromDB = () =>{
        db.collection("productos").get()
        .then(docs => {
            let arr = [];
            docs.forEach(doc => {
               arr.push({id: doc.id, data: doc.data()})
            })
            setItems(arr);
        })
        .catch(e => console.log(e));
    }
    
    useEffect(() => {
        getProductsFromDB();
    },[]);

   
    return(
        <>
        
        <h1 id="fav">NUESTROS FAVORITOS</h1>
        
            { 
            items.length ? 
            <>
                <div id="contenedor">
                   
                    <Listitems url={items[0].data.url} nombre={items[0].data.nombre} precio={items[0].data.precio} id={items[0].id} categoria={items[0].data.categoria} />
                    <Listitems url={items[1].data.url} nombre={items[1].data.nombre}precio={items[1].data.precio} id={items[1].id} categoria={items[1].data.categoria} />
                    <Listitems url={items[2].data.url} nombre={items[2].data.nombre}precio={items[2].data.precio} id={items[2].id} categoria={items[2].data.categoria} />
                    <Listitems url={items[3].data.url} nombre={items[3].data.nombre}precio={items[3].data.precio} id={items[3].id} categoria={items[3].data.categoria} />
 

                </div>
    
            </> : 
                    <div id="contenedor2">
                    <p className="negro">Cargando items...</p>
                    <img className="gif" src="https://img1.picmix.com/output/stamp/normal/8/5/2/9/509258_fb107.gif" alt=""/>
                    </div>
            }
       

        </>
        
    )
}

export default Container;
