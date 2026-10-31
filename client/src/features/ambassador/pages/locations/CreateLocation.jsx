import { useState } from "react";

import { useLoaderData } from "react-router-dom";

import CreateLocationCard from "../../../locations/components/CreateLocationCard";
import RouterLink from "../../../../shared/components/routing/RouterLink";
import Row from "../../../../shared/components/layout/Row";
import Button from "../../../../shared/components/ui/Button";
import { FaArrowLeft } from "react-icons/fa";

function CreateLocation() {
  const { exploration, location } = useLoaderData();

  return (
    <>
      <Row $gap="var(--gap-lg)">
        <RouterLink to={`/ambassador/explorations/${exploration.slug}`}>
          <Button $size="small" $variation="darkRed">
            <FaArrowLeft size={12} /> Back to{" "}
            {exploration?.name ?? "Exploration"}
          </Button>
        </RouterLink>

        <CreateLocationCard exploration={exploration} location={location} />
      </Row>
    </>
  );
}

export default CreateLocation;
