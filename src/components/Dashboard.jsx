import bgImage from "../assets/Dash_back.jpg";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import ConsumerProfile from "./ConsumerProfile";
import { FilterProvider } from "./FilterContext";
import FilterDialog from "./FilterDialog";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <FilterProvider>
      <div
        className="h-screen w-screen bg-no-repeat bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Header
          title="Consumer Profile"
          subtitle="Understanding Audiences Through a Brand Lens"
          nValue="27,188"
        />
        <div className="flex-1 overflow-auto">
          <ConsumerProfile />
          <FilterDialog />
        </div>
      </div>
    </FilterProvider>
  );
}
