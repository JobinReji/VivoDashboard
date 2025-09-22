import { useState, useEffect } from "react";
import { useFilter } from "./FilterContext";

export default function FilterDialog() {
  const { open, closeFilter, applyFilters, filters } = useFilter();

  const defaultFilters = {
    year: "All",
    quarter: "All",
    month: "All",
    channel: "All",
    currentRange: "All",
    previousRange: "All",
    age: "All",
    gender: "All",
    occupation: "All",
    tier: "All",
    zone: "All",
    city: "All",
  };

  const [localFilters, setLocalFilters] = useState(defaultFilters);

  // reset to defaults when dialog opens
  useEffect(() => {
    if (open) setLocalFilters(filters || defaultFilters);
  }, [open, filters]);

  const handleChange = (field, value) => {
    setLocalFilters((prev) => ({ ...prev, [field]: value }));
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
              <select
                value={localFilters[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                className="border rounded-md p-2 text-sm"
              >
                <option value="All">All</option>
                <option value="Option1">Option 1</option>
                <option value="Option2">Option 2</option>
              </select>
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
