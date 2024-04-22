import { useState } from "react";
import List from "./List";
export default function PackingList({
  array,
  onDelete,
  onToggleItem,
  onPress,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = array;
  }
  if (sortBy === "description") {
    sortedItems = array.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortBy === "packed") {
    sortedItems = array
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <List
            item={item}
            key={item.id}
            onDelete={onDelete}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="sort">
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={() => onPress()}>Clear Items</button>
      </div>
    </div>
  );
}
