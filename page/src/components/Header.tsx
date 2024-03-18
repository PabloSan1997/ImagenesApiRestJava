import '../styles/header.scss';
import { UseContexto } from "../Context";

export function Header() {
    const {setMostrar} = UseContexto();
  return (
    <header>
        <h1>Mis imagenes</h1>
        <button className="boton menu" onClick={setMostrar}>Menu</button>
    </header>
  );
}
