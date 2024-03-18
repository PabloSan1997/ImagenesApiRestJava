import { UseContexto } from "../Context";



export function Boton({name, index}:BotonImagen){
    const {setMargin} = UseContexto();
    const mover=()=>{
        setMargin(index);
    }
    return(
        <button className="opcion" onClick={mover}>{name}</button>
    );
}