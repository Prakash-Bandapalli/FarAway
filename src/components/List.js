export default function List({ item, onDelete, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onToggleItem(item.id)}></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.option} {item.name}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
