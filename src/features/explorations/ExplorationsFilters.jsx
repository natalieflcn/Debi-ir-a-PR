import Row from "../../shared/components/layout/Row";
import Button from "../../shared/components/ui/Button";

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
    <Row $direction="horizontal">
      {explorationsFilters.map((filter) => (
        <Button $size="small" $variation="primary" key={filter.id}>
          {filter.name}
        </Button>
      ))}
    </Row>
  );
}

export default ExplorationsFilters;
