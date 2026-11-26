import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-contenido">
                <div className="footer-info">
                    <h2>SONIX AUDIO</h2>
                    <p>
                        Somos una empresa especializada en soluciones profesionales de sonido, iluminación y producción
                        de eventos. Trabajamos para ofrecer experiencias audiovisuales de calidad en cada proyecto.
                    </p>
                </div>

                <div className="footer-servicios">
                    <h3>Nuestros servicios</h3>
                    <p>Producción de eventos</p>
                    <p>Sonido profesional</p>
                    <p>Iluminación escénica</p>
                    <p>Pantallas LED</p>
                    <p>Equipamiento audiovisual</p>
                </div>

                <div className="footer-navegacion">
                    <h3>Enlaces rápidos</h3>
                    <Link to="/">Home</Link>
                    <Link to="/eventos">Eventos</Link>
                    <Link to="/parlantes">Parlantes</Link>
                    <Link to="/clientes">Clientes</Link>
                    <Link to="/contactos">Contacto</Link>
                </div>

                <div className="footer-contacto">
                    <h3>Contáctanos</h3>
                    <p>Teléfono: +51 999 888 666</p>
                    <p>Correo: contacto@sonixaudio.com.pe</p>
                    <p>Lima, Perú</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
