import React from "react";

const FloatingPhotoCard = () => {
  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-[#131313] px-4">
      <div className="relative w-[300px] h-[400px] bg-[#232323] rounded-2xl overflow-hidden shadow-xl group transition-all duration-700">
        {/* Background circle animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#9bdc28] to-[#03a9f4] clip-circle-small group-hover:clip-circle-large transition-all duration-700 ease-in-out"></div>

        {/* Background text */}
        <h1 className="absolute top-[25%] left-[-15%] text-[8rem] font-extrabold italic text-white/5 select-none pointer-events-none">
          ABHI
        </h1>

        

        {/* Card content */}
        <div className="absolute bottom-0 w-full text-center py-6 transition-all duration-700 group-hover:pb-10">
          <h2 className="text-white text-xl font-bold mb-2 tracking-wide">
            Abhinav Saxena
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Web Developer | NCC Cadet | ML Enthusiast
          </p>

          <div className="opacity-0 group-hover:opacity-100 transition-all duration-700">
            <a
              href="#contact"
              className="inline-block bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-[#9bdc28] transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Tailwind custom clip-path */}
      <style>{`
        .clip-circle-small {
          clip-path: circle(120px at 80% 20%);
        }
        .clip-circle-large {
          clip-path: circle(300px at 80% -20%);
        }
      `}</style>
    </div>
  );
};

export default FloatingPhotoCard;
