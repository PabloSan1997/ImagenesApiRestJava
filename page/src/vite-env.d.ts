/// <reference types="vite/client" />

interface ImagenAdd {
    name: string,
    url: string
}
interface Imagen extends ImagenAdd {
    id: string;
}

interface BotonImagen extends Imagen {
    index:number
}

interface Solicitud {
    method: 'POST' | 'DELETE',

}
interface SolicitudADD extends Solicitud {
    headers: {
        'Content-Type': 'application/json'
    },
    body: string
}

interface Children {
    children: JSX.Element | JSX.Element[]
}

interface Contexto{
    imagenes:Array<Imagen>,
    mostrar:boolean,
    setMostrar():void,
    margin:number,
    setMargin(margin:number):void,
    mandarSolicitud(imagen:ImagenAdd):void
}