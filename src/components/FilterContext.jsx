import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({});
  const [open, setOpen] = useState(false);

  const openFilter = () => setOpen(true);
  const closeFilter = () => setOpen(false);

  const applyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  // Generate a summary string for header
  const appliedSummary = Object.entries(filters)
    .filter(([_, values]) => values && values.length > 0)
    .map(([key, values], index, arr) => {
      const capitalized = key.charAt(0).toUpperCase() + key.slice(1);
      return (
        <span key={key} className="mr-2">
          <strong>{capitalized}:</strong> <i>{values.join(", ")}</i>
          {index < arr.length - 1 && " | "}
        </span>
      );
    });

  return (
    <FilterContext.Provider
      value={{
        filters,
        open,
        openFilter,
        closeFilter,
        applyFilters,
        appliedSummary,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
