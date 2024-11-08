import { FaStar } from "react-icons/fa";

const BestSelling = () => {
  const items = [
    {
      name: "Chocolate Truffle Cake",
      img: "/item1.jpg",
      price: "₹ 595",
      rating: 4.9,
      reviews: 803,
      delivery: "in 3 hours",
    },
    {
      name: "10 Red Roses Bouquet",
      img: "/item2.jpg",
      price: "₹ 545",
      rating: 4.9,
      reviews: 1622,
      delivery: "in 3 hours",
    },
    {
      name: "Lavender N Honey Luxe Fragrance Gift Set",
      img: "/item3.jpg",
      price: "₹ 1375",
      delivery: "in 2-3 days",
    },
    {
      name: "Rasmalai Pista Cream Cake",
      img: "/item4.jpg",
      price: "₹ 895",
      rating: 4.9,
      reviews: 263,
      delivery: "in 3 hours",
    },
    {
      name: "Divine Butterscotch Cake",
      img: "/item5.jpg",
      price: "₹ 549",
      rating: 4.9,
      reviews: 698,
      delivery: "in 3 hours",
    },
    {
      name: "Hearty Personalized Photo Lamp Gift",
      img: "/item6.jpg",
      price: "₹ 1300",
      rating: 5,
      reviews: 1,
      delivery: "in 2-3 days",
    },
    {
      name: "Artistic Chocolate Pleasure Cake",
      img: "/item7.jpg",
      price: "₹ 545",
      rating: 4.9,
      reviews: 1094,
      delivery: "in 3 hours",
    },
    {
      name: "Personalised Ferrero Rocher Chocolate Gift Box",
      img: "/item8.jpg",
      price: "₹ 975",
      delivery: "in 2-3 days",
    },
  ];
  return (
    <div className="px-16">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">
            Best Selling Flowers & Gifts
          </h1>
          <span className="text-lg font-light text-[#888]">
            Surprise Your Loved Ones
          </span>
        </div>
        <div className="text-lg px-8 py-2 bg-[#0e4d65] text-white rounded-md cursor-pointer">
          View All
        </div>
      </div>
      <div className="my-6 grid grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            className="border-[1px] pb-4 transition-all duration-200 ease-in-out border-[#00000044] rounded-2xl cursor-pointer relative group"
            key={item.name}
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={item.img}
                alt={item.name}
                className="rounded-t-2xl w-full group-hover:scale-110 transition-all duration-500 ease-in-out"
              />
            </div>
            <h2 className="text-[#505050] my-2 mx-2 truncate-name">
              {item.name}
            </h2>
            <p className="text-[#0f0f0f] text-md my-2 mx-2">{item.price}</p>
            <div className="flex items-center">
              <div
                className={`${item.rating === 5 ? "gap-2" : "gap-1"} ${
                  item.rating ? "" : "invisible"
                } flex justify-center items-center px-1 w-[17%] my-1 bg-[#4caf50] mx-2 rounded-md`}
              >
                <FaStar className="text-white text-sm" />
                <span className="text-white text-sm">{item.rating}</span>
              </div>
              <div
                className={`w-1.5 h-1.5 bg-[#ccc] rounded-full ${
                  item.rating ? "" : "hidden"
                }`}
              />
              <div className="px-1 text-[#197889]">
                {item.reviews
                  ? `(${item.reviews} ${
                      item.reviews === 1 ? "Review" : "Reviews"
                    })`
                  : ""}
              </div>
            </div>
            <span className="text-[#505050] font-semibold mx-2 text-sm">
              Earliest Delivery:{" "}
              <span className="font-normal text-[#197889]">
                {item.delivery}
              </span>
            </span>
            <img
              src="/heart.svg"
              alt="heart"
              className="absolute top-2 right-3 w-6 h-6"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default BestSelling;
