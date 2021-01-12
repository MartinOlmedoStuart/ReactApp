import {useState , useContext} from "react";
import "./ItemCount.css";
import {Store} from "../../store";

function ItemCount({stock, nombre, id}){

    let index=0;

   const [band, setBand] = useState(true);
   const [data, setData] = useContext(Store);

   for (let i=0; i<data.length ;i++){
       if(data[i].nombre === nombre){
           let index = i;
       }
   }

   console.log(index)


   function disminuirContador(){
    const consultarStock= new Promise((resolve, reject) => {

        setBand(false);
        if(data.items[index].cantidad > 1){
        setTimeout(()=>{
            let copia = data;
            copia.items[index].cantidad= copia.items[index].cantidad-1;
            resolve( setData(copia))
            
            setBand(true);
        },2000)}
        else{
            resolve ( setBand(true))
        }
        
    })
};

    function aumentarContador(){
        const consultarStock= new Promise((resolve, reject) => {


            setBand(false);
            setTimeout(()=>{
                if(data.items[index].cantidad < stock){
                let copia = data;
                copia.items[index].cantidad= copia.items[index].cantidad+1;
                resolve( setData(copia))
                }
                else{
                    reject(alert("¡Uy! No tenemos más stock de este producto para agregarlo al carrito"))
                }
            setBand(true);
            },2000)
        })
      console.log(data)
    };

    return(
        <>
        
        <div className="contador-items">
            <div className="espesor" onClick={disminuirContador}>
                <div  className="restar"></div>
            </div>
           
            {
            band ? <span className="spanstyle">{data.items[index].cantidad}</span> : <span className="spanstyle"><img id="refresh" src="https://cdn.lowgif.com/full/81ba4d9c4c799e48-.gif" alt=""/></span>
            
            }
           
            <div className="espesor2" onClick={aumentarContador}>
                <div className="sumar"></div>
                <div className="sumar sumar2"></div>
                
            </div>
            
        </div> 
    </>
    )
}



export default ItemCount;