import styled from "styled-components";
import Card from "../../../../shared/components/layout/Card";

import ExplorationMiniCard from "../../../explorations/components/ExplorationMiniCard";
import ExplorationsFilters from "../../../explorations/components/ExplorationsFilters";

import Input from "../../../../shared/components/form/Input";
import Row from "../../../../shared/components/layout/Row";
import { useEffect, useState } from "react";
import Pagination from "../../../../shared/components/ui/Pagination";
import {
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import Bold from "../../../../shared/components/typography/Bold";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAllMyExplorationProgress,
  getExplorationProgress,
} from "../../../../services/explorationProgress";
import Spinner from "../../../../shared/components/ui/Spinner";
import { useAuth } from "../../../auth/contexts/AuthContext";

const StyledExplorations = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
`;

const ExplorationCards = styled.div`
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--gap-xl);
  justify-content: center; */

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
  gap: var(--gap-xl);
  width: 100%;
`;

const ExplorationFiltersRow = styled(Row)`
  @media (max-width: 980px) {
    flex-direction: column;

    input {
      width: 100%;
    }
  }
`;

const ExplorerExplorationCardButton = function (explorationSlug, progress) {
  let buttonId,
    buttonVariation,
    buttonName = "";

  switch (progress) {
    case "in_progress":
      buttonId = "continue";
      buttonVariation = "yellow";
      buttonName = "Continue Exploring";
      break;

    case "completed":
      buttonId = "completed";
      buttonVariation = "treeLeaf";
      buttonName = "Completed";
      break;

    case undefined:
    default:
      buttonId = "learn-more";
      buttonVariation = "primary";
      buttonName = "Learn More";
      break;
  }

  return [
    {
      id: buttonId,
      buttonVariation: buttonVariation,
      buttonName: buttonName,
      buttonLink: `/explorations/${explorationSlug}`,
    },
  ];
};

const ITEMS_PER_PAGE = 9;

function Explorations() {
  const { explorations, total } = useLoaderData();
  const { user } = useAuth();
  const { isPending, isError, data, error, isSuccess } = useQuery({
    queryKey: ["allExplorationProgress", user._id],
    queryFn: getAllMyExplorationProgress,
  });
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const userHistory = data?.data?.data ?? [];

  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  const showFeatured = searchParams.get("featured") === "true";

  function updateParams(updates) {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        for (const [key, value] of Object.entries(updates)) {
          if (value === null || value === "" || value === false)
            next.delete(key);
          else next.set(key, value);
        }
        if (!("page" in updates)) next.delete("page");
        return next;
      },
      { replace: true },
    );
  }

  // Debounced search; the guard stops it from resetting the page on mount
  const urlSearch = searchParams.get("search") ?? "";
  const [searchInput, setSearchInput] = useState(urlSearch);

  useEffect(() => {
    if (searchInput === urlSearch) return;
    const id = setTimeout(() => updateParams({ search: searchInput }), 300);
    return () => clearTimeout(id);
  }, [searchInput, urlSearch]);

  const handleSort = (value) =>
    updateParams({ sort: value === "createdAt" ? null : value });
  const handleFilter = (value) =>
    updateParams({ tag: value === "All" ? null : value });
  const handleFeatured = (checked) =>
    updateParams({ featured: checked ? "true" : null });
  return (
    <>
      <StyledExplorations>
        <ExplorationFiltersRow $direction="horizontal" $gap="var(--gap-lg)">
          <Input
            placeholder="Search for an exploration..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <ExplorationsFilters
            onSort={handleSort}
            onFilter={handleFilter}
            showFeatured={showFeatured}
            onShowFeatured={handleFeatured}
          />
        </ExplorationFiltersRow>

        {(isPending || isLoading) && <Spinner />}

        {isError && <span>Error: {error.message}</span>}

        {isSuccess && !isLoading && (
          <ExplorationCards>
            {explorations.map((exploration) => {
              const city =
                exploration.cities.length === 1
                  ? exploration.cities[0]
                  : "Multiple Cities";

              const progress = userHistory.find(
                (entry) => entry.exploration === exploration._id,
              )?.status;

              return (
                <ExplorationMiniCard
                  exploration={exploration}
                  city={city}
                  buttonDetails={ExplorerExplorationCardButton(
                    exploration.slug,
                    progress,
                  )}
                  key={exploration.id}
                />
              );
            })}
          </ExplorationCards>
        )}

        {explorations.length === 0 && (
          <Row $align="center">
            <Bold $color="var(--color-light-0)">
              There are no explorations to show.
            </Bold>
          </Row>
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => updateParams({ page })}
          $variation="primary"
        />
      </StyledExplorations>
    </>
  );
}

export default Explorations;
