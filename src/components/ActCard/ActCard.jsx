import { useSelector } from "react-redux";

const ActCard = ({id, name, length, difficulty, season, paises}) => {

  return ( 
    <div className="card">
      <h2>{name}</h2>
      <p>Difficulty: {difficulty}</p>
      <p>Length: {length}</p>
      <p>Season: {season}</p>
      <p>Country codes: {paises.map(e => e.id.toString() + " ")}</p>
    </div>
   );
}
 
export default ActCard;
