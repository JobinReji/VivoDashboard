import { useState } from "react";

const brandLogos = {
  vivo: "https://neuralnetdatascience.com/Internal/images/Vivo/logo/VIVO.png",
  samsung:
    "https://neuralnetdatascience.com/Internal/images/Vivo/logo/SAMSUNG.png",
  oppo: "https://neuralnetdatascience.com/Internal/images/Vivo/logo/OPPO.png",
  xiaomi:
    "https://neuralnetdatascience.com/Internal/images/Vivo/logo/XIAOMI.png",
  apple:
    "https://cdn.freelogovectors.net/wp-content/uploads/2023/03/apple_logo-freelogovectors.net_-1.png",
  oneplus:
    "https://neuralnetdatascience.com/Internal/images/Vivo/logo/ONEPLUS.png",
  realme:
    "https://neuralnetdatascience.com/Internal/images/Vivo/logo/REALME.png",
  iqoo: "https://neuralnetdatascience.com/Internal/images/Vivo/logo/IQOO.png",
  motorola:
    "https://www.pngplay.com/wp-content/uploads/9/Motorola-Logo-PNG-Images-HD.png",
  nothing:
    "https://neuralnetdatascience.com/Internal/images/Vivo/logo/NOTHING.png",
  poco: "https://neuralnetdatascience.com/Internal/images/Vivo/logo/POCO.png",
};

export default function BrandImagery() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  return (
    <div className="h-full w-full flex justify-center items-center p-4">
      <div className="bg-white rounded-3xl w-[96%] h-full flex flex-col">
        <div className="w-full">
          <div className="w-full space-y-2 text-sm flex flex-wrap items-center justify-around gap-2 p-2">
            {Object.entries(brandLogos).map(([brand, logo]) => (
              <div
                key={brand}
                className={`w-[8%] px-1 text-center cursor-pointer border border-gray-500 ${
                  selectedBrand === brand
                    ? "bg-gray-400 text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setSelectedBrand(brand)}
              >
                <img
                  src={logo}
                  alt={brand}
                  className="h-10 mx-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex-1"></div>
      </div>
    </div>
  );
}
