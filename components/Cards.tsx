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
    <div className="flex justify-center px-16 my-12">
      <div className="bg-[#E7EDEF] w-full rounded-2xl grid grid-cols-2 gap-8 px-10 py-8">
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
              className={`w-72 object-cover ${
                idx <= 1 ? "rounded-l-2xl" : "rounded-r-2xl"
              }`}
            />
            <div className="p-6 flex flex-col justify-center">
              <h2 className="text-xl font-semibold text-[#1c2120]">
                {card.title}
              </h2>
              <ul className="mt-2 space-y-1">
                {card.subTitles.map((subTitle) => (
                  <li key={subTitle} className="text-gray-600">
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
