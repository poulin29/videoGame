import React from "react";

function ListGroup() {
  let items = ["NewYork", "Chicago", "Arkansas", "Minnesota", "Tennesse"];
  items = [];

  return (
    <>
      <h1>ListGroup</h1>
      {/* {items.length === 0 ? <p>No Items found</p> : null}  //In order handle or avoid 'null' scenario I can use logical AND(&&) as written in below line# 11  */}
      {items.length === 0 && <p>No Items found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
