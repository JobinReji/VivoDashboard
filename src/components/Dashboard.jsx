import bgImage from "../assets/Dash_back.jpg";
import Header from "./Header";
import ConsumerProfile from "./ConsumerProfile";
import { FilterProvider } from "./FilterContext";
import FilterDialog from "./FilterDialog";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import PriceRange from "./PriceRange";
import AiplPerformance from "./AiplPerformance";
import BrandImagery from "./BrandImagery";
import BrandSnapshot from "./BrandSnapshot";

export default function Dashboard() {
  const [pageIndex, setPageIndex] = useState(0);

  const pages = [
    {
      component: <ConsumerProfile />,
      title: "Consumer Profile",
      subtitle: "Understanding Audiences Through a Brand Lens",
      nValue: "27,188",
    },
    {
      component: <PriceRange />,
      title: "Profile by Price Range",
      subtitle: "Customer Snapshot Across Price Ranges",
    },
    {
      component: <AiplPerformance />,
      title: "AIPL Performance",
      subtitle: "Brand Funnel Comparision: VIVO vs. Key Brands",
      nValue: "27,188",
    },
    {
      component: <BrandImagery />,
      title: "Brand Imagery",
      subtitle: "How Consumers Perceive Competing Brands on Imagery Metrics",
      nValue: "27,188",
    },
    {
      component: <BrandSnapshot />,
      title: "Brand Snapshot",
      subtitle: "From Discovery to Loyalty - A Journey Through Consumer Data",
      nValue: "5,675",
    },
  ];

  const currPage = pages[pageIndex];

  const gotNext = () => {
    setPageIndex((prev) => (prev + 1) % pages.length);
  };

  const gotPrev = () => {
    setPageIndex((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <FilterProvider>
      <div
        className="h-screen w-screen bg-no-repeat bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Header
          title={currPage.title}
          subtitle={currPage.subtitle ? currPage.subtitle : ""}
          nValue={currPage.nValue ? `(n=${currPage.nValue})` : ""}
        />
        <div className="flex-1 overflow-auto">
          {currPage.component}
          <FilterDialog />
        </div>
        <div
          className="bg-gray-300 rounded-full p-[0.3%] fixed left-0 top-[50%] cursor-pointer z-20"
          title="Previous Page"
          onClick={gotPrev}
        >
          <FaAngleLeft className="text-xl" />
        </div>
        <div
          className="bg-gray-300 rounded-full p-[0.3%] fixed right-0 top-[50%] cursor-pointer z-20"
          title="Next Page"
          onClick={gotNext}
        >
          <FaAngleRight className="text-xl" />
        </div>
      </div>
    </FilterProvider>
  );
}
