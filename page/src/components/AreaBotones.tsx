import { UseContexto } from "../Context";
import { Boton } from "./Boton";
import '../styles/areabotones.scss';

export function AreaBotones(){
    const {imagenes} = UseContexto();
    return(
        <div className="contenedor_botones">
            {imagenes.map((p, i)=>(
                <Boton key={p.id} {...p} index={i}/>
            ))}
        </div>
    );
}