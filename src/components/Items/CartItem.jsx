import ItemCount from "./ItemCount";
import {Store} from "../../store";
import {useContext} from "react";

const CartItem = ({nombre,url,precio,stock,id,cantidad}) => {

    let total = 0;

    const [data, setData] = useContext(Store);

    function handelClickTrash (){
            let index = 0;
            for(let i=0; i<data.items.length; i++){
                index = i;
            }
            setData({cantidad:data.cantidad-1, items:data.items.filter(item => item.data.nombre !== nombre)})
       
    }

    return(
    <>
        <div className="preview">
            <img className="prevImg" src={url} alt=""/>
            <div>
                <h3>{nombre}</h3>
                <h3 id="precius">{precio}</h3>
                < ItemCount cantidad={cantidad} id={id}/>
            </div>
            <img onClick={handelClickTrash} id="trash" src="https://image.flaticon.com/icons/png/512/60/60761.png" alt=""/>
        </div>
    </>
    )
}

export default CartItem;