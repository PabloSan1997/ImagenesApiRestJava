import { infoApi } from "./infoApi";



export const interactApi = {
    readApi: async (): Promise<Imagen[]> => {
        const data = await fetch(infoApi.url);
        return data.json();
    },
    addApi: async (nuevo: ImagenAdd): Promise<Imagen> => {
        const solicitud: SolicitudADD = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevo)
        }
        const ft = await fetch(infoApi.url, solicitud);
        return ft.json();
    },
    deleteApi:async(id:string):Promise<void>=>{
        const solicitud:Solicitud={
            method:'DELETE'
        }
        await fetch(`${infoApi.url}/${id}`, solicitud);
    }
}