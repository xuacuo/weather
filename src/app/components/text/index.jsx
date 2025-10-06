export default function Text({imgSrc, bodyText, bodytext2, bodytext3}) {
    return (
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
       
            <div>
           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About
           </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6 uppercase tracking-wide">
                Hayao Miyazaki
               </h3>
               <p className="text-gray-700 leading-relaxed mb-4">{bodyText}</p>
               <p className="text-gray-700 leading-relaxed mb-4">{bodytext2}</p>
               <p className="text-gray-700 leading-relaxed mb-4">{bodytext3}</p>
            </div>
             <div className="flex justify-center">
               <img  className="rounded-2xl shadow-md object-cover"
               src={imgSrc}
               alt={bodyText}
               width={500}
               height={600}
               />
            </div>
        </div>
    );
}