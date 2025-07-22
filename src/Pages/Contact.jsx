const Contact = () => {
  return (
    <section className="container mx-auto py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <button className="flex items-center gap-2 px-4 py-1 mb-4 text-sm font-medium text-white bg-blue-500 rounded-full">
            Contact Us <i className="ri-arrow-right-line"></i>
          </button>

          <h2 className="text-4xl font-bold mb-4 leading-snug">
            Don't Hesitate To Ask Any Questions
          </h2>
          <p className="mb-10 text-gray-500">
            Volutpat ex vehicula ridiculus magnis a facilisi vulputate id.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-2xl border border-[#b2d5f7] bg-[#eaf7ff] w-fit">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1268fb] text-white text-2xl">
                  <i className="ri-phone-line"></i>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-black">Call Us 24hrs</h4>
                <p className="text-sm text-gray-500 font-semibold leading-relaxed">
                  +011-234-5678<br />+011-234-56789
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-2xl border border-[#b2d5f7] bg-[#eaf7ff] w-fit">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1268fb] text-white text-2xl">
                  <i className="ri-mail-line"></i>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-black">Email Us</h4>
                <p className="text-sm text-gray-500 font-semibold leading-relaxed">
                  info@example.com<br />support@example.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-2xl border border-[#b2d5f7] bg-[#eaf7ff] w-fit">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1268fb] text-white text-2xl">
                  <i className="ri-map-pin-line"></i>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-black">Office Address</h4>
                <p className="text-sm text-gray-500 font-semibold leading-relaxed">
                  No: 58 A, East Madison Street,<br />Baltimore, MD, USA 4508
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-2xl border border-[#b2d5f7] bg-[#eaf7ff] w-fit">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1268fb] text-white text-2xl">
                  <i className="ri-time-line"></i>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-black">Office Hours</h4>
                <p className="text-sm text-gray-500 font-semibold leading-relaxed">
                  Mon-Fri - 9am to 6pm,<br />Sat-Sun - Holiday
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#b2d6fe] to-[#eaf6ff] rounded-[30px] p-10 shadow-md">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Feedback Form</h2>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full border-b border-gray-400 bg-transparent outline-none py-2 focus:border-blue-500 transition-all duration-200 text-gray-700 placeholder-gray-500"
                required
              />
              <input
                type="text"
                placeholder="Mobile Number*"
                className="w-full border-b border-gray-400 bg-transparent outline-none py-2 focus:border-blue-500 transition-all duration-200 text-gray-700 placeholder-gray-500"
                required
              />
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full border-b border-gray-400 bg-transparent outline-none py-2 focus:border-blue-500 transition-all duration-200 text-gray-700 placeholder-gray-500"
                required
              />
              <select
                className="w-full border-b border-gray-400 bg-transparent outline-none py-2 text-gray-500 focus:border-blue-500 transition-all duration-200"
                required
              >
                <option value="">Choose types of service*</option>
                <option value="support">Customer Support</option>
                <option value="sales">Sales Inquiry</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            <textarea
              placeholder="Additional Message"
              rows={4}
              className="w-full border-b border-gray-400 bg-transparent outline-none py-2 focus:border-blue-500 transition-all duration-200 text-gray-700 placeholder-gray-500"
            ></textarea>

            <div className="flex justify-center">
              <button className="flex items-center gap-4 px-2 py-2 bg-gradient-to-br from-blue-600 to-blue-800 text-white font-bold text-[10px] rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
                <span>SEND MESSAGE</span>
                <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#010e37]">
                  <i className="ri-arrow-right-up-line text-white text-lg"></i>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
