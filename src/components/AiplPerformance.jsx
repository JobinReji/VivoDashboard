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

const BrandSelect = ({ id, label, value, onChange, options }) => (
  <div className="flex flex-col gap-1 items-center w-[15%]">
    <label className="text-white" htmlFor={id}>
      {label}
    </label>
    <Select
      id={id}
      value={value}
      onChange={onChange}
      options={options}
      isClearable
      className="w-full"
      styles={customStyles}
      classNamePrefix="select"
      placeholder="--Select--"
    />
  </div>
);

const LogoBox = ({ brand }) => (
  <div className="w-full bg-white rounded-2xl flex justify-center items-center">
    {brand ? (
      <img
        src={brandLogos[brand.value.toLowerCase()]}
        alt={brand.value.toLowerCase()}
        className="h-12 object-contain"
      />
    ) : (
      <span className="text-gray-500">Select any Brand</span>
    )}
  </div>
);

const FunnelCard = ({
  top,
  mid1,
  mid2,
  bottom,
  extra1,
  extra2,
  extra3,
  diffs,
}) => (
  <div className="w-[18%] gap-2 text-center flex flex-col items-center justify-center text-sm relative">
    <div className="py-0.5 px-2 my-0.5 -ml-[4%] bg-blue-200 rounded-md">
      {extra1}
    </div>
    <div className="relative w-full flex justify-center items-center text-white">
      <img src={Funnel} alt="Funnel" className="w-[90%] h-auto" />
      <div className="absolute top-[16%] -ml-[4%]">{top}</div>
      <div className="absolute top-[44%] -ml-[4%]">{mid1}</div>
      <div className="absolute top-[68%] -ml-[4%]">{mid2}</div>
      <div className="absolute top-[88%] -ml-[4%]">{bottom}</div>
    </div>
    <div className="py-0.5 px-2 my-0.5 -ml-[4%] bg-blue-200 rounded-md">
      {extra2}
    </div>
    <div className="py-0.5 px-2 my-0.5 -ml-[4%] bg-blue-200 rounded-md">
      {extra3}
    </div>
    {/* Difference Values */}
    {diffs.map((d, i) => (
      <div key={i} className={`absolute ${d.position}`}>
        {d.value}
      </div>
    ))}
  </div>
);

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

  const funnelData = [
    {
      top: "59%",
      mid1: "23%",
      mid2: "4%",
      bottom: "1%",
      extra1: "1%",
      extra2: "1%",
      extra3: "30%",
      diffs: [
        { position: "-right-[10%] top-[33%]", value: "39%" },
        { position: "-right-[5%] top-[50%]", value: "16%" },
        { position: "right-0 top-[65%]", value: "26%" },
      ],
    },
    {
      top: "98%",
      mid1: "68%",
      mid2: "38%",
      bottom: "18%",
      extra1: "13%",
      extra2: "7%",
      extra3: "37%",
      diffs: [
        { position: "-right-[10%] top-[33%]", value: "69%" },
        { position: "-right-[5%] top-[50%]", value: "56%" },
        { position: "right-0 top-[65%]", value: "46%" },
      ],
    },
    {
      top: "99%",
      mid1: "68%",
      mid2: "37%",
      bottom: "13%",
      extra1: "14%",
      extra2: "14%",
      extra3: "18%",
      diffs: [
        { position: "-right-[10%] top-[33%]", value: "68%" },
        { position: "-right-[5%] top-[50%]", value: "5%" },
        { position: "right-0 top-[65%]", value: "34%" },
      ],
    },
    {
      top: "96%",
      mid1: "53%",
      mid2: "20%",
      bottom: "8%",
      extra1: "11%",
      extra2: "14%",
      extra3: "19%",
      diffs: [
        { position: "-right-[10%] top-[33%]", value: "55%" },
        { position: "-right-[5%] top-[50%]", value: "38%" },
        { position: "right-0 top-[65%]", value: "39%" },
      ],
    },
  ];

  return (
    <div className="h-full w-full flex flex-col items-center px-4 relative">
      <div className="w-[96%] flex justify-end">
        <div className="flex justify-around w-[85%] z-10 text-sm">
          <BrandSelect
            id={"vivo_iqoo"}
            label="VIVO/ iQOO"
            value={vivoIqoo}
            onChange={setVivoIqoo}
            options={vivo_iqoo}
          />
          <BrandSelect
            id={"brand1"}
            label="Brand 1"
            value={brand1}
            onChange={setBrand1}
            options={getOptions(brand1?.value)}
          />
          <BrandSelect
            id={"brand2"}
            label="Brand 2"
            value={brand2}
            onChange={setBrand2}
            options={getOptions(brand2?.value)}
          />
          <BrandSelect
            id={"brand3"}
            label="Brand 3"
            value={brand3}
            onChange={setBrand3}
            options={getOptions(brand3?.value)}
          />
        </div>
      </div>
      <div className="bg-white rounded-t-3xl w-[96%] h-[85%] absolute bottom-0 flex items-end flex-col">
        <div className="w-[85%] my-4">
          <div className="flex justify-around w-full z-10 text-sm items-center">
            <LogoBox brand={vivoIqoo} />
            <LogoBox brand={brand1} />
            <LogoBox brand={brand2} />
            <LogoBox brand={brand3} />
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
            {funnelData.map((f, i) => (
              <FunnelCard key={i} {...f} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
