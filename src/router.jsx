import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Clientes from "./pages/clientes/clientes";
import Contactos from "./pages/contacto/contacto";
import Eventos from "./pages/eventos/eventos";
import Inicio from "./pages/inicio/inicio";
import Parlantes from "./pages/parlantes/parlantes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Inicio /> },
            { path: "inicio", element: <Inicio /> },
            { path: "eventos", element: <Eventos /> },
            { path: "contactos", element: <Contactos /> },
            { path: "clientes", element: <Clientes /> },
            { path: "parlantes", element: <Parlantes /> },
        ],
    },
]);
export default router;
