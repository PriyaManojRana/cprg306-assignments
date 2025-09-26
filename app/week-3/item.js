export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-white rounded-md p-4 shadow">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="font-bold text-black">{name}</h4>
          <p className="text-black">Category: {category}</p>
        </div>
        <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
          Quantity: {quantity}
        </span>
      </div>
    </li>
  );
}
