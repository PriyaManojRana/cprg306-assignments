export default function Item({ name, quantity, category }) {
  return (
    <li className="py-3 px-4 border border-white rounded-lg text-white bg-gradient-to-r from-purple-600 to-blue-500 shadow-md">
      <p className="font-semibold text-lg">{name}</p>
      <p>Quantity: {quantity}</p>
      <p className="text-gray-200 text-sm capitalize">
        Category: {category}
      </p>
    </li>
  );
}