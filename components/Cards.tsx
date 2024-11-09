const Cards = () => {
  const cards = [
    {
      img: "/card1.jpg",
      title: "Delicious Cakes",
      subTitles: [
        "Birthday Cakes",
        "Anniversary Cakes",
        "Design Cakes",
        "Photo Cakes",
        "Chocolate Cakes",
      ],
    },
    {
      img: "/card2.jpg",
      title: "Gifting Gallery",
      subTitles: [
        "Photo Gifts",
        "Mugs",
        "Cushions",
        "Name Gifts",
        "Caricatures",
      ],
    },
    {
      img: "/card3.jpg",
      title: "Floral Delights",
      subTitles: [
        "Red Roses",
        "Birthday Flowers",
        "Anniversary Flowers",
        "Exotic Flowers",
        "Flower Boxes",
      ],
    },
    {
      img: "/card4.jpg",
      title: "Plant Paradise",
      subTitles: [
        "Bonsai",
        "Indoor",
        "Air Purifying",
        "Lucky Bamboo",
        "Flowering",
      ],
    },
  ];

  return (
    <div className="flex justify-center px-4 md:px-8 lg:px-16 my-12">
      <div className="bg-[#E7EDEF] w-full rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 px-6 md:px-10 py-8">
        {cards.map((card, idx) => (
          <div
            key={card.title}
            className={`border-[#00000044] bg-white rounded-2xl border-[1px] flex ${
              idx <= 1 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <img
              src={card.img}
              alt={card.title}
              className={`w-36 sm:w-48 md:w-60 lg:w-72 object-cover ${
                idx <= 1 ? "rounded-l-2xl" : "rounded-r-2xl"
              }`}
            />
            <div className="p-4 sm:p-6 flex flex-col justify-center">
              <h2 className="text-lg sm:text-xl font-semibold text-[#1c2120]">
                {card.title}
              </h2>
              <ul className="mt-2 space-y-1">
                {card.subTitles.map((subTitle) => (
                  <li
                    key={subTitle}
                    className="text-gray-600 text-sm sm:text-base"
                  >
                    {subTitle}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
