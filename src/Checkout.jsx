import {getFirestore} from "./firebase";
import firebase from "firebase/app";
import {useContext, useState} from "react";
import {Store} from "./store"
import "./styles/checkout.css"

function CheckOut(){ 

    const db= getFirestore();

    const [data,setData]  = useContext(Store);
    const [formData, setFormData] = useState({
        nombre:"",
        apellido:"",
        email:"",
        tel:""
    })
    const [status, setStatus] = useState(false);
    const [id, setId]  = useState ("");

    const handelChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    let total=0;
     data.items.map(item => (
        total = item.data.precio * item.data.cantidad + total));

    const compra = {
        user: formData,
        items: data.items,
        totalPrice: total,
        date: firebase.firestore.Timestamp.fromDate(new Date())

    }

    const handelSubmit = (e) => {
        e.preventDefault();
        db.collection("ventas").add(compra)
        .then(({id}) => {
            setStatus(true);
            setId(id);
        })
        .catch( (e) =>{
            console.log(e);
        })
    }

    return(
        <>
         <h1 id="fav">CheckOut</h1>
        {
            !status ?    
           
            <form onSubmit={handelSubmit} id="checkout">
                <input type="text" value={formData.nombre}  onChange={handelChange} name="nombre" placeholder="Nombre"/>
                <input type="text" value={formData.apellido} onChange={handelChange} name="apellido" placeholder="Apellido"/>
                <input type="email" value={formData.email} onChange={handelChange} name="email" placeholder="E-mail"/>
                <input type="tel" value={formData.tel} onChange={handelChange} name="tel" placeholder="Telefono"/>
    
                <button>Pagar</button>
            </form> :
            <div>
                <h2>Tu Compra ha finalizado!!</h2>
                <h2>Tu ID de compra es: "{id}"</h2>
            </div>

            
        }
        </>
    )
}

export default CheckOut;