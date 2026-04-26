import Image from 'next/image';


const ModelCard = ({model}) => {
    return (
             <div className="w-10/12 mx-auto bg-[#73f7f7] rounded-[28px] p-6 shadow-sm">

      <div className="flex gap-10 items-center">

        {/* Left */}
        <div className="w-[300px] h-[300px] rounded-[24px] bg-gradient-to-br from-[#4ade80] to-[#22c55e] flex items-center justify-center">
            <Image
          src={model.image}
          alt={model.title}
                    width={100}
                    height={100}
        />
      
        </div>

        {/* Right */}
        <div className="flex-1">

          {model.status === "popular" && (
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-green-200 text-green-600 mb-5">
              🔥 <span className="font-medium">POPULAR</span>
            </div>
          )}

          <h2 className="text-[42px] font-semibold text-gray-900 mb-4">
            {model.title}
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-[480px]">
            {model.description}
          </p>
        </div>
      </div>

      <div className="h-[1px] bg-gray-200 my-10"></div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-[42px] font-bold text-green-600">
            ${model.price}
          </p>
          <p className="text-gray-500 mt-1">
            One-time payment
          </p>
        </div>

        <button className="flex items-center gap-3 px-8 py-4 rounded-[14px] bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white text-lg shadow-md">
          🛒 View Details
        </button>
      </div>
    </div>
    );
};

export default ModelCard;