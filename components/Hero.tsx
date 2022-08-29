import Image from "next/future/image";
import Link from "next/link";
import { Fragment } from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Hero = () => {
  return (
    <Fragment>
      <header className="hidden md:grid grid-cols-2 md:grid-cols-3 relative">
        <div className="bg-dark"></div>
        <Image
          src="/images/desktop/image-hero@2x.jpg"
          alt="Hero"
          width={1080}
          height={1600}
          className="w-full max-h-[80vh] min-h-[70vh] object-cover"
        />
        <div className="bg-white"></div>
        <div className="absolute inset-0">
          <div className="max-w-6xl mx-auto px-4 flex md:flex-row pt-48 flex-col h-full md:justify-between">
            <h1 className="hidden md:flex text-left md:text-7xl lg:text-[6rem]  mix-blend-difference font-extrabold uppercase text-white">
              Modern <br /> Art Gallery
            </h1>

            <div className="flex flex-col">
              <p className="text-grey text-lg max-w-[35ch] leading-7">
                The arts in the collection of the Modern Art Gallery all started
                from a spark of inspiration. Will these pieces inspire you?
                Visit us and find out.
              </p>
              <Link href="/location">
                <span className="flex h-10 items-center text-white w-fit  mt-10">
                  <p className="bg-dark tracking-wide text-white py-4 px-12 font-bold font-brand uppercase">
                    Our Location
                  </p>
                  <span className="bg-brown px-4 py-4 flex items-center justify-center">
                    <svg
                      width="10"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path stroke="#FFF" fill="none" d="m1 0 8 12-8 12" />
                    </svg>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/***Tablet Header ***/}
      <header className="hidden sm:flex md:hidden relative">
        <Image
          src="/images/tablet/image-hero.jpg"
          alt="hero image"
          width={437}
          height={700}
          className="w-1/2 h-[70vh] object-cover"
        />
        <div className="w-1/2 bg-white h-full"></div>
        <div className="absolute justify-end px-4 flex items-center inset-0">
          <div className="w-3/5">
            <h1 className="text-left text-5xl text-dark font-extrabold uppercase">
              Modern <br /> Art Gallery
            </h1>
            <p className="text-grey text-lg max-w-[35ch] leading-7">
              The arts in the collection of the Modern Art Gallery all started
              from a spark of inspiration. Will these pieces inspire you? Visit
              us and find out.
            </p>{" "}
            <span className="flex h-10 items-center text-white w-fit  mt-10">
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
      </header>

      {/***Mobile Header ***/}
      <header className="flex flex-col sm:hidden">
        <Image
          src="/images/tablet/image-hero@2x.jpg"
          alt="hero image"
          width={437}
          height={700}
          className="w-full h-[45vh] object-cover"
        />
        <div className="w-full py-6 px-4">
          <h1 className="text-left text-5xl text-dark font-extrabold uppercase">
            Modern <br /> Art Gallery
          </h1>
          <p className="text-grey text-lg max-w-[35ch] leading-7">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>{" "}
          <span className="flex h-10 items-center text-white w-fit  mt-10">
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
      </header>
    </Fragment>
  );
};
export default Hero;
