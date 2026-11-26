import CCTV from "../../assets/img-inicio/articulos/CCTV.jpg";
import eventos from "../../assets/img-inicio/articulos/Eventos.jpg";
import pantallas from "../../assets/img-inicio/articulos/pantallas.jpg";
import "./inicio.css";
function Inicio() {
    return (
        <>
            <header className="imagenes">
                <div className="shadow">
                    <div className="eslogan">
                        <span>Donde la tecnología de vanguardia se convierte en una</span> <br />
                        <span className="span-D">experiencia sonora única.</span>
                    </div>
                </div>
            </header>
            <section className="contenedor-p">
                <section className="quienes-somos">
                    <h2>Quiénes somos</h2>
                    <p>
                        En SONIX AUDIO, transformamos cada escenario en una experiencia acústica impecable. Nos
                        especializamos en el alquiler de sistemas de sonido profesional y producción técnica para
                        eventos de cualquier escala. Combinamos equipamiento de gama alta con puntualidad absoluta en el
                        montaje y un equipo de ingenieros dedicados, garantizando nitidez, potencia y respaldo total de
                        principio a fin.
                    </p>
                </section>
                <section className="articulos">
                    <article className="card">
                        <div>
                            <h2>Eventos</h2>
                            <p>
                                En nuestra área de Eventos unimos trayectoria comprobada con la tecnología audiovisual
                                más avanzada del mercado. Ya sea en un espacio privado o en un estadio multitudinario,
                                nuestro respaldo técnico y equipamiento convierten cada producción en un espectáculo
                                memorable. Sin importar el lugar, llevamos tu proyecto al más alto nivel con precisión,
                                potencia y excelencia.
                            </p>
                        </div>
                        <img src={eventos} alt="" className="imgArtic" />
                    </article>
                    <article className="card card-reverso">
                        <img src={pantallas} alt="" className="imgArtic" />
                        <div>
                            <h2>Pantallas</h2>
                            <p>
                                Diseñamos e instalamos muros visuales de gran formato mediante paneles LED modulares de
                                alta definición. Nuestros sistemas se adaptan a cualquier estructura y dimensión,
                                ofreciendo brillo intenso, contraste superior y resistencia climática tanto en
                                interiores como en eventos masivos al aire libre, asegurando visibilidad perfecta desde
                                cualquier ángulo del recinto.
                            </p>
                        </div>
                    </article>
                    <article className="card">
                        <div>
                            <h2>CCTV</h2>
                            <p>
                                Llevamos cada detalle del escenario directamente a las pantallas gigantes del recinto en
                                tiempo real. Contamos con cámaras de alta definición, unidades móviles de realización y
                                enlaces sin latencia para que ningún asistente pierda de vista lo que ocurre en tarima,
                                garantizando una experiencia visual inmersiva y sincronizada con el sonido.
                            </p>
                        </div>
                        <img src={CCTV} alt="" className="imgArtic" />
                    </article>
                </section>
            </section>
        </>
    );
}
export default Inicio;
