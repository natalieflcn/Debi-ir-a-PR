import Row from "../../../shared/components/layout/Row";
import Button from "../../../shared/components/ui/Button";
import Input from "../../../shared/components/form/Input";
import FilterDropdown from "../../../shared/components/dropdown/FilterDropdown";
import SortDropdown from "../../../shared/components/dropdown/SortDropdown";
import { IoMdGrid } from "react-icons/io";
import useClickOutside from "../../../shared/hooks/useClickOutside";
import FeaturedExplorationToggle from "./FeaturedExplorationToggle";
import styled from "styled-components";

const StyledRow = styled(Row)`
  @media (max-width: 700px) {
    flex-direction: column;
    button,
    div {
      width: 100%;
    }
  }
`;

const ExplorationsFiltersCategories = [
  {
    id: "arts-culture",
    name: "Arts & Culture",
    tags: ["culture", "history", "artist", "heritage", "art", "architecture"],
  },
  {
    id: "entertainment",
    name: "Entertainment",
    tags: ["nightlife", "shopping", "entertainment", "adventure", "billiards"],
  },
  { id: "food", name: "Food", tags: ["food"] },
  {
    id: "nature",
    name: "Nature",
    tags: [
      "nature",
      "outdoors",
      "sightseeing",
      "hiking",
      "trail",
      "photography",
    ],
  },
  {
    id: "other",
    name: "Other",
    tags: ["family-friendly", "local-favorites", "romantic", "relaxation"],
  },
];

const explorationFilters = [
  ...ExplorationsFiltersCategories,
  { id: "all", name: "All" },
];

const explorationsSort = [
  { id: "name", name: "Name" },
  { id: "numStops", name: "Number of Stops" },
];

function ExplorationsFilters({
  sortCategories = explorationsSort,
  filterCategories = explorationFilters,
  onSort,
  onFilter,
  filterInitState,
  sortInitState,
  showFeatured,
  onShowFeatured,
}) {
  // const dropdownRef = useClickOutside();

  return (
    <StyledRow $direction="horizontal" $gap="var(--gap-lg)">
      <FeaturedExplorationToggle
        showFeatured={showFeatured}
        onShowFeatured={onShowFeatured}
      />

      <SortDropdown
        categories={sortCategories}
        onSort={onSort}
        initState={sortInitState || "Name"}
      />

      <FilterDropdown
        categories={filterCategories}
        onFilter={onFilter}
        initState={filterInitState || "All"}
      />
    </StyledRow>
  );
}

export default ExplorationsFilters;
