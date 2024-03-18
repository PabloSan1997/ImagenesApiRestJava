import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ProvContext } from "./Context";
import './styles/index.scss';

const root = ReactDOM.createRoot(document.querySelector('#root')!);


root.render(
    <ProvContext>
        <App />
    </ProvContext>
);
