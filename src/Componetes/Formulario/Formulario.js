import './Formulario.css'
import Texto from "../Texto/Texto.js"
import ListaOpciones from '../ListaOpciones/index.js'
import Boton from '../Boton/Boton'

// const Formulario = () =>{
//     return <section className="formulario">
//         <form>
//             <h2>
//                 Rellena para crear un Nuevo Perosnaje
//             </h2>
//             <Texto titulo="Nombre" placeholder="Ingresa nombre"/>
//             <Texto titulo="Rango" placeholder="Ingresa el Rango"/>
//             <Texto titulo="Foto" placeholder="Ingresa Enlace de Foto"/>
//             <ListaOpciones/>
//             <Boton>Crear</Boton>
//         </form>
//     </section>
// }



const Formulario = () =>{
    const envio=(evento)=>{
        evento.preventDefault();
        console.log(envio,evento);
    }
    return <section className="formulario">
        <form onSubmit={envio}>
            <h2>
                Rellena para crear un Nuevo Perosnaje
            </h2>
            <Texto titulo="Nombre" placeholder="Ingresa nombre"/>
            <Texto titulo="Rango" placeholder="Ingresa el Rango"/>
            <Texto titulo="Foto" placeholder="Ingresa Enlace de Foto"/>
            <ListaOpciones/>
            <Boton>Crear</Boton>
        </form>
    </section>
}
export default Formulario