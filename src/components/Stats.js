export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀 </em>
      </footer>
    );

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round(
    numItems > 0 ? (numPackedItems / numItems) * 100 : 0
  );
  return (
    <footer className="stats">
      {packedPercentage === 100 ? (
        <em>Packed and ready to go ✈️ </em>
      ) : (
        <em>
          💼 You have {numItems} items on your list, and you already packed{" "}
          {numPackedItems}({packedPercentage}%)
        </em>
      )}
    </footer>
  );
}
