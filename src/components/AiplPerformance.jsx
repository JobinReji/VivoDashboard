import Funnel from "../assets/Funnel.png";
import tom from "../assets/icon/tom.png";
import aware from "../assets/icon/aware.png";
import intent from "../assets/icon/intent.png";
import interest from "../assets/icon/interest.png";
import preference from "../assets/icon/preference.png";
import purchase from "../assets/icon/purchase.png";
import loyalty from "../assets/icon/loyalty.png";
import Select from "react-select";
import { useState } from "react";

const vivo_iqoo = [
  { value: "vivo", label: "VIVO" },
  { value: "iqoo", label: "IQOO" },
];

const brands = [
  { value: "samsung", label: "SAMSUNG" },
  { value: "apple", label: "Apple" },
  { value: "oneplus", label: "OnePlus" },
  { value: "realme", label: "Realme" },
  { value: "motorola", label: "Motorola" },
  { value: "oppo", label: "Oppo" },
  { value: "xiaomi", label: "Xiaomi" },
  { value: "nothing", label: "Nothing" },
  { value: "poco", label: "Poco" },
];

const brandLogos = {
  apple:
    "https://cdn.freelogovectors.net/wp-content/uploads/2023/03/apple_logo-freelogovectors.net_-1.png",
  iqoo: "https://neuralnetdatascience.com/Internal/images/Vivo/logo/IQOO.png",
  motorola:
    "https://www.pngplay.com/wp-content/uploads/9/Motorola-Logo-PNG-Images-HD.png",
  nothing:
    "https://neuralnetdatascience.com/Internal/images/Vivo/logo/NOTHING.png",
  oneplus:
    "https://neuralnetdatascience.com/Internal/images/Vivo/logo/ONEPLUS.png",
  oppo: "https://neuralnetdatascience.com/Internal/images/Vivo/logo/OPPO.png",
  poco: "https://neuralnetdatascience.com/Internal/images/Vivo/logo/POCO.png",
  realme:
    "https://neuralnetdatascience.com/Internal/images/Vivo/logo/REALME.png",
  samsung:
    "https://neuralnetdatascience.com/Internal/images/Vivo/logo/SAMSUNG.png",
  vivo: "https://neuralnetdatascience.com/Internal/images/Vivo/logo/VIVO.png",
  xiaomi:
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

const customStyles = {
  control: (base, state) => ({
    ...base,
    width: "100%",
    backgroundColor: "#fff",
    fontSize: "12px",
    borderRadius: "6px",
    boxShadow: state.isFocused ? "0 0 0 1px #1f3bb3" : null,
    "&:hover": {
      // borderColor: "#1f3bb3",
    },
  }),
  option: (base) => ({
    ...base,
    backgroundColor: "#fff",
    color: "#1f3bb3",
    fontSize: "12px",
    "&:hover": {
      backgroundColor: "#1f3bb3",
      color: "#fff",
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: "#1f3bb3",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#1f3bb3",
  }),
  clearIndicator: (base) => ({
    ...base,
    color: "#1f3bb3",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#1f3bb3",
  }),
};

export default function AiplPerformance() {
  const [brand1, setBrand1] = useState(brands[0]);
  const [brand2, setBrand2] = useState(brands[1]);
  const [brand3, setBrand3] = useState(brands[2]);
  const [vivoIqoo, setVivoIqoo] = useState(vivo_iqoo[0]);

  // Filter options for each dropdown
  const getOptions = (current) => {
    const selected = [brand1?.value, brand2?.value, brand3?.value].filter(
      (v) => v && v !== current
    );
    return brands.filter((b) => !selected.includes(b.value));
  };

  return (
    <div className="h-full w-full flex flex-col items-center px-4 relative">
      <div className="w-[96%] flex justify-end">
        <div className="flex justify-around w-[85%] z-10 text-sm">
          <div className="flex flex-col gap-1 items-center w-[15%]">
            <label className="text-white" htmlFor="vivo_iqoo">
              VIVO/ iQOO
            </label>
            <Select
              id="vivo_iqoo"
              value={vivoIqoo}
              onChange={setVivoIqoo}
              options={vivo_iqoo}
              isClearable
              className="w-full"
              styles={customStyles}
              classNamePrefix="select"
              placeholder="--Select--"
            />
          </div>
          <div className="flex flex-col gap-1 items-center w-[15%]">
            <label className="text-white" htmlFor="brand1">
              Brand 1
            </label>
            <Select
              id="brand1"
              value={brand1}
              onChange={setBrand1}
              options={getOptions(brand1?.value)}
              isClearable
              className="w-full"
              styles={customStyles}
              classNamePrefix="select"
              placeholder="--Select--"
            />
          </div>
          <div className="flex flex-col gap-1 items-center w-[15%]">
            <label className="text-white" htmlFor="brand2">
              Brand 2
            </label>
            <Select
              id="brand2"
              value={brand2}
              onChange={setBrand2}
              options={getOptions(brand2?.value)}
              isClearable
              className="w-full"
              styles={customStyles}
              classNamePrefix="select"
              placeholder="--Select--"
            />
          </div>
          <div className="flex flex-col gap-1 items-center w-[15%]">
            <label className="text-white" htmlFor="brand3">
              Brand 3
            </label>
            <Select
              id="brand3"
              value={brand3}
              onChange={setBrand3}
              options={getOptions(brand3?.value)}
              isClearable
              className="w-full"
              styles={customStyles}
              classNamePrefix="select"
              placeholder="--Select--"
            />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-t-3xl w-[96%] h-[85%] absolute bottom-0 flex items-end flex-col">
        <div className="w-[85%] my-4">
          <div className="flex justify-around w-full z-10 text-sm items-center">
            <div className="flex flex-col gap-1 items-center w-[15%]">
              <div className="w-full bg-white rounded-2xl flex justify-center items-center">
                {vivoIqoo ? (
                  <img
                    src={brandLogos[vivoIqoo.value.toLowerCase()]}
                    alt={vivoIqoo.value.toLowerCase()}
                    className="h-12 object-contain"
                  />
                ) : (
                  <span>Select any Brand</span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1 items-center w-[15%]">
              <div className="w-full bg-white rounded-2xl flex justify-center items-center">
                {brand1 ? (
                  <img
                    src={brandLogos[brand1.value.toLowerCase()]}
                    alt={brand1.value.toLowerCase()}
                    className="h-12 object-contain"
                  />
                ) : (
                  <span>Select any Brand</span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1 items-center w-[15%]">
              <div className="w-full bg-white rounded-2xl flex justify-center items-center">
                {brand2 ? (
                  <img
                    src={brandLogos[brand2.value.toLowerCase()]}
                    alt={brand2.value.toLowerCase()}
                    className="h-12 object-contain"
                  />
                ) : (
                  <span>Select any Brand</span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1 items-center w-[15%]">
              <div className="w-full bg-white rounded-2xl flex justify-center items-center">
                {brand3 ? (
                  <img
                    src={brandLogos[brand3.value.toLowerCase()]}
                    alt={brand3.value.toLowerCase()}
                    className="h-12 object-contain"
                  />
                ) : (
                  <span>Select any Brand</span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-1">
          <div className="w-[15%] flex items-center justify-end flex-1">
            <div className="w-full xl:h-[68%] h-[80%] flex flex-col items-start justify-between xl:ml-14 ml-6">
              {/* Text and and image here */}
              {leftItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start gap-2 text-sm"
                >
                  <img src={item.icon} alt={item.label} className="w-6 h-6" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[85%] flex justify-around items-center">
            <div className="w-[18%] gap-2 text-center flex flex-col items-center justify-center text-sm relative">
              <div className="py-0.5 px-2 my-0.5 -ml-[4%] bg-blue-200 rounded-md">
                1%
              </div>
              <div className="relative w-full flex justify-center items-center text-white">
                <img src={Funnel} alt="Funnel" className="w-[90%] h-auto" />
                <div className="absolute top-[16%] -ml-[4%]">59%</div>
                <div className="absolute top-[44%] -ml-[4%]">23%</div>
                <div className="absolute top-[68%] -ml-[4%]">4%</div>
                <div className="absolute top-[88%] -ml-[4%]">1%</div>
              </div>
              <div className="py-0.5 px-2 my-0.5 -ml-[4%] bg-blue-200 rounded-md">
                1%
              </div>
              <div className="py-0.5 px-2 my-0.5 -ml-[4%] bg-blue-200 rounded-md">
                30%
              </div>
              {/* Difference Values */}
              <div className="absolute -right-[10%] top-[33%]">39%</div>
              <div className="absolute -right-[5%] top-[50%]">16%</div>
              <div className="absolute right-0 top-[65%]">26%</div>
            </div>
            <div className="w-[18%] gap-2 text-center flex flex-col items-center justify-center text-sm relative">
              <div className="py-0.5 px-2 my-0.5 -ml-[4%] bg-blue-200 rounded-md">
                13%
              </div>
              <div className="relative w-full flex justify-center items-center text-white">
                <img src={Funnel} alt="Funnel" className="w-[90%] h-auto" />
                <div className="absolute top-[16%] -ml-[4%]">98%</div>
                <div className="absolute top-[44%] -ml-[4%]">68%</div>
                <div className="absolute top-[68%] -ml-[4%]">38%</div>
                <div className="absolute top-[88%] -ml-[4%]">18%</div>
              </div>
              <div className="py-0.5 px-2 my-0.5 -ml-[4%] bg-blue-200 rounded-md">
                7%
              </div>
              <div className="py-0.5 px-2 my-0.5 -ml-[4%] bg-blue-200 rounded-md">
                37%
              </div>
              {/* Difference Values */}
              <div className="absolute -right-[10%] top-[33%]">69%</div>
              <div className="absolute -right-[5%] top-[50%]">56%</div>
              <div className="absolute right-0 top-[65%]">46%</div>
            </div>
            <div className="w-[18%] gap-2 text-center flex flex-col items-center justify-center text-sm relative">
              <div className="py-0.5 px-2 my-0.5 -ml-[4%] bg-blue-200 rounded-md">
                14%
              </div>
              <div className="relative w-full flex justify-center items-center text-white">
                <img src={Funnel} alt="Funnel" className="w-[90%] h-auto" />
                <div className="absolute top-[16%] -ml-[4%]">99%</div>
                <div className="absolute top-[44%] -ml-[4%]">68%</div>
                <div className="absolute top-[68%] -ml-[4%]">37%</div>
                <div className="absolute top-[88%] -ml-[4%]">13%</div>
              </div>
              <div className="py-0.5 px-2 my-0.5 -ml-[4%] bg-blue-200 rounded-md">
                14%
              </div>
              <div className="py-0.5 px-2 my-0.5 -ml-[4%] bg-blue-200 rounded-md">
                18%
              </div>
              {/* Difference Values */}
              <div className="absolute -right-[10%] top-[33%]">68%</div>
              <div className="absolute -right-[5%] top-[50%]">5%</div>
              <div className="absolute right-0 top-[65%]">34%</div>
            </div>
            <div className="w-[18%] gap-2 text-center flex flex-col items-center justify-center text-sm relative">
              <div className="py-0.5 px-2 my-0.5 -ml-[4%] bg-blue-200 rounded-md">
                11%
              </div>
              <div className="relative w-full flex justify-center items-center text-white">
                <img src={Funnel} alt="Funnel" className="w-[90%] h-auto" />
                <div className="absolute top-[16%] -ml-[4%]">96%</div>
                <div className="absolute top-[44%] -ml-[4%]">53%</div>
                <div className="absolute top-[68%] -ml-[4%]">20%</div>
                <div className="absolute top-[88%] -ml-[4%]">8%</div>
              </div>
              <div className="py-0.5 px-2 my-0.5 -ml-[4%] bg-blue-200 rounded-md">
                14%
              </div>
              <div className="py-0.5 px-2 my-0.5 -ml-[4%] bg-blue-200 rounded-md">
                19%
              </div>
              {/* Difference Values */}
              <div className="absolute -right-[10%] top-[33%]">55%</div>
              <div className="absolute -right-[5%] top-[50%]">38%</div>
              <div className="absolute right-0 top-[65%]">39%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
