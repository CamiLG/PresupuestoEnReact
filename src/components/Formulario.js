import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
const Formulario = ({guardarGasto, guardarCreargasto}) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();
        //validar campos
        if( cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }
        //construir el objeto gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        //pasar el objeto gasto al componente ppal
        guardarGasto(gasto);
        guardarCreargasto(true);
        //resetear el form
        guardarNombre('');
        guardarCantidad(0);
    }
    return ( 
        <form
        onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto"/> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={ e => guardarNombre(e.target.value)}
                />

            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={ e => guardarCantidad(parseInt(e.target.value, 10))}
                />
            </div>
            <input
            type="submit"
            className="button-primary u-full-width"
            value="Agregar Gasto"
            />
        </form>
     );
}
 
export default Formulario;