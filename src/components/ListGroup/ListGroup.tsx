import { useState } from "react";
import styles from "./ListGroup.module.css";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // items = [];

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No Items found</p> : null}  //In order handle or avoid 'null' scenario I can use logical AND(&&) as written in below line# 11  */}
      {items.length === 0 && <p>No Items found</p>}
      <ul className={styles.listGroup}>
        {items.map((item, index) => (
          <li
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
