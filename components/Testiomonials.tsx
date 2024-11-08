import { FaStar } from "react-icons/fa";

const Testiomonials = () => {
  const testimonials = [
    {
      text: "It is beautiful and all the flowers are fresh. The product delivered looks the same as shown in the picture.",
      customer: "JOJO",
      rating: 5,
      date: "07/11/2024",
    },
    {
      text: "Love the flowers and the overall presentation. Its a bunch of small roses with pearls which looks elegant and pretty.",
      customer: "JOJO",
      rating: 5,
      date: "05/11/2024",
    },
    {
      text: "It was good . We were under the impression that the bouquet was made of real flowers and leaves.",
      customer: "JOJO",
      rating: 5,
      date: "07/11/2024",
    },
  ];
  return (
    <div className="px-16">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Customers Testimonials</h1>
        <div className="text-lg px-8 py-2 bg-[#0e4d65] text-white rounded-md cursor-pointer">
          View All
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 my-6">
        {testimonials.map((testimonial) => (
          <div className="border-[1px] border-[#00000044] rounded-2xl p-4">
            <p className="text-gray-600 font-light">{testimonial.text}</p>
            <div className="flex justify-between items-center">
              <span className="my-1.5 font-semibold text-[#464646]">
                {testimonial.customer}
              </span>
              <div
                className={`gap-1 flex justify-center items-center w-[12%] my-1 bg-[#4caf50] rounded-md`}
              >
                <FaStar className="text-white text-sm" />
                <span className="text-white text-sm">{testimonial.rating}</span>
              </div>
              <span className="text-gray-600 font-semibold text-sm ">
                Posted On: {testimonial.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Testiomonials;
