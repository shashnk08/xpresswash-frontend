export function AboutUsMinimal() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-bold mb-4">ABOUT US</h2>
          <p className="text-base text-gray-700">
            XPRESS WASH is a professional mobile doorstep car wash service designed for people who value their time and their car. We bring a fully equipped service van to your home or workplace and deliver high-quality car cleaning without you having to step out or wait in queues.<br /><br />
            Our team uses modern equipment, eco-friendly products, and safe cleaning techniques to ensure your vehicle gets a spotless finish every time. Whether it’s a quick exterior wash or a detailed deep clean, we focus on quality, convenience, and care.<br /><br />
            With XPRESS WASH, car care becomes simple, reliable, and hassle-free.
          </p>
        </div>
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <img
            src="/media/pexels-introspectivedsgn-4876641.jpg"
            alt="XPRESS WASH Service Van"
            className="rounded-lg shadow-lg max-w-xs md:max-w-sm lg:max-w-md w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
