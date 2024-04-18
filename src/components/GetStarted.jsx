import { Button } from "flowbite-react";

const GetStarted = () => {
  return (
    // <!-- Section Getting Started -->
    <section id="getting-started" className="py-12 bg-[#ffffff]">
      <div className="container bg-[#0d28a6] mx-auto flex flex-col items-center gap-8 p-10 py-16 rounded-lg">
        <h1 className="text-4xl font-bold text-white text-center">
          Sewa Mobil di (Lokasimu) Sekarang
        </h1>
        <p className="text-white text-center font-light text-sm lg:w-[40%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button name="Get Started" />
      </div>
    </section>
    //   <!-- End Section Getting Started -->
  );
};

export default GetStarted;
