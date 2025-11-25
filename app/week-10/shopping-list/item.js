export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="py-3 px-4 border border-white rounded-lg text-white bg-gradient-to-r from-purple-600 to-blue-500 shadow-md cursor-pointer hover:from-purple-700 hover:to-blue-600 transition-all"
      onClick={() => onSelect && onSelect({ name, quantity, category })}
    >
      <p className="font-semibold text-lg">{name}</p>
      <p>Quantity: {quantity}</p>
      <p className="text-gray-200 text-sm capitalize">Category: {category}</p>
    </li>
  );
}
