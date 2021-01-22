import {useState , useContext, useEffect} from "react";
import "./ItemCount.css";
import {Store} from "../../store";

function ItemCount({cantidad,id}){

   const [band, setBand] = useState(true);
   const [data, setData] = useContext(Store);
   const [cant, setCant] = useState(0);
   useEffect(() => {
    setCant(cantidad)
},[cantidad]);
   

   let copia = data;
    let index=0;
    for (let i =0; i< data.items.length; i++){
        if(data.items[i].id==id){
            let index=i;
        }
    }

//    setTimeout(()=>{
//     setBand(true)
//             },5000)

   function disminuirContador(){
    setBand(false);
    for (let i =0; i< data.items.length; i++){
        if(data.items[i].id==id){
            copia.items[i].data.cantidad=copia.items[i].data.cantidad -1;
            copia.cantidad=copia.cantidad-1;
            setData(copia)
            setCant(cant-1)
            let index=i;
        }
    }
    setTimeout(()=>{
    setBand(true);
    },2000)

};

    function aumentarContador(){
        
    //     const consultarStock= new Promise((resolve, reject) => {
        for (let i =0; i< data.items.length; i++){
            if(data.items[i].id==id){
                copia.items[i].data.cantidad=copia.items[i].data.cantidad + 1;
                copia.cantidad=copia.cantidad+1;
                setData(copia)
                let index=i;
            }
        }
        console.log(cantidad)
            setBand(false);
            setTimeout(()=>{
            setBand(true);
            },2000)
    //     })
    //   console.log(data)
    setCant(cantidad+1)
    };

    return(
        <>
        
        <div className="contador-items">
            <div className="espesor" onClick={disminuirContador}>
                <div  className="restar"></div>
            </div>
           
            {
                band ? <span className="spanstyle">{cant}</span> : <span className="spanstyle"><img id="refresh" src="https://cdn.lowgif.com/full/81ba4d9c4c799e48-.gif" alt=""/></span>
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