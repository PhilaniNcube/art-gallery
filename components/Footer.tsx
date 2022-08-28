import {
  RiFacebookBoxFill,
  RiInstagramLine,
  RiTwitterFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-dark py-16">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <h2 className="text-3xl font-bold font-brand uppercase text-white leading-7">
          Modern <br /> Art Gallery
        </h2>
        <p className="text-lg text-white leading-7">
          The Modern Art Gallery is free to all visitors and open <br /> seven
          days a week from 8am to 9am. Find us at 99 <br />
          King Street, Newport, USA
        </p>
        <div className="flex space-x-3">
          <RiFacebookBoxFill className="text-white hover:text-brown cursor-pointer h-10 w-10" />
          <RiInstagramLine className="text-white hover:text-brown cursor-pointer h-10 w-10" />
          <RiTwitterFill className="text-white hover:text-brown cursor-pointer h-10 w-10" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
