import Button from "../ui/Button";
import RouterLink from "../ui/RouterLink";

function AdminFooterCTA() {
  return (
    <RouterLink to="edit">
      <Button $variation="darkRed" $size="small">
        Edit this Location
      </Button>
    </RouterLink>
  );
}

export default AdminFooterCTA;
