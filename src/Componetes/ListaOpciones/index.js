import "./ListaOpciones.css"

const ListaOpciones=()=>{
    const lpersonajes=[
        "Anime",
        "Series",
        "Peliculas",
        "Meme",
        "Fantasia",
        "RRSS","Historias"
    ]

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select>
            {lpersonajes.map((lpersonajes,index)=><option key={index}> {lpersonajes} </option>)}
        </select>

    </div>
}
export default ListaOpciones;