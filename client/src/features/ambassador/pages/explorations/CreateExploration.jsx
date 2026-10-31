import Input from "../../../../shared/components/form/Input";
import Button from "../../../../shared/components/ui/Button";

import AppForm from "../../../../shared/components/form/AppForm";
import FormField from "../../../../shared/components/form/FormField";
import TextArea from "../../../../shared/components/form/TextArea";
import ImageUploader from "../../../../shared/components/ui/ImageUploader";
import { useState } from "react";
import LocationBuilder from "../../../../shared/components/form/LocationBuilder";
import CurrentLocations from "../../../../shared/components/form/CurrentLocations";

import Row from "../../../../shared/components/layout/Row";
import styled from "styled-components";
import CityDropdown from "../../../../shared/components/dropdown/CityDropdown";
import RouterLink from "../../../../shared/components/routing/RouterLink";
import { FaArrowLeft } from "react-icons/fa";
import ExplorationTagBuilder from "../../../../shared/components/form/ExplorationTagBuilder";
import Bold from "../../../../shared/components/typography/Bold";
import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import FeaturedFormToggle from "../../../../shared/components/form/FeaturedFormToggle";
import BadgeBuilder from "../../../../shared/components/form/BadgeBuilder";
import { useAuth } from "../../../auth/contexts/AuthContext";
import {
  createExploration,
  deleteExploration,
  updateExploration,
} from "../../../../services/explorations";
import SpinnerMini from "../../../../shared/components/ui/SpinnerMini";
import Modal from "../../../../shared/components/modal/Modal";
import Heading from "../../../../shared/components/typography/Heading";
import CreateExplorationCard from "../../../explorations/components/CreateExplorationCard";

function CreateExploration() {
  const { exploration } = useLoaderData() || "";
  return <CreateExplorationCard exploration={exploration} />;
}
export default CreateExploration;
