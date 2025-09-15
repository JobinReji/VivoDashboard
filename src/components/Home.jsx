import bgImage from "../assets/bg_image.jpg";
import page1Image from "../assets/Page1.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-screen bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className="relative flex flex-col items-end justify-end rounded-2xl shadow-2xl bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url(${page1Image})`,
          height: "65vh",
          width: "55vw",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-end justify-end w-full h-full p-10">
          <h1 className="text-white text-xs font-semibold font-raleway mb-10 mr-[15%] z-20">
            Q2-2025
          </h1>
          <button
            onClick={() => navigate("/menu")}
            title="Go to next page"
            className="text-white text-xl font-bold transition-transform transform hover:scale-125 hover:text-blue-300"
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
}
