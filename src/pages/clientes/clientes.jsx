import alicorp from "../../assets/img-cliente/LOGOS SVG/Alicorp.svg.png";
import anin from "../../assets/img-cliente/LOGOS SVG/ANIN.svg";
import ingenieros from "../../assets/img-cliente/LOGOS SVG/COLEGIO DE INGENIEROS.svg";
import congreso from "../../assets/img-cliente/LOGOS SVG/congreso de la republica.png";
import farmacias from "../../assets/img-cliente/LOGOS SVG/farmacias peruanas.svg";
import inpe from "../../assets/img-cliente/LOGOS SVG/inpe.svg";
import intercorp from "../../assets/img-cliente/LOGOS SVG/intercop.svg";
import contraloria from "../../assets/img-cliente/LOGOS SVG/La_Contraloria.png";
import oechsle from "../../assets/img-cliente/LOGOS SVG/logo de oechsle.png";
import plazavea from "../../assets/img-cliente/LOGOS SVG/logo de plazavea.png";
import wigo from "../../assets/img-cliente/LOGOS SVG/Logo de wigomotors.svg";
import dreml from "../../assets/img-cliente/LOGOS SVG/logo del DRELM.png";
import conadis from "../../assets/img-cliente/LOGOS SVG/logo_conadis.png";
import universitario from "../../assets/img-cliente/LOGOS SVG/Logo_oficial_de_Universitario.png";
import educacion from "../../assets/img-cliente/LOGOS SVG/ministerio de educacion.png";
import trabajo from "../../assets/img-cliente/LOGOS SVG/ministerio del trabajo.png";
import promperu from "../../assets/img-cliente/LOGOS SVG/promperu.png";
import sunarp from "../../assets/img-cliente/LOGOS SVG/sunarp.png";
import "./clientes.css";

function Clientes() {
    const logos = [
        { nombre: "Alicorp", imagen: alicorp },
        { nombre: "ANIN", imagen: anin },
        { nombre: "Colegio de Ingenieros", imagen: ingenieros },
        { nombre: "Congreso de la República", imagen: congreso },
        { nombre: "Farmacias Peruanas", imagen: farmacias },
        { nombre: "INPE", imagen: inpe },
        { nombre: "Intercorp", imagen: intercorp },
        { nombre: "Contraloría", imagen: contraloria },
        { nombre: "Oechsle", imagen: oechsle },
        { nombre: "Plaza Vea", imagen: plazavea },
        { nombre: "Wigo Motors", imagen: wigo },
        { nombre: "DRELM", imagen: dreml },
        { nombre: "CONADIS", imagen: conadis },
        { nombre: "Universitario", imagen: universitario },
        { nombre: "Ministerio de Educación", imagen: educacion },
        { nombre: "Ministerio del Trabajo", imagen: trabajo },
        { nombre: "PROMPERÚ", imagen: promperu },
        { nombre: "SUNARP", imagen: sunarp },
    ];

    return (
        <main className="pagina-clientes">
            <section className="presentacion-clientes">
                <h1>Nuestros clientes</h1>
                <p>
                    Empresas e instituciones que confían en SONIX AUDIO para llevar sus eventos y producciones al
                    siguiente nivel.
                </p>
                <div className="linea-clientes"></div>
            </section>

            <section className="contenedor-clientes">
                <div className="grid-clientes">
                    {logos.map((cliente, index) => (
                        <article className="card-cliente" key={index}>
                            <img src={cliente.imagen} alt={`Logo de ${cliente.nombre}`} />
                        </article>
                    ))}
                </div>
            </section>

            <section className="mensaje-clientes">
                <h2>Construimos experiencias juntos</h2>
                <p>
                    Cada proyecto representa una oportunidad para demostrar nuestro compromiso con la calidad, la
                    tecnología y el trabajo profesional.
                </p>
            </section>
        </main>
    );
}

export default Clientes;
