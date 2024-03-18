import { AreaBotones } from "./components/AreaBotones";
import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";
import { ImagenC } from "./components/ImagenesC";


export function App() {
    return (
        <>
            <Header />
            <Formulario/>
            <ImagenC/>
            <AreaBotones/>
        </>
    );
}
