
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Holland", "Italy", "San Jose", "Miami", "Norway", "Finland"];

  // Event handler
  const handleClick = (event : MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick} //pass reference
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
