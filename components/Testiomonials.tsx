import { FaStar } from "react-icons/fa";

const Testimonials = () => {
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
      text: "It was good. We were under the impression that the bouquet was made of real flowers and leaves.",
      customer: "JOJO",
      rating: 5,
      date: "07/11/2024",
    },
  ];

  return (
    <div className="px-4 md:px-16">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-semibold">
          Customers Testimonials
        </h1>
        <div className="text-sm md:text-lg px-4 md:px-8 py-2 bg-[#0e4d65] text-white rounded-md cursor-pointer">
          View All
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="my-6 overflow-x-auto">
        <div className="grid grid-flow-col auto-cols-[80%] md:grid-cols-3 gap-4 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              className="border-[1px] border-[#00000044] rounded-2xl p-4 min-w-[250px] md:w-auto"
              key={testimonial.text}
            >
              <p className="text-gray-600 font-light">{testimonial.text}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-semibold text-[#464646]">
                  {testimonial.customer}
                </span>
                <div className="flex items-center gap-1 bg-[#4caf50] rounded-md px-2 py-1">
                  <FaStar className="text-white text-xs" />
                  <span className="text-white text-sm">
                    {testimonial.rating}
                  </span>
                </div>
              </div>
              <span className="text-gray-600 font-semibold text-xs md:text-sm">
                Posted On: {testimonial.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
