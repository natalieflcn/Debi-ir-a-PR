import Row from "../../../shared/components/layout/Row";
import Button from "../../../shared/components/ui/Button";
import Input from "../../../shared/components/form/Input";
import FilterDropdown from "../../../shared/components/dropdown/FilterDropdown";
import SortDropdown from "../../../shared/components/dropdown/SortDropdown";
import { IoMdGrid } from "react-icons/io";
import useClickOutside from "../../../shared/hooks/useClickOutside";

const ExplorationsFiltersCategories = [
  { id: "city", name: "City" },
  { id: "restaurants", name: "Restaurants" },
  { id: "landmarks", name: "Landmarks" },
  { id: "landscapes", name: "Landscapes" },

  { id: "other", name: "Other" },
  { id: "all", name: "All" },
];

const explorationsSort = [
  { id: "name", name: "Name" },
  { id: "numStops", name: "Number of Stops" },
];

function ExplorationsFilters({
  sortCategories = explorationsSort,
  filterCategories = ExplorationsFiltersCategories,
  onSort,
  onFilter,
  filterInitState,
  sortInitState,
}) {
  // const dropdownRef = useClickOutside();

  return (
    <Row $direction="horizontal" $gap="var(--gap-lg)">
      <SortDropdown
        categories={sortCategories}
        onSort={onSort}
        initState={sortInitState || "Name"}
      />

      <FilterDropdown
        categories={filterCategories}
        onFilter={onFilter}
        initState={filterInitState || "Featured"}
      />
    </Row>
  );
}

export default ExplorationsFilters;
