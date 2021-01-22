import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Listitems from "../components/ListItems";
import {getFirestore} from "../firebase"


const Category = () => {

    let {name} = useParams();

    const [items, setItems] = useState([]);
    const db = getFirestore();

    const getProductsFromDB = () =>{
        db.collection("productos").where("categoria", "==", name).get()
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
    },[name]);

    return(
        <>
        <h1 id="fav">{name}</h1>
        { 
            items.length ? 
        <>
        
        <div id="contenedor">
        {items.map(item => (
                        <Listitems url={item.data.url} nombre={item.data.nombre} precio={item.data.precio} id={item.id} categoria={item.data.categoria} />
                    ))}

        </div>
       
        </> :
        <div id="contenedor2">
                    <p className="negro">Cargando Items...</p>
                    <img className="gif" src="https://img1.picmix.com/output/stamp/normal/8/5/2/9/509258_fb107.gif" alt=""/>
                    </div>
          }
        </>
    )

}

export default Category;