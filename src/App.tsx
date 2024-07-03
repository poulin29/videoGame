import React from "react";
import ListGroup from "./components/ListGroup";

const App = () => {
  let items = ["NewYork", "Chicago", "Arkansas", "Minnesota", "Tennesse"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
};

export default App;
