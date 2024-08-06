import { Fragment } from "react";
function ListGroup() {
  let items = ["Holland", "Italy", "San Jose", "Miami", "Norway", "Finland"];

  items = [];

  const message = items.length === 0 ? <p>No items found</p> : null;

  

  return (
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
