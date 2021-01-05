import ItemCount from "./ItemCount";
import { useHistory } from 'react-router-dom';

function ItemDetail({id}){

  let history = useHistory();

  const handelClickCarro = () => {
    history.push('/carro')
  }

    const products=
    [
    {   id: 0,
        url:"https://s3.surfinc.co/1274-product_ss19/merino-beanie.jpg",
        nombre:"Gorro Merino Gris Claro",
        precio:67,
        categoria:"hombre",
        stock: 2
    },
    {   id: 1,
        url:"https://s1.surfinc.co/2325-product_ss19/classy-hoodie-black.jpg",
        nombre: "Sudadera con capucha",
        precio: 59,
        categoria:"mujer",
        stock: 4
    },
    {   id: 2,
        url:"https://s1.surfinc.co/2296-product_ss19/sunset-seeker-longsleeve.jpg",
        nombre:"SUNSET SEEKER MANGA LARGA",
        precio:"$28",
        categoria:"hombre",
        stock: 1
    },
    {   id: 3,
        url:"https://s2.surfinc.co/2246-product_ss19/linen-shirt.jpg",
        nombre:"Camisa de Lino",
        precio:"$67",
        categoria:"mujer",
        stock: 6
    },
    {   id: 4,
        url:"https://s1.surfinc.co/2554-product_ss19/knitted-v-sweater-purple-haze.jpg",
        nombre:"Jersey de punto de punto",
        precio:"$63",
        categoria:"mujer",
        stock: 7
    },

    {   id: 5,
        url:"https://s2.surfinc.co/2269-product_ss19/high-hopes-tee-space-black.jpg",
        nombre:"CAMISETA HIGH HOPES",
        precio:"$19",
        categoria:"niño",
        stock: 3
    },
    {   id: 6,
        url:"https://s3.surfinc.co/1078-product_ss19/grey-tee.jpg",
        nombre:"CAMISETA GRIS",
        precio:"$21",
        categoria:"hombre",
        stock: 2
    },
    {   id: 7,
        url:"https://s2.surfinc.co/2551-product_ss19/srf-tee.jpg",
        nombre:"SRF TEE Stone GRIS",
        precio:"$67",
        categoria:"surf",
        stock: 2
    }
]
    let pedro = products[id-1];

    return( 
        <article>
            <img id="img-detail" src={pedro.url} alt=""/>
            <div>
                <h2>Descripcion: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, rerum quas officia beatae debitis, cumque corrupti asperiores laboriosam dolores excepturi at illo eius, unde autem facilis eaque dolore est. Deleniti.</h2>
                <h2 className="precio-detail">Precio: {pedro.precio}</h2>
                <ItemCount stock={pedro.stock}/>
                <button onClick={handelClickCarro} className="BtnACarro">Ir a la pagina del Carro</button>
            </div>
         
        </article>
    )
}



export default ItemDetail;