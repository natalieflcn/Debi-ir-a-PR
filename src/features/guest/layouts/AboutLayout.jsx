import PanelGroup from "../../../ui/elements/PanelGroup";
import Row from "../../../ui/elements/Row";
import Sidebar from "../../../ui/elements/Sidebar";

function AboutLayout() {
  return (
    <>
      <Row direction="horizontal">
        <PanelGroup />
        <Sidebar />
      </Row>
    </>
  );
}

export default AboutLayout;
