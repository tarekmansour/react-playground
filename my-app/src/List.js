const products = [
  { id: 1, title: "Fig", isFruit: true },
  { id: 2, title: "Laptop", isFruit: false },
  { id: 3, title: "Tv", isFruit: false },
  { id: 4, title: "Apricot", isFruit: true },
];

export default function ShoppingList() {
  const listOfItems = products.map((p) => (
    <li key={p.id} style={{ color: p.isFruit ? "green" : "blue" }}>
      {p.title}
    </li>
  ));

  return (
    <>
      <h1>Shopping list:</h1>
      <u>{listOfItems}</u>
    </>
  );
}
