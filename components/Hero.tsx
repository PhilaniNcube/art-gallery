import Image from "next/future/image";
import { MdArrowForwardIos } from "react-icons/md";

const Hero = () => {
  return (
    <header className="grid grid-cols-3 relative">
      <div className="bg-dark"></div>
      <Image
        src="/images/desktop/image-hero@2x.jpg"
        alt="Hero"
        width={1080}
        height={1600}
        className="w-full max-h-[95vh] object-cover"
      />
      <div className="bg-white"></div>
      <div className="absolute inset-0">
        <div className="max-w-6xl mx-auto px-4 flex h-full justify-between py-48">
          <h1 className="text-4xl md:text-7xl lg:text-[6rem]  mix-blend-difference font-extrabold uppercase text-white">
            Modern <br /> Art Gallery
          </h1>

          <div className="flex flex-col">
            <p className="text-grey text-lg max-w-[35ch] leading-7">
              The arts in the collection of the Modern Art Gallery all started
              from a spark of inspiration. Will these pieces inspire you? Visit
              us and find out.
            </p>

            <span className="flex h-10 items-center text-white w-fit  mt-12">
              <p className="bg-dark tracking-wide text-white py-4 px-12 font-bold font-brand uppercase">
                Our Location
              </p>
              <span className="bg-brown px-4 py-4 flex items-center justify-center">
                <svg width="10" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="#FFF" fill="none" d="m1 0 8 12-8 12" />
                </svg>
              </span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Hero;
