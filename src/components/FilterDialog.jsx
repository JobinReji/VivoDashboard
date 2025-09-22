import { useState, useEffect } from "react";
import { useFilter } from "./FilterContext";
import Select from "react-select";

export default function FilterDialog() {
  const { open, closeFilter, applyFilters, filters } = useFilter();

  const defaultFilters = {
    year: [],
    quarter: [],
    month: [],
    channel: [],
    currentRange: [],
    previousRange: [],
    age: [],
    gender: [],
    occupation: [],
    tier: [],
    zone: [],
    city: [],
  };

  const [localFilters, setLocalFilters] = useState(defaultFilters);

  // reset to defaults when dialog opens
  useEffect(() => {
    if (open) {
      setLocalFilters(filters || defaultFilters);
    }
  }, [open, filters]);

  const handleChange = (field, selectedOptions) => {
    const values = selectedOptions
      ? selectedOptions.map((opt) => opt.value)
      : [];
    setLocalFilters((prev) => ({ ...prev, [field]: values }));
  };

  const handleApply = () => {
    applyFilters(localFilters);
    closeFilter();
  };

  const handleReset = () => {
    setLocalFilters(defaultFilters);
    applyFilters(defaultFilters);
  };

  if (!open) return null;

  const customStyles = {
    control: (base) => ({
      ...base,
      minHeight: "36px",
      fontSize: "12px",
    }),
    menu: (base) => ({
      ...base,
      fontSize: "12px",
    }),
  };

  const filterOptions = {
    year: [
      { value: "2021", label: "2021" },
      { value: "2022", label: "2022" },
      { value: "2023", label: "2023" },
      { value: "2024", label: "2024" },
    ],
    quarter: [
      { value: "Q1", label: "Q1" },
      { value: "Q2", label: "Q2" },
      { value: "Q3", label: "Q3" },
      { value: "Q4", label: "Q4" },
    ],
    month: [
      { value: "Jan", label: "January" },
      { value: "Feb", label: "February" },
      { value: "Mar", label: "March" },
      { value: "Apr", label: "April" },
      { value: "May", label: "May" },
      { value: "Jun", label: "June" },
      { value: "Jul", label: "July" },
      { value: "Aug", label: "August" },
      { value: "Sep", label: "September" },
      { value: "Oct", label: "October" },
      { value: "Nov", label: "November" },
      { value: "Dec", label: "December" },
    ],
    channel: [
      { value: "Online", label: "Online" },
      { value: "Offline", label: "Offline" },
      { value: "Retail", label: "Retail" },
      { value: "Wholesale", label: "Wholesale" },
    ],
    currentRange: [
      { value: "Low", label: "Low" },
      { value: "Medium", label: "Medium" },
      { value: "High", label: "High" },
    ],
    previousRange: [
      { value: "Low", label: "Low" },
      { value: "Medium", label: "Medium" },
      { value: "High", label: "High" },
    ],
    age: [
      { value: "18-24", label: "18-24" },
      { value: "25-34", label: "25-34" },
      { value: "35-44", label: "35-44" },
      { value: "45-54", label: "45-54" },
      { value: "55+", label: "55+" },
    ],
    gender: [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
      { value: "Other", label: "Other" },
    ],
    occupation: [
      { value: "Student", label: "Student" },
      { value: "Professional", label: "Professional" },
      { value: "Business", label: "Business" },
      { value: "Retired", label: "Retired" },
    ],
    tier: [
      { value: "Tier 1", label: "Tier 1" },
      { value: "Tier 2", label: "Tier 2" },
      { value: "Tier 3", label: "Tier 3" },
    ],
    zone: [
      { value: "North", label: "North" },
      { value: "South", label: "South" },
      { value: "East", label: "East" },
      { value: "West", label: "West" },
    ],
    city: [
      { value: "Mumbai", label: "Mumbai" },
      { value: "Delhi", label: "Delhi" },
      { value: "Bangalore", label: "Bangalore" },
      { value: "Chennai", label: "Chennai" },
      { value: "Kolkata", label: "Kolkata" },
    ],
  };

  return (
    <div className="fixed inset-0 bg-[#00000079] backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white w-[600px] rounded-xl shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-xl font-bold cursor-pointer"
          onClick={closeFilter}
        >
          ×
        </button>

        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto">
          {Object.keys(localFilters).map((key) => (
            <div key={key} className="flex flex-col">
              <label className="text-sm font-medium mb-1 capitalize">
                {key}
              </label>
              <Select
                value={filterOptions[key].filter((opt) =>
                  localFilters[key].includes(opt.value)
                )}
                onChange={(opts) => handleChange(key, opts)}
                options={filterOptions[key]}
                styles={customStyles}
                isMulti
                closeMenuOnSelect={false}
              />
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-6">
          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-md bg-red-500 text-white text-sm cursor-pointer"
          >
            Reset
          </button>

          <div className="flex gap-3">
            {/* <button
              onClick={closeFilter}
              className="px-4 py-2 rounded-md bg-gray-200 text-sm"
            >
              Cancel
            </button> */}
            <button
              onClick={handleApply}
              className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm cursor-pointer"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
