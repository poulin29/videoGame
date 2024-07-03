import React from "react";

function ListGroup() {
  const items = ["NewYork", "Chicago", "Arkansas", "Minnesota", "Tennesse"];

  return (
    <>
      <h1>ListGroup</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
