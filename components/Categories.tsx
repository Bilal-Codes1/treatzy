import Image from "next/image";
import { AiOutlineEdit } from "react-icons/ai";

const Categories = () => {
  const circles = [
    {
      name: "hamper",
      img: "/Hamper.png",
    },
    {
      name: "cake",
      img: "happy_birthday.png",
    },
    {
      name: "rose",
      img: "Rose.png",
    },
    {
      name: "plants",
      img: "Monsoon_plants.png",
    },
  ];
  return (
    <>
      {/* Desktop */}
      <div className="px-16 py-2.5 border-b-[1px] border-t-[1px] md:flex items-center gap-8 justify-center w-full hidden">
        <span className="font-light text-[#1c2120]">Express Delivery</span>
        <span className="font-light text-[#1c2120]">Cakes</span>
        <span className="font-light text-[#1c2120]">Flowers</span>
        <span className="font-light text-[#1c2120]">Combos</span>
        <span className="font-light text-[#1c2120]">Personalized</span>
        <span className="font-light text-[#1c2120]">Plants</span>
        <span className="font-light text-[#1c2120]">Gifts</span>
        <span className="font-light text-[#1c2120]">Anniversary</span>
        <span className="font-light text-[#1c2120]">Birthday</span>
        <span className="font-light text-[#1c2120]">Occasions</span>
        <span className="font-light text-[#1c2120]">International</span>
      </div>

      {/* Mobile */}
      <div className="w-full px-6 gap-3 flex justify-between items-center md:hidden my-2">
        {circles.map((circle) => (
          <div
            className="w-[75px] h-[75px] border-2 border-[#0e4d65] rounded-full flex justify-center items-center"
            key={circle.name}
          >
            <img
              src={circle.img}
              alt={circle.name}
              className="object-cover rounded-full w-[67px] h-[67px]"
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default Categories;
