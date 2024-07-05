import { useState } from "react";

// {items [], heading: string}
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1); // this useState function is called as a Hook. A hook is a built in function that allows to tap into react features. useSate hook is used to if the data of the component need to be upated or changed.

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No Items found</p> : null}  //In order handle or avoid 'null' scenario I can use logical AND(&&) as written in below line# 11  */}
      {items.length === 0 && <p>No Items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
