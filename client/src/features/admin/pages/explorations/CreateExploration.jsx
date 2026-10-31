import { useLoaderData } from "react-router-dom";
import CreateExplorationCard from "../../../explorations/components/CreateExplorationCard";

function CreateExploration() {
  const { exploration } = useLoaderData() || "";

  return <CreateExplorationCard exploration={exploration} />;
}
export default CreateExploration;
