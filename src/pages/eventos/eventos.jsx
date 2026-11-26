import activaciones from "../../assets/img-eventos/eventos/activaciones-evento.jpg";
import bodas from "../../assets/img-eventos/eventos/bodas-evento.jpg";
import corporativo from "../../assets/img-eventos/eventos/corporativo-evento.jpg";
import festival from "../../assets/img-eventos/eventos/festival-evento.jpg";
import activacionesPT from "../../assets/img-eventos/portafolio/activaciones-portafolio.jpg";
import festivalPT from "../../assets/img-eventos/portafolio/festival-portafolio.jpg";
import galaPT from "../../assets/img-eventos/portafolio/gala-portafolio.jpg";
import granPT from "../../assets/img-eventos/portafolio/gran-estadio-portafolio.jpg";
import "./eventos.css";
function Eventos() {
    return (
        <>
            <header className="eventos">
                <div className="shadow-eventos">
                    <div className="presentacion-eventos">
                        <span>Nuestros</span> <span className="span-d-eventos">eventos</span>
                        <br />
                        <span>y</span>
                        <span className="span-d-eventos"> producciones</span>
                        <br />
                        <p className="parrafo-eventos">
                            Desplegamos potencia sonora, iluminación y soporte técnico integral para espectáculos de
                            cualquier magnitud.
                        </p>
                    </div>
                </div>
            </header>
            <section className="contenedor-eventos">
                <div className="titulo-eventos">
                    <h2>categoria de Eventos</h2>
                </div>
                <section className="cards-de-eventos">
                    <article className="card-eventos">
                        <li>
                            <h2> Conciertos y Festivales</h2>
                            <p>
                                Sistemas Line Array de largo alcance, mezcla en vivo (FOH) y monitoreo para artistas en
                                espacios abiertos y estadios.
                            </p>
                        </li>
                        <img src={festival} alt="" className="img-eventos" />
                    </article>
                    <article className="card-eventos">
                        <li>
                            <h2>Eventos Corporativos</h2>
                            <p>
                                Sonido cristalino para discursos, lanzamientos de marca, pantallas LED para
                                presentaciones y circuito cerrado de video.
                            </p>
                        </li>
                        <img src={corporativo} alt="" className="img-eventos" />
                    </article>
                    <article className="card-eventos">
                        <li>
                            <h2>Bodas, Galas y Eventos Privados</h2>
                            <p>
                                Audio envolvente, ambientación lumínica elegante y montaje discreto para salones y
                                recepciones.
                            </p>
                        </li>
                        <img src={bodas} alt="" className="img-eventos" />
                    </article>
                    <article className="card-eventos">
                        <li>
                            <h2> Activaciones y Ferias</h2>
                            <p>
                                Equipos compactos de alta fidelidad y sonorización itinerante para centros comerciales y
                                exposiciones.
                            </p>
                        </li>
                        <img src={activaciones} alt="" className="img-eventos" />
                    </article>
                </section>
            </section>
            <section className="portafolio-eventos">
                <section className="cards-portafolio">
                    <h1>Trabajos Realizados</h1>
                    <article className="card-portafolio">
                        <li>
                            <h2> Festival Nocturno Open Air</h2>
                            <p>
                                Aforo: +15,000 personas | Equipamiento: Sistema Line Array principal, pantallas LED
                                laterales y control FOH digital.
                            </p>
                        </li>
                        <img src={festivalPT} alt="" className="img-portafolio" />
                    </article>
                    <article className="card-portafolio">
                        <li>
                            <h2>Gala Arena Indoor:</h2>
                            <p>
                                Aforo: 5,000 personas | Equipamiento: Arreglo aéreo de sonido, subwoofers en piso e
                                iluminación robótica.
                            </p>
                        </li>
                        <img src={galaPT} alt="" className="img-portafolio" />
                    </article>
                    <article className="card-portafolio">
                        <li>
                            <h2>Gran Estadio Tour</h2>
                            <p>
                                Aforo: +40,000 personas | Equipamiento: Torres de retardo (delay), circuito cerrado
                                multicámara y pirotecnia sincronizada.
                            </p>
                        </li>
                        <img src={granPT} alt="" className="img-portafolio" />
                    </article>
                    <article className="card-portafolio">
                        <li>
                            <h2> Activaciones y Ferias</h2>
                            <p>
                                Equipos compactos de alta fidelidad y sonorización itinerante para centros comerciales y
                                exposiciones.
                            </p>
                        </li>
                        <img src={activacionesPT} alt="" className="img-portafolio" />
                    </article>
                </section>
            </section>
        </>
    );
}

export default Eventos;
