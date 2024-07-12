import React from "react";
import ListGroup from "./components/ListGroup/ListGroup";
import "./App.css";

function App() {
  const items = ["NewYork", "Chicago", "Arkansas", "Minnesota", "Tennesse"];

  return (
    <div>
      <ListGroup heading="Miami" items={items} onSelectItem={() => {}} />
    </div>
  );
}

export default App;
