"use client";

export default function Card({ imgSrc, title, description }) {
  return (
    <div
      className="group bg-white rounded-xl shadow-sm overflow-hidden z-10
                 flex flex-col h-full transition-transform duration-300
                 hover:scale-[1.02] hover:shadow-md"
    >
      {/* Image with subtle gradient at bottom */}
      <div className="relative">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-48 md:h-56 object-cover"
          width={600}
          height={320}
        />
        <div className="absolute inset-x-0 bottom-0 h-10 
                        bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Text block below */}
      <div className="p-5 flex flex-col flex-grow bg-white">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
