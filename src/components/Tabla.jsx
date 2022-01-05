import Elemento from "./Elemento";
export default function Tabla(props) {
  function convertirEnHtml(elemento) {
    return (
      <Elemento
        numeroAtomico={elemento?.atomicNumber}
        masaAtomica={elemento?.atomicMass}
        simbolo={elemento?.symbol}
        nombre={elemento?.name}
        groupBlock={elemento?.groupBlock}
      />
    );
  }
  const columnas = props.columnas.map((columna)=>(
    <div>
       {columna.map(convertirEnHtml)} 
    </div>    
  ))
  return <div className="columnas">{columnas}</div>;
}
