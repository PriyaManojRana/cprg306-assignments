import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 ">
          Week 5 - New Item
        </h1>
        <NewItem />
      </div>
    </main>
  );
}
