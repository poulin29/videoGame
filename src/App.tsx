import React from "react";
import ListGroup from "./components/ListGroup";

const App = () => {
  let items = ["NewYork", "Chicago", "Arkansas", "Minnesota", "Tennesse"];

  const handleSlectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSlectedItem}
      />
    </div>
  );
};

export default App;
