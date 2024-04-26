import PropTypes from "prop-types";
import { Sidebar, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { HiUser, HiSearch, HiChartPie, HiViewBoards, HiShoppingBag } from "react-icons/hi";
import { TbLogout2 } from "react-icons/tb";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

import { resetAssess } from "../../providers/session/session-slice";

export const DashboardLayout = ({ children }) => {
  const { data } = useSelector((state) => state.session);
  const { storeName } = useSelector((state) => state.merchantStoreSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const firstPart = data?.user.id.substring(2, 5);
  const lastPart = data?.user.id.substring(data?.user.id.length - 3);
  const merchantId = `${firstPart}***${lastPart}`;

  const storeNavigation = () => {
    if (storeName) {
      navigate("/store/info");
    } else {
      navigate("/store/creat-store");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-gray-800">
        <Sidebar aria-label="Sidebar with logo branding">
          <Sidebar.Logo href="#" img="/assets/react.svg">
            <h2 className="text-lg text-slate-700">
              {`${data?.user.firstName}`} {`${data?.user.lastName}`}
            </h2>
            <p className="text-xs text-gray-400">Marchant ID {merchantId.toLowerCase()}</p>
          </Sidebar.Logo>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item icon={HiChartPie}>
                <button onClick={() => navigate("/dashboard")}>Dashboard</button>
              </Sidebar.Item>
              <Sidebar.Item icon={HiViewBoards}>
                <button onClick={() => navigate("/transactions")}>Transaction</button>
              </Sidebar.Item>

              <Sidebar.Item href="#" icon={HiUser}>
                <button onClick={() => navigate("/customers")}>Customers</button>
              </Sidebar.Item>
              <Sidebar.Item icon={MdOutlineProductionQuantityLimits}>
                <button onClick={() => navigate("/products/list")}>Products</button>
              </Sidebar.Item>
              <Sidebar.Item icon={HiShoppingBag}>
                <button onClick={storeNavigation}>Store</button>
              </Sidebar.Item>
              <Sidebar.Item icon={TbLogout2}>
                <button
                  onClick={() => {
                    dispatch(resetAssess());
                  }}
                  className="bg-transparent border-none outline-none"
                >
                  Log out
                </button>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>

      <div className="flex-1 bg-gray-100 overflow-y-auto">
        <header className="bg-white p-4 shadow-md flex justify-center">
          <TextInput placeholder="Search" icon={HiSearch} className="w-2/4" />
        </header>

        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
