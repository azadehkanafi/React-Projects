import ProductCard from "./components/ProductCard";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 89.99,
    image: "./assets/images/product1.avif"
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    price: 59.99,
    image: "./assets/images/product2.jpeg"
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 129.99,
    image: "./assets/images/product3.webp"
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 39.99,
    image: "./assets/images/product4.jpg"
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 79.99,
    image: "./assets/images/product5.jpg"
  },
  {
    id: 6,
    name: "4K Monitor",
    price: 299.99,
    image: "./assets/images/product6.jpeg"
  },
  {
    id: 7,
    name: "Laptop Stand",
    price: 25.00,
    image: "./assets/images/product7.jpeg"
  },
  {
    id: 8,
    name: "USB-C Hub",
    price: 49.99,
    image: "./assets/images/product8.jpg"
  },
  {
    id: 9,
    name: "External SSD",
    price: 149.99,
    image: "./assets/images/product9.jpeg"
  }
];




function App() {
  return (
    <div className="px-10 md:px-10 py-10 md:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
