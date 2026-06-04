import Row from "../../../../shared/components/layout/Row";
import Button from "../../../../shared/components/ui/Button";
import Input from "../../../../shared/components/ui/Input";
import FilterDropdown from "../../../../shared/components/ui/FilterDropdown";

const explorationsFilters = [
  { id: "featured", name: "Featured" },
  { id: "city", name: "City" },
  { id: "restaurants", name: "Restaurants" },
  { id: "landmarks", name: "Landmarks" },
  { id: "landscapes", name: "Landscapes" },
  { id: "map", name: "Map" },
  { id: "other", name: "Other" },
  { id: "all", name: "All" },
];

function ExplorationsFilters() {
  return (
    <Row $direction="horizontal" $gap="var(--gap-lg)">
      <Input placeholder="Search for an exploration..."></Input>
      <Button $size="small" $variation="secondary">
        Sort
      </Button>

      <Button $size="small" $variation="primary">
        Filter
      </Button>

      <FilterDropdown categories={explorationsFilters}></FilterDropdown>

      {/* {explorationsFilters.map((filter) => (
        <Button $size="small" $variation="primary" key={filter.id}>
          {filter.name}
        </Button>
      ))} */}
    </Row>
  );
}

export default ExplorationsFilters;
