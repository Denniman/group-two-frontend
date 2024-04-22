import PropTypes from "prop-types";
import { Sidebar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  HiUser,
  HiSearch,
  HiChartPie,
  HiViewBoards,
  HiArrowSmLeft,
  HiShoppingBag,
} from "react-icons/hi";

import { logout } from "../../providers/session/session-slice";

export const DashboardLayout = ({ children }) => {
  const { data } = useSelector((state) => state.session);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const firstPart = data?.user.id.substring(2, 5);
  const lastPart = data?.user.id.substring(data?.user.id.length - 3);
  const merchantId = `${firstPart}***${lastPart}`;

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
                <Link to={"/dashboard"}>Dashboard</Link>
              </Sidebar.Item>
              <Sidebar.Item icon={HiViewBoards}>
                <Link to={"/transactions"}>Transaction</Link>
              </Sidebar.Item>

              <Sidebar.Item href="#" icon={HiUser}>
                Customers
              </Sidebar.Item>
              <Sidebar.Item icon={HiShoppingBag}>
                <Link to={"/products"}>Products</Link>
              </Sidebar.Item>
              <Sidebar.Item icon={HiShoppingBag}>
                <Link to={"/store"}>Store</Link>
              </Sidebar.Item>
              <Sidebar.Item icon={HiArrowSmLeft}>
                <button
                  icon={HiArrowSmLeft}
                  onClick={() => {
                    dispatch(logout());
                    navigate("/login");
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
