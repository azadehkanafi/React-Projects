function ProductCard({ name, price, image }) {
    return (
      <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-md mb-3"
        />
        <h2 className="text-lg font-semibold mb-1">{name}</h2>
        <p className="text-gray-700 mb-2">${price.toFixed(2)}</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          View
        </button>
      </div>
    );
  }
  
  
  export default ProductCard;