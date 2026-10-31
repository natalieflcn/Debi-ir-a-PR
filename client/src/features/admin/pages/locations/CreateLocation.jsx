import styled from "styled-components";
import AppForm from "../../../../shared/components/form/AppForm";
import FormField from "../../../../shared/components/form/FormField";
import ImageUploader from "../../../../shared/components/ui/ImageUploader";
import Input from "../../../../shared/components/form/Input";
import TextArea from "../../../../shared/components/form/TextArea";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";

import CityDropdown from "../../../../shared/components/dropdown/CityDropdown";
import Button from "../../../../shared/components/ui/Button";
import RouterLink from "../../../../shared/components/routing/RouterLink";
import { FaArrowLeft } from "react-icons/fa";
import LocationTagBuilder from "../../../../shared/components/form/LocationTagBuilder";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Bold from "../../../../shared/components/typography/Bold";
import { useLoaderData } from "react-router-dom";
import { verifyPRZipcode } from "../../../../shared/utils/helpers";
import {
  deleteExplorationLocation,
  updateExploration,
  updateExplorationLocation,
} from "../../../../services/explorations";
import { useAuth } from "../../../auth/contexts/AuthContext";
import SpinnerMini from "../../../../shared/components/ui/SpinnerMini";
import Modal from "../../../../shared/components/modal/Modal";
import CreateLocationCard from "../../../locations/components/CreateLocationCard";

const StyledHeading = styled(Heading)`
  flex: 1 1 0;
`;

const StyledRow = styled(Row)`
  flex: 1 1 0;
`;

const StyledTextAreaRow = styled(Row)`
  flex: 1 1 0;
  height: 10rem;
`;

const Paragraph = styled.p`
  text-align: center;
`;

function CreateLocation() {
  const { exploration, location } = useLoaderData();

  return (
    <>
      <Row $gap="var(--gap-lg)">
        <RouterLink to={`/admin/explorations/${exploration.slug}`}>
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
