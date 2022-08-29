import { useRouter } from "next/router";
import {
  RiFacebookBoxFill,
  RiInstagramLine,
  RiTwitterFill,
} from "react-icons/ri";

const Footer = () => {

const router = useRouter()

const color = router.asPath === '/'

console.log(color)



  return (
    <footer className={`bg-${color ? "dark" : "brown"} py-16`}>
      <div className="max-w-6xl mx-auto px-4 flex md:flex-row flex-col md:items-center justify-between">
        <h2
          className={`text-3xl font-bold font-brand uppercase md:leading-7 ${
            color ? "text-white" : "text-dark"
          }`}
        >
          Modern <br /> Art Gallery
        </h2>
        <p
          className={`md:text-lg py-12 text-sm md:leading-7 ${
            color ? "text-white" : "text-dark"
          }`}
        >
          The Modern Art Gallery is free to all visitors and open <br /> seven
          days a week from 8am to 9am. Find us at 99 <br />
          King Street, Newport, USA
        </p>
        <div className="flex space-x-3">
          <RiFacebookBoxFill
            className={` cursor-pointer h-10 w-10 ${
              color
                ? "text-white hover:text-white"
                : "text-dark hover:text-white"
            }`}
          />
          <RiInstagramLine
            className={` cursor-pointer h-10 w-10 ${
              color
                ? "text-white hover:text-white"
                : "text-dark hover:text-white"
            }`}
          />
          <RiTwitterFill
            className={` cursor-pointer h-10 w-10 ${
              color
                ? "text-white hover:text-white"
                : "text-dark hover:text-white"
            }`}
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
