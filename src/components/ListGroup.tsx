import { Fragment } from "react";
function ListGroup() {
  let items = ["Holland", "Italy", "San Jose", "Miami", "Norway", "Finland"];

  items = [];

  if (items.length === 0)
  return <><h1>List</h1><p>No item found</p></>;

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
