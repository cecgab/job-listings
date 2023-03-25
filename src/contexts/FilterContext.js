import { createContext, useState } from "react";

export const FilterContext = createContext();

export default function JobFilterProvider({ children }) {
  const [filters, setFilters] = useState([]);

  const addFilter = (_filter) => {
    const existingFilter = filters.find(
      (_f) => _f.title == _filter.title && _f.cat == _filter.cat
    );

    if (typeof existingFilter === "undefined")
      setFilters([...filters, _filter]);
  };

  const removeFilter = (_filter) => {
    if (_filter) {
      setFilters(
        filters.filter((el) => {
          return el.title !== _filter.title || el.cat !== _filter.cat;
        })
      );
    }
  };

  const removeAllFilter = () => {
    setFilters([]);
  };

  return (
    <FilterContext.Provider
      value={{ filters, addFilter, removeFilter, removeAllFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
}
