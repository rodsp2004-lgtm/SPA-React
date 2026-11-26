import bajo1 from "../../assets/img-parlante/bajos/parlante-bajo1.jpg";
import bajo2 from "../../assets/img-parlante/bajos/parlante-bajo2.jpg";
import bajo3 from "../../assets/img-parlante/bajos/parlante-bajo3.jpg";
import bajo4 from "../../assets/img-parlante/bajos/parlante-bajo4.jpg";
import monitor from "../../assets/img-parlante/monitores/monitor-parlante.jpg";
import "./parlantes.css";
import TarjetaParlante from "./tarjetaParlantes/TarjetaParpante";
function Parlantes() {
    return (
        <>
            <header className="imagenes-parlante">
                <div className="shadow-parlante">
                    <div className="eslogan-parlante">
                        <span>Equipamiento de élite y marcas líderes para</span>
                        <span className="span-d-parlante"> garantizar una fidelidad sonora impecable.</span>

                        <br />
                        <span className="span-d-parlante"></span>
                    </div>
                </div>
            </header>
            <section>
                <section className="monitores-parlante">
                    <h2>Nuestros monitores mas comunes</h2>
                    <div className="grid-parlantes">
                        <TarjetaParlante
                            nombre="JBL PRX812"
                            descripcion="Monitor activo de 12 pulgadas con amplificación de 1500 W."
                            marca="JBL Professional"
                            imagen={monitor}
                        />

                        <TarjetaParlante
                            nombre="JBL SRX812"
                            descripcion="Monitor pasivo de 12 pulgadas para aplicaciones de sonido en vivo."
                            marca="JBL Professional"
                            imagen={monitor}
                        />

                        <TarjetaParlante
                            nombre="JBL SRX712M"
                            descripcion="Monitor profesional de escenario con capacidad de 800 W continuos."
                            marca="JBL Professional"
                            imagen={monitor}
                        />

                        <TarjetaParlante
                            nombre="JBL STX812M"
                            descripcion="Monitor pasivo profesional con cobertura de 70° x 70°."
                            marca="JBL Professional"
                            imagen={monitor}
                        />
                    </div>
                </section>
                <section className="bajos-parlante">
                    <h2>Nuestros bajos mas comunes</h2>
                    <div className="grid-parlantes">
                        <TarjetaParlante
                            nombre="Subwoofer 18 pulgadas"
                            descripcion="Subwoofer activo diseñado para ofrecer graves profundos y potentes en eventos."
                            marca="Subwoofer"
                            imagen={bajo1}
                        />

                        <TarjetaParlante
                            nombre="Subwoofer profesional"
                            descripcion="Equipo de sonido de alto rendimiento para reforzar las frecuencias bajas."
                            marca="Subwoofer"
                            imagen={bajo2}
                        />

                        <TarjetaParlante
                            nombre="Subwoofer doble 18"
                            descripcion="Sistema de doble altavoz de 18 pulgadas para eventos y conciertos."
                            marca="Subwoofer"
                            imagen={bajo3}
                        />

                        <TarjetaParlante
                            nombre="Subwoofer de escenario"
                            descripcion="Equipo pasivo de doble parlante para sistemas profesionales de sonido."
                            marca="Subwoofer"
                            imagen={bajo4}
                        />
                    </div>
                </section>
            </section>
        </>
    );
}
export default Parlantes;
