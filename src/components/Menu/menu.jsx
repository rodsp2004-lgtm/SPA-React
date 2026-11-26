import { NavLink } from "react-router-dom";
import "./menu.css";
function Menu() {
    return (
        <>
            <nav className="menu">
                <h1>
                    <a className="titulo" href="">
                        SONIX AUDIO
                    </a>
                </h1>
                <ul className="contenedor-lista">
                    <li className="nav-lista">
                        <NavLink className="ventana" to="inicio">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-lista">
                        <NavLink className="ventana" to="eventos">
                            Eventos
                        </NavLink>
                    </li>
                    <li className="nav-lista">
                        <NavLink className="ventana" to="contactos">
                            Contacto
                        </NavLink>
                    </li>
                    <li className="nav-lista">
                        <NavLink className="ventana" to="parlantes">
                            Parlantes
                        </NavLink>
                    </li>
                    <li className="nav-lista">
                        <NavLink className="ventana" to="clientes">
                            Clientes
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Menu;
