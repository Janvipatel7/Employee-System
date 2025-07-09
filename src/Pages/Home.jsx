
const Home = () => {
  return (
    <>
      <section className="bg-[#D9F1FF] min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img src="/Images/Home-Banner-img-01.png" alt="Team" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg z-10" />
            </div>

            <div className="text-center lg:text-left px-4">
              <p className="text-[#1268fb] font-medium mb-4 px-4 py-1 inline-block rounded-full border border-blue-300 bg-white/70 backdrop-blur">
                Discover, Engage, Empower
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-[#081d45] mb-6">
                Unlocking Potential,<br />One Hire At A Time
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-8">
                Transform your workplace with our innovative HR solutions! Empower your team with seamless recruitment, engagement, and development tools.
              </p>
             
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="flex items-center gap-4 px-6 py-3 bg-gradient-to-br from-blue-600 to-blue-800 text-white font-bold text-sm rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
                  <span>GET A QUOTE</span>
                  <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#010e37]">
                    <i className="ri-arrow-right-up-line text-white text-lg"></i>
                  </div>
                </button>

                <button className="flex items-center gap-4 px-6 py-3 bg-[#010e37] text-white font-semibold rounded-2xl border border-blue-500 shadow-md hover:shadow-lg transition duration-300">
                  <span>EXPLORE SERVICES</span>
                  <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700">
                    <i className="ri-arrow-right-up-line text-white text-lg"></i>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
