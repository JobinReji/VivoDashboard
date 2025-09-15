import funnel from "../assets/Filter.png";
import vivoLogo from "../assets/vivo.png";
import { useFilter } from "./FilterContext";

export default function Header({ title, subtitle, nValue }) {
  const { openFilter } = useFilter();

  return (
    <header className="text-white p-[.8%] w-full flex justify-between items-center">
      <div
        className="w-[10%] flex items-center cursor-pointer"
        onClick={openFilter}
      >
        <img src={funnel} alt="Funnel" className="w-8 h-8" />
        <span className="ml-2 text-xl">Filter</span>
      </div>
      <div className="flex-1 text-center">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-md">{subtitle}</p>
      </div>
      <div className="w-[10%] flex flex-col items-center">
        <img src={vivoLogo} alt="Vivo Logo" className="w-24 py-2" />
        <p className="text-sm">{nValue}</p>
      </div>
    </header>
  );
}
