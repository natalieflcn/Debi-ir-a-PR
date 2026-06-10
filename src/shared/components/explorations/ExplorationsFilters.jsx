import Row from "../layout/Row";
import Button from "../ui/Button";
import Input from "../form/Input";
import FilterDropdown from "../ui/FilterDropdown";
import SortDropdown from "../ui/SortDropdown";
import { IoMdGrid } from "react-icons/io";
import useClickOutside from "../../hooks/useClickOutside";

const ExplorationsFiltersCategories = [
  { id: "featured", name: "Featured" },
  { id: "city", name: "City" },
  { id: "restaurants", name: "Restaurants" },
  { id: "landmarks", name: "Landmarks" },
  { id: "landscapes", name: "Landscapes" },
  { id: "map", name: "Map" },
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
}) {
  // const dropdownRef = useClickOutside();

  return (
    <Row $direction="horizontal" $gap="var(--gap-lg)">
      <SortDropdown categories={sortCategories} />

      <FilterDropdown categories={filterCategories} />

      {/* {ExplorationsFilters.map((filter) => (
        <Button $size="small" $variation="primary" key={filter.id}>
          {filter.name}
        </Button>
      ))} */}
    </Row>
  );
}

export default ExplorationsFilters;
