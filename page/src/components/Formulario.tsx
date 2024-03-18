import React from 'react';
import { UseContexto } from '../Context';
import '../styles/formulario.scss';


export function Formulario() {
    const { mostrar, mandarSolicitud, setMostrar } = UseContexto();
    const clase = !mostrar ? 'formulario esconder' : 'formulario';
    const [escribir, setEscribir] = React.useState({
        name: '',
        url: ''
    });
    const subir = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mandarSolicitud(escribir);
        setMostrar();
        setEscribir({name:'', url:''});
    }
    return (
        <form
            className={clase}
            onSubmit={subir}
        >
            <h2>Agregar</h2>
            <label>Nombre</label>
            <input
                type="text"
                placeholder="Escribir"
                value={escribir.name}
                onChange={e => setEscribir({ ...escribir, name: e.target.value })}
            />
            <label>Url</label>
            <input
                type="text"
                placeholder="Escribir"
                value={escribir.url}
                onChange={e => setEscribir({ ...escribir, url: e.target.value })}
            />
            <button className='boton' type="submit">Agregar</button>
        </form>
    );
}