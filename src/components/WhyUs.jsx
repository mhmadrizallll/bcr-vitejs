const WhyUs = () => {
  return (
    // <!-- Why Us -->
    <section id="why-us" className="py-12 bg-[#ffffff]">
      <div className="container mx-auto space-y-4 p-4 lg:p-0">
        <h2 className="text-2xl font-bold">Why Us?</h2>
        <p className="text-sm font-light">
          Mengapa harus pilih Binar Car Rental?
        </p>
        <div className="flex flex-col lg:flex-row gap-8 pt-8">
          <div className="w-full lg:w-3/12 p-6 px-8 space-y-4 border-2 shadow-md transition-all duration-500 ease-in-out hover:cursor-pointer hover:text-[#000000] hover:scale-110">
            <img
              src="/assets/why-icon1.png"
              alt="icon_1"
              className="w-[32px]"
            />
            <h3 className="text-base font-bold">Mobil Lengkap</h3>
            <p className="text-sm font-light text-slate-700">
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </p>
          </div>
          <div className="w-full lg:w-3/12 p-6 px-8 space-y-4 border-2 shadow-md transition-all duration-500 ease-in-out hover:cursor-pointer hover:scale-110">
            <img
              src="/assets/why-icon2.png"
              alt="icon_1"
              className="w-[32px]"
            />
            <h3 className="text-base font-bold">Harga Murah</h3>
            <p className="text-sm font-light text-slate-700">
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </p>
          </div>
          <div className="w-full lg:w-3/12 p-6 px-8 space-y-4 border-2 shadow-md transition-all duration-500 ease-in-out hover:cursor-pointer hover:scale-110">
            <img
              src="/assets/why-icon3.png"
              alt="icon_1"
              className="w-[32px]"
            />
            <h3 className="text-base font-bold">Layanan 24 Jam</h3>
            <p className="text-sm font-light text-slate-700">
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </p>
          </div>
          <div className="w-full lg:w-3/12 p-6 px-8 space-y-4 border-2 shadow-md transition-all duration-500 ease-in-out hover:cursor-pointer hover:scale-110">
            <img
              src="/assets/why-icon4.png"
              alt="icon_1"
              className="w-[32px]"
            />
            <h3 className="text-base font-bold">Sopir Profesional</h3>
            <p className="text-sm font-light text-slate-700">
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </p>
          </div>
        </div>
      </div>
    </section>
    //   <!-- End Why Us -->
  );
};

export default WhyUs;
