import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Status from "./Status";
import { useState } from "react";
export default function App() {
  const [storeItems, setStoreItems] = useState([]);
  function handlePress(option, name, e) {
    e.preventDefault();
    if (!name) return;
    const newItem = { option, name, packed: false, id: Date.now() };
    console.log(newItem);
    setStoreItems((prev) => {
      return [...prev, newItem];
    });
  }
  function ooDelete(id) {
    const newList = storeItems.filter((item) => {
      return id !== item.id;
    });
    setStoreItems(newList);
  }
  function handleToggleItem(id) {
    setStoreItems((items) =>
      items.map((item) =>
        id === item.id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClear() {
    const confirm = window.confirm(
      "Are you sure you want delete , all the items ?"
    );
    if (confirm) setStoreItems([]);
  }
  return (
    <div>
      <Logo />
      <Form onPress={handlePress} />
      <PackingList
        array={storeItems}
        onDelete={ooDelete}
        onToggleItem={handleToggleItem}
        onPress={handleClear}
      />
      <Status array={storeItems} />
    </div>
  );
}
