const Contact = () => {
  return (
    <section className="w-full px-6 py-16 bg-white text-black">
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
              <div className="flex items-center justify-center p-2 rounded-[20px] border border-[#1268fb] bg-[#d9f1ff] w-fit">
                <span className="flex items-center justify-center w-12 h-12 bg-[#1268fb] rounded-[10px] text-white text-2xl">
                  <i className="ri-phone-line"></i>
                </span>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Call Us 24hrs</h4>
                <p className="text-sm text-gray-600">
                  +011-234-5678<br />+011-234-56789
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center p-2 rounded-[20px] border border-[#1268fb] bg-[#d9f1ff] w-fit">
                <span className="flex items-center justify-center w-12 h-12 bg-[#1268fb] rounded-[10px] text-white text-2xl">
                  <i className="ri-mail-line"></i>
                </span>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Email Us</h4>
                <p className="text-sm text-gray-600">
                  info@example.com<br />support@example.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center p-2 rounded-[20px] border border-[#1268fb] bg-[#d9f1ff] w-fit">
                <span className="flex items-center justify-center w-12 h-12 bg-[#1268fb] rounded-[10px] text-white text-2xl">
                  <i className="ri-map-pin-line"></i>
                </span>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Office Address</h4>
                <p className="text-sm text-gray-600">
                  No: 58 A, East Madison Street,<br />Baltimore, MD, USA 4508
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center p-2 rounded-[20px] border border-[#1268fb] bg-[#d9f1ff] w-fit">
                <span className="flex items-center justify-center w-12 h-12 bg-[#1268fb] rounded-[10px] text-white text-2xl">
                  <i className="ri-time-line"></i>
                </span>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Office Hours</h4>
                <p className="text-sm text-gray-600">
                  Mon-Fri - 9am to 6pm, Sat-Sun - Holiday
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-200 to-blue-100 p-8 rounded-[30px] shadow-md">
          <h3 className="text-3xl font-bold mb-8 text-center">Feedback Form</h3>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full border-b-2 border-gray-300 bg-transparent outline-none py-2 focus:border-blue-500 transition-colors duration-200"
                required/>
              <input
                type="text"
                placeholder="Mobile Number*"
                className="w-full border-b-2 border-gray-300 bg-transparent outline-none py-2 focus:border-blue-500 transition-colors duration-200"
                required/>
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full border-b-2 border-gray-300 bg-transparent outline-none py-2 focus:border-blue-500 transition-colors duration-200"
                required/>
              <select
                className="w-full border-b-2 border-gray-300 bg-transparent outline-none py-2 text-gray-500 focus:border-blue-500 transition-colors duration-200"
                required>
                <option value="">Choose types of service*</option>
                <option value="support">Customer Support</option>
                <option value="sales">Sales Inquiry</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            <textarea
              placeholder="Additional Message"
              rows={4}
              className="w-full border-b-2 border-gray-300 bg-transparent outline-none py-2 focus:border-blue-500 transition-colors duration-200"/>

            <div className="flex justify-start">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-[#001d68] transition">
                SEND MESSAGE <i className="ri-arrow-right-up-line text-lg"></i>
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
