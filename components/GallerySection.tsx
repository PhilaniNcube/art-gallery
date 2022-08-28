import Image from "next/future/image";

const GallerySection = () => {
  return <section>
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="col-span-3 sm:col-span-2 md:col-span-2">
          <h2 className="uppercase text-5xl lg:text-[5rem] font-brand font-extrabold text-dark">
            Your day at <br /> the gallery
          </h2>
          <p className="text-grey text-md max-w-[35ch] mt-8">
            Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.
          </p>
        </div>
        <div className="col-span-3 sm:col-span-1 md:col-span-3">
          <Image src="/images/desktop/image-grid-1@2x.jpg" alt="gallery" className="w-full object-cover" width={1270} height={800}/>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 md:grid-cols-5 grid-rows-2 mt-6 gap-6">
        <Image src="/images/desktop/image-grid-2@2x.jpg" alt="Gallery" className="col-span-3 h-full md:col-span-3 md:row-span-2 object-cover" width={1270} height={1440} />
        <Image src="/images/desktop/image-grid-3@2x.jpg" alt="Gallery" className="col-span-3 md:col-span-2 h-full w-full object-cover row-span-1" width={890} height={626} />
        <div className="bg-dark flex flex-col p-8 col-span-3 md:col-start-4 md:col-span-2 md:row-start-2 h-full w-full">
          <h2 className="text-white font-brand font-extrabold text-4xl lg:text-7xl uppercase leading-9">Come &amp; be inspired</h2>
          <p className="text-white text-lg mt-8 tracking-widest leading-7">We're excited to welcome you to our gallery and see how our collections influence you.</p>
        </div>
      </div>
    </div>
  </section>;
};
export default GallerySection;
