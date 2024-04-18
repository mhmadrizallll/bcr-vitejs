const Faq = () => {
  return (
    //   {/* // <!-- Section FAQ --> */}
    <section id="faq" className="py-12 bg-[#ffffff]">
      <div className="container mx-auto flex flex-col lg:flex-row p-4 lg:p-0 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-6/12 space-y-4 text-center lg:text-left">
          <h2 className="text-2xl font-bold">Frequently Asked Question</h2>
          <p className="text-sm font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="w-full lg:w-6/12 space-y-4">
          {/* <!-- according 1 --> */}
          <div className="relative mb-3 shadow-sm border-2 rounded-md">
            <p className="mb-0">
              <button
                className="relative flex items-center w-full p-4 font-light text-sm text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group"
                data-collapse-target="animated-collapse-1"
              >
                <span>Apa saja syarat yang dibutuhkan?</span>
                <i className="absolute right-4 pt-1 text-base transition-transform fa fa-chevron-down group-open:rotate-180"></i>
              </button>
            </p>
            <div
              data-collapse="animated-collapse-1"
              className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </div>
            </div>
          </div>
          {/* <!-- according 2 --> */}
          <div className="relative mb-3 shadow-sm border-2 rounded-md">
            <h6 className="mb-0">
              <button
                className="relative flex items-center w-full p-4 font-light text-sm text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group"
                data-collapse-target="animated-collapse-2"
              >
                <span>Berapa hari minimal sewa mobil lepas kunci?</span>
                <i className="absolute right-4 pt-1 text-base transition-transform fa fa-chevron-down group-open:rotate-180"></i>
              </button>
            </h6>
            <div
              data-collapse="animated-collapse-2"
              className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </div>
            </div>
          </div>
          {/* <!-- according 3 --> */}
          <div className="relative mb-3 shadow-sm border-2 rounded-md">
            <h6 className="mb-0">
              <button
                className="relative flex items-center w-full p-4 font-light text-sm text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group"
                data-collapse-target="animated-collapse-3"
              >
                <span>
                  Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </span>
                <i className="absolute right-4 pt-1 text-base transition-transform fa fa-chevron-down group-open:rotate-180"></i>
              </button>
            </h6>
            <div
              data-collapse="animated-collapse-3"
              className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </div>
            </div>
          </div>
          {/* <!-- according 4 --> */}
          <div className="relative mb-3 shadow-sm border-2 rounded-md">
            <h6 className="mb-0">
              <button
                className="relative flex items-center w-full p-4 font-light text-sm text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group"
                data-collapse-target="animated-collapse-4"
              >
                <span>Apakah Ada biaya antar-jemput?</span>
                <i className="absolute right-4 pt-1 text-base transition-transform fa fa-chevron-down group-open:rotate-180"></i>
              </button>
            </h6>
            <div
              data-collapse="animated-collapse-4"
              className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </div>
            </div>
          </div>
          {/* <!-- according 5 --> */}
          <div className="relative mb-3 shadow-sm border-2 rounded-md">
            <h6 className="mb-0">
              <button
                className="relative flex items-center w-full p-4 font-light text-sm text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group"
                data-collapse-target="animated-collapse-5"
              >
                <span>Bagaimana jika terjadi kecelakaan</span>
                <i className="absolute right-4 pt-1 text-base transition-transform fa fa-chevron-down group-open:rotate-180"></i>
              </button>
            </h6>
            <div
              data-collapse="animated-collapse-5"
              className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
