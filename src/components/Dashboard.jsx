import bgImage from "../assets/Dash_back.jpg";
import Header from "./Header";
import ConsumerProfile from "./ConsumerProfile";
import { FilterProvider } from "./FilterContext";
import FilterDialog from "./FilterDialog";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import PriceRange from "./PriceRange";

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
          className="bg-gray-300 rounded-full fixed left-0 top-[50%] cursor-pointer"
          title="Previous Page"
          onClick={gotPrev}
        >
          <FaAngleLeft className="text-xl" />
        </div>
        <div
          className="bg-gray-300 rounded-full fixed right-0 top-[50%] cursor-pointer"
          title="Next Page"
          onClick={gotNext}
        >
          <FaAngleRight className="text-xl" />
        </div>
      </div>
    </FilterProvider>
  );
}
