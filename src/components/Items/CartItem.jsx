import ItemCount from "./ItemCount";

const CartItem = ({nombre,url,precio,stock}) => {

    return(
    <>
        <div className="preview">
            <img className="prevImg" src={url} alt=""/>
            <div>
                <h3>{nombre}</h3>
                <h3 id="precius">{precio}</h3>
                < ItemCount stock={stock}/>
            </div>
        </div>
    </>
    )
}

export default CartItem;