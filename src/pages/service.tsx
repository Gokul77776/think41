import CardFlip from "@/components/mvpblocks/card-flip";



export function Service() {
  return (
    <section className="relative w-full overflow-hidden pt-5 bg-black text-white">
      <div className="absolute inset-0 z-0 h-full w-full rotate-180 items-center px-5 py-24 opacity-80 bg-[#0b0b16] [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

     
      <div className="relative z-10 px-6 py-12 text-center">
         <h1 className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-4xl  font-bold tracking-tight  sm:text-5xl md:text-6xl">
            Service
          </h1>
        <p className="text-lg text-gray-300 m-5">We offer modern, results-driven solutions in marketing and web development.</p>
       <div className="flex justify-around items-center">
         <CardFlip/>
           <div>
            <h3 className="text-2xl font-semibold mb-2">Digital Marketing</h3>
             <p className="text-sm text-white">
              Boost your brand's visibility with strategic SEO, social media, and content marketing services.
            </p>
           </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
            <p className="text-sm text-white">
              We build responsive, fast, and modern websites using the latest web technologies.
            </p>
            </div>
       </div>
      </div>
    </section>
  );
}
