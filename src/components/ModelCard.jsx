import Image from 'next/image';
import React from 'react';

const ModelCard = ({model}) => {
    return (
         <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white mx-auto">
      
      {/* Image */}
      <div className="h-48 w-full overflow-hidden flex items-center justify-center bg-gray-300 rounded-2xl">
        <Image
          src={model.image}
          alt={model.title}
                    width={100}
                    height={100}
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        
        {/* Title + Badge */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{model.title}</h2>
          {model.status === "popular" && (
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
              Popular
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {model.description}
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-green-600">
            ${model.price}
          </span>

          <button className="bg-black text-white px-4 py-1.5 rounded-lg hover:bg-gray-800 transition">
            Buy
          </button>
        </div>
      </div>
    </div>
    );
};

export default ModelCard;