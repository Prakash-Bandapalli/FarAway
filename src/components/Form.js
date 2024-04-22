import { useState } from "react";

export default function Form(prop) {
  const [itemName, setItemName] = useState("");
  const [option, setOption] = useState(1);
  function handleChange(e) {
    setItemName(e.target.value);
    console.log(e.target.value);
  }
  function handleOptions(e) {
    setOption(e.target.value);
    console.log(e.target.value);
  }
  return (
    <form
      className="midform"
      onSubmit={(e) => {
        prop.onPress(option, itemName, e);
        setItemName("");
        setOption(1);
      }}
    >
      <h2>What do you need for your trip ? 🤔</h2>
      <select onChange={handleOptions} value={option}>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        placeholder="enter the item..."
        onChange={handleChange}
        value={itemName}
      ></input>
      <button className="add">Add</button>
    </form>
  );
}
