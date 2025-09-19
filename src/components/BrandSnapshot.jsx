import store from "../assets/e-commerce-shopping.png";
import cart from "../assets/Shop-Logo.png";
import Funnel from "../assets/Funnel.png";
import tom from "../assets/icon/tom.png";
import aware from "../assets/icon/aware.png";
import intent from "../assets/icon/intent.png";
import interest from "../assets/icon/interest.png";
import preference from "../assets/icon/preference.png";
import purchase from "../assets/icon/purchase.png";
import loyalty from "../assets/icon/loyalty.png";
import { useState } from "react";
import {
  BrandSnapshotChannel,
  BrandSnapshotPriceRange,
  BrandSnapshotLoyalty,
  BrandSnapshotPerception,
} from "./Charts";

export default function BrandSnapshot() {
  //  const { filters } = useFilter();
  const allBrands = [
    "Vivo",
    "Samsung",
    "Oppo",
    "Xiaomi",
    "Apple",
    "OnePlus",
    "Realme",
    "IQOO",
    "Motorola",
    "Nothing",
    "Poco",
  ];
  const brandLogos = {
    Apple:
      "https://cdn.freelogovectors.net/wp-content/uploads/2023/03/apple_logo-freelogovectors.net_-1.png",
    IQOO: "https://neuralnetdatascience.com/Internal/images/Vivo/logo/IQOO.png",
    Motorola:
      "https://www.pngplay.com/wp-content/uploads/9/Motorola-Logo-PNG-Images-HD.png",
    Nothing:
      "https://neuralnetdatascience.com/Internal/images/Vivo/logo/NOTHING.png",
    OnePlus:
      "https://neuralnetdatascience.com/Internal/images/Vivo/logo/ONEPLUS.png",
    Oppo: "https://neuralnetdatascience.com/Internal/images/Vivo/logo/OPPO.png",
    Poco: "https://neuralnetdatascience.com/Internal/images/Vivo/logo/POCO.png",
    Realme:
      "https://neuralnetdatascience.com/Internal/images/Vivo/logo/REALME.png",
    Samsung:
      "https://neuralnetdatascience.com/Internal/images/Vivo/logo/SAMSUNG.png",
    Vivo: "https://neuralnetdatascience.com/Internal/images/Vivo/logo/VIVO.png",
    Xiaomi:
      "https://neuralnetdatascience.com/Internal/images/Vivo/logo/XIAOMI.png",
  };

  const leftItems = [
    { icon: tom, label: "TOM" },
    { icon: aware, label: "Total Awareness" },
    { icon: intent, label: "Intent" },
    { icon: interest, label: "Interest" },
    { icon: preference, label: "Preference" },
    { icon: purchase, label: "Purchase" },
    { icon: loyalty, label: "Loyalty" },
  ];

  const [selectedBrand, setSelectedBrand] = useState(null);
  return (
    <div className="w-full flex h-full">
      <div className="w-[15%] h-full flex flex-col items-center px-2">
        {/* Left Sidebar */}
        <div className="w-full bg-white rounded-2xl h-[22%] flex justify-center items-center">
          {selectedBrand ? (
            <img
              src={brandLogos[selectedBrand]}
              alt={selectedBrand}
              className="h-12 object-contain"
            />
          ) : (
            <span>Select any Brand</span>
          )}
        </div>
        <div className="w-full h-[78%] mt-4 overflow-y-auto space-y-2 text-sm flex flex-col items-center my-scrollbar">
          {allBrands.map((brand) => (
            <div
              key={brand}
              className={`w-[85%] p-1.5 text-center cursor-pointer rounded-2xl hover:text-blue-700 ${
                selectedBrand === brand
                  ? "bg-yellow-600 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setSelectedBrand(brand)}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
      <div className="w-[85%] h-full gap-6 relative flex flex-col items-center">
        {/* Right Side Content */}
        <div className="absolute h-[80%] w-full bg-white rounded-t-3xl bottom-0"></div>
        <div className="flex gap-6 z-10 px-10 w-full">
          <DivBoxContainer
            title="Channel"
            individualClass="w-[30%] p-4 items-center"
          >
            <div className="w-[20%] flex items-center">
              <img src={cart} alt="Cart Image" className="w-[3rem]" />
            </div>
            <div className="w-[60%]">
              <BrandSnapshotChannel />
            </div>
            <div className="w-[20%] flex items-center">
              <img src={store} alt="Cart Image" className="w-[2.5rem]" />
            </div>
          </DivBoxContainer>
          <DivBoxContainer
            title="Price Range"
            individualClass="w-[40%] pt-4 flex flex-col"
          >
            <BrandSnapshotPriceRange />
          </DivBoxContainer>
          <DivBoxContainer
            title="Consumer Loyality"
            individualClass="w-[40%] pt-4 relative"
          >
            <BrandSnapshotLoyalty />
          </DivBoxContainer>
        </div>
        <div className="flex justify-around gap-6 z-10 px-10 w-full h-[44vh]">
          <div className="bg-white rounded-2xl shadow-md text-black w-[50%] p-4 flex flex-col h-full">
            <div className="text-center w-full flex flex-col items-center justify-center">
              <h2 className="text-sm text-black font-semibold text-center mb-2">
                AIPL Performance
              </h2>
            </div>
            <div className="flex h-full w-full">
              <div className="text-center w-[30%] flex xl:items-center items-start justify-end flex-1">
                <div className="w-[60%] xl:h-[80%] h-full flex flex-col items-start justify-between">
                  {/* Text and and image here */}
                  {leftItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-start gap-2 text-sm"
                    >
                      <img
                        src={item.icon}
                        alt={item.label}
                        className="w-6 h-6"
                      />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center w-[70%] h-full flex flex-col items-center justify-center flex-1 text-xs relative">
                <div className="py-0.5 px-0.5 my-0.5 -ml-[4%] bg-purple-300">
                  23%
                </div>
                <div className="relative w-full flex justify-center items-center text-white">
                  <img src={Funnel} alt="Funnel" className="w-[55%] h-auto" />
                  <div className="absolute top-[16%] -ml-[4%]">100%</div>
                  <div className="absolute top-[44%] -ml-[4%]">75%</div>
                  <div className="absolute top-[68%] -ml-[4%]">47%</div>
                  <div className="absolute top-[88%] -ml-[4%]">19%</div>
                </div>
                <div className="py-0.5 px-0.5 my-0.5 -ml-[4%] bg-purple-300">
                  23%
                </div>
                <div className="py-0.5 px-0.5 my-0.5 -ml-[4%] bg-purple-300">
                  28%
                </div>
                {/* Difference Values */}
                <div className="absolute right-[11%] top-[30%]">75%</div>
                <div className="absolute right-[14%] top-[47%]">63%</div>
                <div className="absolute right-[18%] top-[64%]">40%</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md text-black w-[50%] p-4 flex flex-col">
            <div className="flex flex-col text-center items-center flex-1 ">
              <h2 className="text-sm text-black font-semibold">
                Brand Pereption
              </h2>
              <div className="h-full w-full">
                <BrandSnapshotPerception />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivBoxContainer({
  title,
  individualClass,
  contentClass = "h-[20vh]",
  children,
}) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md text-black ${individualClass}`}
    >
      {title && (
        <h2 className="text-sm font-semibold mb-4 text-center">{title}</h2>
      )}
      <div className={`space-y-4 flex ${contentClass}`}>{children}</div>
    </div>
  );
}
