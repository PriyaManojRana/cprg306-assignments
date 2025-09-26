import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-50 to-blue-100 py-10">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
          Shopping List
        </h1>
        <ItemList />
      </div>
    </main>
  );
}