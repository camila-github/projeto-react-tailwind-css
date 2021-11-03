import React from "react";

const sizeClasses = {
  height: "h-32",
  width: "w-32",
  borderBottomRightRadius: "rounded-br-full"
};

export default function DestinationCard({ destination }) {
  return (
    <div className="flex 
                    items-center 
                    rounded-lg 
                    bg-white 
                    shadow-lg 
                    overflow-hidden"
      >
        <img className={`${sizeClasses.height} 
                          ${sizeClasses.width} 
                          ${sizeClasses.borderBottomRightRadius} 
                          flex-shrink-0
                          shadow-2xl
                        `} 
              src={destination.imageUrl} 
              alt={destination.imageAlt} 
        />

        <div className="px-6 py-4">
          <h3 className="text-lg 
                        font-semibold 
                        text-gray-800"
            >{destination.city}
          </h3>

          <p className="text-gray-600">
            a partir de: R$ {destination.averagePrice}
          </p>
        
          <div className="mt-4">
            <a href="#" 
              className="text-brand-dark 
                        hover:text-brand 
                        font-semibold 
                        text-base"
              >Verifique outros {destination.propertyCount} destinos
            </a>
          </div>

        </div>

    </div>
  );
}
