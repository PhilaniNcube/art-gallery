import Image from "next/future/image";
import Link from "next/link";

const Location = () => {
  return (
    <main className="">
      <div className="relative">
        <Image
          src="/images/desktop/image-map@2x.png"
          alt="map"
          width={2800}
          height={1200}
          className="w-full h-[300px] sm:h-[400px]  lg:h-[600px] object-cover"
        />
        <div className="absolute inset-0">
          <div className="max-w-6xl mx-auto">
            <Link href="/">
              <span className="flex h-10 mt-3 items-center text-white w-fit  ">
                <span className="bg-brown px-4 py-4 flex items-center justify-center">
                  <svg
                    width="10"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke="#FFF" fill="none" d="M9 24 1 12 9 0" />
                  </svg>
                </span>
                <p className="bg-dark tracking-wide text-white py-4 px-12 font-bold font-brand uppercase">
                  Back To Home
                </p>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-dark py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 gap-4 md:grid-cols-2">
           <h2 className="text-white font-bold font-brand text-5xl md:text-[5rem] uppercase">Our <br className="hidden md:block" />Location</h2>
           <div className="w-full">
            <h3 className="text-brown font-bold text-3xl md:text-5xl mb-3 uppercase">99 King Street</h3>
            <p className="text-white text-lg">Newport</p>
            <p className="text-white text-lg">RI 02840</p>
            <p className="text-white text-lg">United States of America</p>
            <p className="text-white mt-8 text-lg">Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.</p>
           </div>
        </div>
      </div>
    </main>
  );
};
export default Location;
