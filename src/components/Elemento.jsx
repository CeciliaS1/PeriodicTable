export default function Elemento(props) {
  console.log(props);

  function getColor(groupBlock) {
    switch (groupBlock) {
      case "nonmetal":
        return "green";
      case "metal":
        return "red";
      case "noble gas":
        return "blue";
      case "alkali metal":
        return "yellow";
      case "alkaline earth metal":
        return "DarkCyan";
      case "metalloid":
        return "Coral";
      case "transition metal":
        return "Aqua";
      case "lanthanoid":
        return "grey";
      case "actinoid":
        return "ligthblue";
      case "post-transition metal":
        return "orange";
      case "halogen":
        return "DodgerBlue";
      default:
        return;
    }
  }
  let style = {
    color: "black",
    backgroundColor: getColor(props.groupBlock)
  };

  return (
    <div className="elemento" style={style}>
      <div className="numeroAtomico">
        <h3>{props.numeroAtomico} </h3>
      </div>
      <div className="masaAtomica">
        <h3>{props.masaAtomica}</h3>
      </div>
      <br />
      <div className="simbolo">
        <h1>{props.simbolo} </h1>
      </div>
      <div className="nombre">
        <h2>{props.nombre} </h2>
      </div>
    </div>
  );
}
