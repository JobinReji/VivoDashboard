import man from "../assets/man.png";
import woman from "../assets/woman.png";
import map from "../assets/india-map.png";
import store from "../assets/e-commerce-shopping.png";
import cart from "../assets/Shop-Logo.png";
import { useState } from "react";
import {
  ConsumerProfileAge,
  ConsumerProfileBrands,
  ConsumerProfileOccupation,
  ConsumerProfilePriceRange,
} from "./Charts";
// import { useFilter } from "./FilterContext";

export default function ConsumerProfile() {
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
        <div className="absolute h-[80%] w-full bg-white rounded-t-3xl bottom-0"></div>
        <div className="flex gap-6 z-10 px-10 w-full">
          <DivBoxContainer title="Gender" individualClass="w-[30%] p-4">
            <div className="flex flex-col items-center w-1/2">
              <img src={man} alt="Man" className="w-[80%] mr-2" />
              <span className="text-sm">75%</span>
            </div>
            <div className="flex flex-col items-center w-1/2">
              <img src={woman} alt="Woman" className="w-[80%] mr-2" />
              <span className="text-sm">25% </span>
            </div>
          </DivBoxContainer>
          <DivBoxContainer
            title="Age"
            individualClass="w-[40%] pt-4 flex flex-col"
          >
            <ConsumerProfileAge />
          </DivBoxContainer>
          <DivBoxContainer
            title="Top 5 Previous Brands"
            individualClass="w-[40%] pt-4 relative"
          >
            <ConsumerProfileBrands />
            <div className="absolute bottom-6 right-10 text-center text-sm">
              <p>First Time Buyers</p>
              <p>21%</p>
            </div>
          </DivBoxContainer>
        </div>
        <div className="flex justify-around gap-6 z-10 px-10 w-full h-[44vh]">
          <div className="bg-white rounded-2xl shadow-md text-black w-[60%] p-4 flex h-full">
            <div className="text-center h-full w-1/3 flex flex-col items-center justify-center flex-1">
              <h2 className="text-md text-black font-semibold">
                Zone & Town class
              </h2>
              <div className="flex justify-center items-center h-full relative">
                <img
                  src={map}
                  alt="India Map"
                  className="w-full h-full object-contain"
                />
                <div
                  className="absolute text-sm font-semibold"
                  style={{
                    top: "8%",
                    left: "35%",
                    transform: "translate(-50%, 0%)",
                  }}
                >
                  <p>27%</p>
                </div>
                <div
                  className="absolute text-sm font-semibold"
                  style={{
                    bottom: "6%",
                    left: "35%",
                    transform: "translate(-50%, 0%)",
                  }}
                >
                  <p>28%</p>
                </div>
                <div
                  className="absolute text-sm font-semibold"
                  style={{
                    top: "40%",
                    left: "10%",
                    transform: "translate(-50%, 0%)",
                  }}
                >
                  <p>23%</p>
                </div>
                <div
                  className="absolute text-sm font-semibold"
                  style={{
                    top: "40%",
                    right: "15%",
                    transform: "translate(-50%, 0%)",
                  }}
                >
                  <p>22%</p>
                </div>
                <div
                  className="absolute text-[9px] xl:text-sm flex flex-col text-center gap-2"
                  style={{
                    top: "50%",
                    left: "38%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div>
                      <div>Metro</div>
                      <div>38%</div>
                    </div>
                    <div>
                      <div>Tier 1</div>
                      <div>46%</div>
                    </div>
                  </div>
                  <div className="flex items-cente gap-2">
                    <div>
                      <div>Tier 2</div>
                      <div>12%</div>
                    </div>
                    <div>
                      <div>Tier 3</div>
                      <div>4%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center h-full w-2/3 flex flex-col items-center justify-center flex-1">
              <h2 className="text-md text-black font-semibold">Occupation</h2>
              <ConsumerProfileOccupation />
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md text-black w-[40%] p-4 flex flex-col">
            <div className="flex flex-col text-center h-[35%]">
              <h2 className="text-md text-black font-semibold">Channel</h2>
              <div className="flex justify-around my-1">
                <div className="flex items-center gap-2">
                  <div>
                    <img src={cart} alt="Cart Image" className="w-[3rem]" />
                  </div>
                  <div className="text-sm">
                    <div>Online</div>
                    <div>38%</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <img src={store} alt="Store Image" className="w-[3rem]" />
                  </div>
                  <div className="text-sm">
                    <div>Offline</div>
                    <div>62%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center items-center flex-1 h-[65%]">
              <h2 className="text-md text-black font-semibold">Price Range</h2>
              <div className="w-[60%] h-[90%]">
                <ConsumerProfilePriceRange />
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
        <h2 className="text-md font-semibold mb-4 text-center">{title}</h2>
      )}
      <div className={`space-y-4 flex ${contentClass}`}>{children}</div>
    </div>
  );
}
