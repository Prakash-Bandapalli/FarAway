export default function Status({ array }) {
  if (!array.length) {
    return (
      <footer>
        <em>start adding some items , to your packing list 🛩️</em>
      </footer>
    );
  }
  const len = array.length;
  const packed = array.filter((item) => item.packed).length;
  const percentage = Math.round((packed / len) * 100);
  return (
    <footer>
      <em>
        {percentage === 100
          ? `You every thing ready to go 🚀`
          : `💼 have you ${len} items on your list , and you have already packed ${packed}
        (${percentage}%) items`}
      </em>
    </footer>
  );
}
