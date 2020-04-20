import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCreargasto] = useState(false);
  useEffect(() => {
   if(creargasto){
     //agrega el nuevo presupuesto
    guardarGastos([
      ...gastos,
      gasto
    ]);
    //resta del presupuesto
    const presupuestoRestante = restante - gasto.cantidad;
  
    guardarRestante(presupuestoRestante);
    //resetea
    guardarCreargasto(false);
    //Poner una alerta o un componente para mostrar que no hay mas presupuesto

   }
  }, [gasto, creargasto, gastos, restante ])

  return (
    <div className="container">
      <header>
      <h1>Gasto Semanal </h1>
      <div className="contenido-principal contenido">
        {mostrarpregunta ?
        (
          <Pregunta
          guardarPresupuesto={guardarPresupuesto}
          guardarRestante={guardarRestante}
          actualizarPregunta={actualizarPregunta}
          />
        ) : 
        (
          <div className="row">
          <div className="one-half column">
          <Formulario
          guardarGasto={guardarGasto}
          guardarCreargasto={guardarCreargasto}
          />
          </div>
          <div className="one-half column">
          <Listado
          gastos={gastos}
          />
          <ControlPresupuesto
          presupuesto={presupuesto}
          restante={restante}
          />
          </div>
        </div>
        )
        }
      
     
      </div>
      </header>
    </div>

  );
}

export default App;
