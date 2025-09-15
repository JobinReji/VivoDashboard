import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState({});

  const openFilter = () => setOpen(true);
  const closeFilter = () => setOpen(false);

  const applyFilters = (newFilters) => {
    setFilters(newFilters);
    setOpen(false);
  };

  return (
    <FilterContext.Provider
      value={{ open, openFilter, closeFilter, filters, applyFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}
