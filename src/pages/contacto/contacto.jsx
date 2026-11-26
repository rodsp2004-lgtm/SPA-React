import "./contacto.css";

function Contactos() {
    return (
        <>
            <header className="imagenes-contacto">
                <div className="shadow-contacto">
                    <div className="eslogan-contacto">
                        <span>
                            Todo gran evento comienza escuchando.
                            <span className="span-d-contacto">Conversemos sobre lo que tu producción necesita.</span>
                        </span>
                        <br />
                        <span className="span-d-contacto"></span>
                    </div>
                </div>
            </header>
            <section className="contacto">
                <div className="contacto-titulo">
                    <h2> Contactanos</h2>
                    <p>Comunicate con nosotros para resolver tus dudas</p>
                </div>
                <section className="contacto-datos">
                    <div className="contacto-card">
                        <h2>Numero de contacto</h2>
                        <p>+51 999888666</p>
                    </div>
                    <div className="contacto-card">
                        <h2> Consultas generales y contizaciones</h2>
                        <p>contacto@sonixaudio.com.pe</p>
                    </div>
                    <div className="contacto-card">
                        <h2> logistica de eventos</h2>
                        <p>produccion@sonixaudio.com.pe</p>
                    </div>
                    <div className="contacto-card">
                        <h2>Numero de whatsapp </h2>
                        <p>+51 9123876334</p>
                    </div>
                </section>
                <section className="contacto-mapa"></section>
            </section>
        </>
    );
}
export default Contactos;
