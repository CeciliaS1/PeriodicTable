import axios from "axios";
import { useEffect, useState } from "react";
import Tabla from "../components/Tabla";
import Elemento from "../components/Elemento";
export default function MainPage(props) {
  const [elementos, setElementos] = useState();
  const [query, setQuery] = useState("oxigen");

  useEffect(
    function () {
      const url =
        "https://periodic-table-elements-info.herokuapp.com/elements?key=c3845502cfe545f6bf1203854210512&q";
      axios.get(url).then(function (respuesta) {
        setElementos(respuesta.data);
      });
    },
    [query]
  );
  function setBusqueda(event) {
    setQuery(event.target.value);
  }
  function transformarElementos() {
    const columnas = [];
    for (let elemento of elementos) {
      if (elemento.atomicNumber >= 57 && elemento.atomicNumber <= 102) continue;
      if (!columnas[elemento.group]) {
        columnas[elemento.group] = [];
      }
      columnas[elemento.group].push(elemento);
    }
    return columnas;
  }

  if (elementos === undefined) return <p>Loading...</p>;
  return (
    <div>
      <div id="buscador">
        <input onChange={setBusqueda} type="text" />
      </div>
      <div id="elemento">
        <Elemento
        // numeroAtomico={elementos?.atomicNumber}
        // masaAtomica={elementos?.atomicMass}
        // simbolo={elementos?.symbol}
        // nombre={elementos?.name}
        />
      </div>
      <div id="tabla">
        <Tabla columnas={transformarElementos()} />
      </div>
    </div>
  );
}
