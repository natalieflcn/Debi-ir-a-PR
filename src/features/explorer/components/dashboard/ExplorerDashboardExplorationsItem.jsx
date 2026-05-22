import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Heading from "../../../../shared/components/typography/Heading";

function ExplorerDashboardExplorationsItem() {
  return (
    <>
      <DashboardItem>
        <Heading as="h4" $color="var(--color-dark-100)">
          Current Explorations
        </Heading>
        <Heading as="h6">Name</Heading>
        <Heading as="h6">Description</Heading>
        <Heading as="h6">Progress</Heading>
      </DashboardItem>
    </>
  );
}

export default ExplorerDashboardExplorationsItem;
