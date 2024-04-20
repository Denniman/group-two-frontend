import PropTypes from "prop-types";
import { Sidebar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  HiUser,
  HiSearch,
  HiTable,
  HiChartPie,
  HiViewBoards,
  HiArrowSmRight,
  HiShoppingBag,
} from "react-icons/hi";

export const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800">
        {/* Sidebar content */}
        <Sidebar aria-label="Sidebar with logo branding example">
          <Sidebar.Logo href="#" img="/assets/react.svg">
            SwitchCommerce
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
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                Sign In
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable}>
                Sign Up
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-gray-100">
        <header className="bg-white p-4 shadow-md flex justify-center">
          <TextInput placeholder="Search" icon={HiSearch} className="w-2/4" />
        </header>

        {/* Main content area */}
        <main className="p-4 overflow-y-scroll">{children}</main>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
