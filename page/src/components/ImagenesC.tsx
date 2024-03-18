
import { UseContexto } from '../Context';
import '../styles/contenedor.scss';
import { UnaImage } from './UnaImage';
import React from 'react';

export function ImagenC() {
    const { imagenes, margin } = UseContexto();
    const style: React.CSSProperties = {
        width: `${imagenes.length * 100}%`,
        marginLeft: `${(margin)*-100}%`
    }
    return (
        <div className="contenedor">
            <div className="foto">
                <div className="slider" style={style}>
                    {imagenes.map(p => (
                        <UnaImage key={p.id} {...p} />
                    ))}
                </div>
            </div>
        </div>
    );
}
