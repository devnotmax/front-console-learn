import AdminReviews from "./AdminReviews";
import Sells from "./Sells";
import Stadistics from "./Stadistics";
import PurchaseStatistics from "./Chart";

const AdminPanelContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-span-1">
        <AdminReviews />
      </div>
      <div className="col-span-1">
        <Stadistics />
      </div>
      <div className="col-span-1">
        <Sells />
      </div>
      <div className="col-span-1">
        <PurchaseStatistics />
      </div>
    </div>
  );
};

export default AdminPanelContainer;
