const Testimonial = () => {
  return (
    // <!-- Testimonial -->
    <section id="testimonial" className="bg-[#f1f3ff] py-12 overflow-hidden">
      <div className="text-center space-y-4 pb-6">
        <h2 className="text-2xl font-bold">Testimonial</h2>
        <p className="text-sm font-light">
          Berbagai review positif dari para pelanggan kami
        </p>
      </div>
      <div
        id="controls-carousel"
        className="w-full md:w-[45%] mx-auto"
        data-carousel="static"
      >
        {/* <!-- Carousel wrapper --> */}
        <div className="relative overflow-visible md:h-[330px] h-96 rounded-lg">
          {/* <!-- Item 1 --> */}

          <div
            className="hidden duration-700 ease-in-out w-full p-4"
            data-carousel-item="active"
          >
            <div className="flex flex-col space-y-4 md:flex-row justify-center items-center border-2 shadow-lg rounded-lg h-full">
              <div className="w-3/12 flex justify-center">
                <img
                  src="/assets/slide1.png"
                  alt="slide1"
                  width="80"
                  height="80"
                  className="rounded-full"
                />
              </div>
              <div className="w-9/12 space-y-3">
                <div className="flex justify-center gap-2 md:block">
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                </div>
                <p className="font-light text-sm text-slate-700">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <p className="font-medium">Son Goku 32, Bromo</p>
              </div>
            </div>
          </div>
          {/* <!-- Item 2 --> */}
          <div
            className="hidden duration-700 ease-in-out w-full p-4"
            data-carousel-item="active"
          >
            <div className="flex flex-col space-y-4 md:flex-row justify-center items-center border-2 shadow-lg rounded-lg h-full">
              <div className="w-3/12 flex justify-center">
                <img
                  src="/assets/testi1.png"
                  alt="testi1"
                  width="80"
                  height="80"
                />
              </div>
              <div className="w-9/12 space-y-3">
                <div className="flex justify-center gap-2 md:block">
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                </div>
                <p className="font-light text-sm text-slate-700">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <p className="font-medium">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
          {/* <!-- Item 3 --> */}
          <div
            className="hidden duration-700 ease-in-out w-full p-4"
            data-carousel-item
          >
            <div className="flex flex-col space-y-4 md:flex-row justify-center items-center border-2 shadow-lg rounded-lg h-full">
              <div className="w-3/12 flex justify-center">
                <img
                  src="/assets/testi2.png"
                  alt="testi2"
                  width="80"
                  height="80"
                />
              </div>
              <div className="w-9/12 space-y-3">
                <div className="flex justify-center gap-2 md:block">
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                </div>
                <p className="font-light text-sm text-slate-700">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <p className="font-medium">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Slider controls --> */}
        <div className="flex justify-center space-x-3 mt-8">
          <button type="button" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-[#5cb85f] hover:text-white">
              <i className="fa-solid fa-chevron-left fa-md"></i>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-[#5cb85f] hover:text-white">
              <i className="fa-solid fa-chevron-right fa-md"></i>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </section>
    //   <!-- End Testimonial -->
  );
};

export default Testimonial;
