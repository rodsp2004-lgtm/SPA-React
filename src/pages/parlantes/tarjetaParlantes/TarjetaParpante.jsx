function TarjetaParlante(props) {
    return (
        <article className="tarjeta-parlante">
            <img src={props.imagen} alt={props.nombre} />
            <div>
                <h2>{props.nombre}</h2>
                <p>{props.descripcion}</p>
                <span>{props.marca}</span>
            </div>
        </article>
    );
}
export default TarjetaParlante;
