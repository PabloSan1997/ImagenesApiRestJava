import React from "react";
import { interactApi } from "./api/interactApi";


const Context = React.createContext<Contexto>({
    imagenes: [],
    mostrar: false,
    setMostrar: function (): void {
    },
    margin: 0,
    setMargin: function (margin: number): void {
        margin;
    },
    mandarSolicitud: function (imagen: ImagenAdd): void {
        imagen
    }
})

export function ProvContext({ children }: Children) {

    const [imagenes, setImagenes] = React.useState<Array<Imagen>>([]);
    const [mostrar, setCambiar] = React.useState(false);
    const [margin, setMargin] = React.useState<number>(0);
    const [actualizar, setActualizar] = React.useState(false);
    const [nuevoElemento, setNuevoElemento] = React.useState<ImagenAdd>({name:'', url:''});
    React.useEffect(() => {
        interactApi.readApi()
            .then(data => setImagenes(data))
            .catch(() => setImagenes([]));
    }, []);

    React.useEffect(
        () => {
            if (actualizar) {
                interactApi.addApi(nuevoElemento)
                .then(data=>{
                    setImagenes([...imagenes, data]);
                    setActualizar(false);
                });
                
            }
        }, [actualizar]);

    const setMostrar = () => {
        setCambiar(!mostrar);
    }
    const mandarSolicitud=(datos:ImagenAdd)=>{
        setNuevoElemento(datos);
        setActualizar(true);
    }
    return (
        <Context.Provider value={{
            imagenes,
            mostrar,
            setMostrar,
            setMargin,
            margin,
            mandarSolicitud
        }}>
            {children}
        </Context.Provider>
    );
}


export const UseContexto = () => React.useContext(Context);