const Footer = () => {
  const media = [
    {
      name: "facebook",
      img: "/facebook.png",
    },
    {
      name: "twitter",
      img: "/twitter.png",
    },
    {
      name: "youtube",
      img: "/youtube.png",
    },
    {
      name: "pinterest",
      img: "/pinterest.png",
    },
    {
      name: "instagram",
      img: "/insta.png",
    },
    {
      name: "linkedin",
      img: "/linked-in.svg",
    },
  ];

  return (
    <div className="px-4 md:px-16 py-6 md:py-10">
      <div className="bg-[#f4f7f8] w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 px-4 md:px-12 rounded-2xl py-8 md:py-12">
        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="grid grid-rows-7 text-gray-600">
            <span>About Us</span>
            <span>Sell With Us</span>
            <span>Coupons & Deals</span>
            <span>Cancellation & Refunds</span>
            <span>Terms & Condition</span>
            <span>Investor Relations</span>
            <span>Retail Store</span>
          </div>
          <div className="grid grid-rows-7 text-gray-600">
            <span>Career</span>
            <span>Media</span>
            <span>Privacy Policy</span>
            <span>Reviews</span>
            <span>Blog</span>
            <span>Sitemap</span>
            <span>Quotes</span>
          </div>
          <div className="grid grid-rows-7 text-gray-600">
            <span>INR</span>
            <span>Corporate Gifts</span>
            <span>Franchise</span>
            <span>FAQ</span>
            <span>Contact Us</span>
            <span>WhatsApp</span>
            <span>Download App</span>
          </div>
        </div>

        {/* Social Media & Logo Section */}
        <div className="flex flex-col items-center">
          <h1 className="text-center font-medium text-lg my-4">
            Spread The Love On Social Media
          </h1>
          <div className="grid grid-cols-3 sm:grid-cols-6 place-items-center gap-2">
            {media.map((img) => (
              <img
                key={img.name}
                src={img.img}
                alt={img.name}
                className="h-12 sm:h-16"
              />
            ))}
          </div>
          <img src="/logo.png" alt="logo" className="h-16 sm:h-24 my-4" />
          <span className="text-center text-gray-600 text-sm sm:text-base">
            Copyright © 2024 FA GIFTS PVT. LTD
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
