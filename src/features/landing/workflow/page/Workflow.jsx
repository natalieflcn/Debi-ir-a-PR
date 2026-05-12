import Row from "../../../../shared/components/layout/Row";
import workflowData from "../data/workflowData";
import WorkFlowCard from "../components/WorkflowCard";

function Workflow() {
  return (
    <Row $gap="var(--gap-xl)">
      {workflowData.map((section, index) => (
        <WorkFlowCard section={section} index={index} />
      ))}
    </Row>
  );
}

export default Workflow;
