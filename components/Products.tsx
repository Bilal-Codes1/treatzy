const Products = () => {
  const products = [
    {
      name: "Flowers",
      img: "/flower.jpg",
    },
    {
      name: "Cakes",
      img: "/cake.jpg",
    },
    {
      name: "Combos",
      img: "/gift.jpg",
    },
    {
      name: "Plants",
      img: "/plant.jpg",
    },
    {
      name: "Personalized",
      img: "/personalized.jpg",
    },
    {
      name: "Gifts",
      img: "/gift-card.jpg",
    },
  ];
  return (
    <div className="flex justify-center mb-20 mt-8 w-full">
      {products.map((product) => (
        <div className="p-4 cursor-pointer group" key={product.name}>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={product.img}
              alt={product.name}
              className="rounded-2xl group-hover:scale-110 transition-all duration-300 ease-linear w-full"
            />
          </div>
          <span className="text-lg flex justify-center m-1">
            {product.name}
          </span>
        </div>
      ))}
    </div>
  );
};
export default Products;
