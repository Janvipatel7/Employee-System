import "remixicon/fonts/remixicon.css";

const serviceArr = [
  {
    title: "Market Research",
    desc: "Nunc a scelerisque dolor, in cursus sem. Aenean turpis elit, tempus vel dictum consectetur.",
    icon: "ri-group-line",
    image: "/Images/service-1.jpg",
  },
  {
    title: "Executive Search",
    desc: "Nunc a scelerisque dolor, in cursus sem. Aenean turpis elit, tempus vel dictum consectetur.",
    icon: "ri-profile-line",
    image: "/Images/service-2.jpg",
  },
  {
    title: "Strategic Planning",
    desc: "Nunc a scelerisque dolor, in cursus sem. Aenean turpis elit, tempus vel dictum consectetur.",
    icon: "ri-mind-map",
    image: "/Images/service-3.jpg",
  },
  {
    title: "Employee Training",
    desc: "Nunc a scelerisque dolor, in cursus sem. Aenean turpis elit, tempus vel dictum consectetur.",
    icon: "ri-bar-chart-line",
    image: "/Images/service-4.jpg",
  },
];

const Services = () => {
  return (
    <section className="bg-[#D9F1FF] dark:bg-gray-900">
      <div className="py-16 px-4 mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">Services</span>
          <h2 className="mt-2 text-4xl font-extrabold text-[#081d45]">Human Resources Services</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Nunc a scelerisque dolor, in cursus sem. Aenean turpis elit, tempus vel dictum consectetur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceArr.map((item, i) => (
            <div key={i}
              className="relative bg-white border border-[#dcdcdc] hover:border-[#1268fb] rounded-[20px] px-6 pt-8 pb-14 shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      
              <div className="flex flex-col items-start">
                <i className={`${item.icon} text-[30px] text-[#081d45] mb-6 transition duration-300 group-hover:text-[#1268fb]`} />
                <div className="w-full border-b border-gray-200 relative pb-8">
                  <img
                    src={item.image}
                    alt="Profile"
                    className="absolute -right-0 -bottom-8 w-16 h-16 object-cover rounded-full border-2 border-white shadow-md"
                  />
                </div>
                <h3 className="text-[18px] font-semibold text-[#081d45] text-left mt-10 mb-1 w-full">{item.title}</h3>
                <p className="text-[14px] text-gray-500 text-left leading-relaxed">{item.desc}</p>
              </div>
           
              <div className="absolute -bottom-[22px] left-1/2 transform -translate-x-1/2 w-[50px] h-[50px] bg-white border border-[#dcdcdc] rounded-full z-10"></div>
              <div className="absolute -bottom-[16px] left-1/2 transform -translate-x-1/2 z-20">
                <button className="bg-gradient-to-br from-blue-600 to-blue-800 text-white  rounded-full w-8 h-8 flex items-center justify-center transition">
                  <i className="ri-arrow-right-up-line text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
