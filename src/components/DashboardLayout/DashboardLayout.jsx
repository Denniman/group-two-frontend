import PropTypes from "prop-types";
import { Sidebar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  HiUser,
  HiSearch,
  HiChartPie,
  HiViewBoards,
  HiArrowSmLeft,
  HiShoppingBag,
} from "react-icons/hi";

export const DashboardLayout = ({ children }) => {
  const { data } = useSelector((state) => state.session);

  const firstPart = data?.user.id.substring(2, 5);
  const lastPart = data?.user.id.substring(data?.user.id.length - 3);
  const merchantId = `${firstPart}***${lastPart}`;

  return (
    <div className="flex h-screen">
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
              <Sidebar.Item href="#" icon={HiArrowSmLeft}>
                Log out
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>

      <div className="flex-1 bg-gray-100">
        <header className="bg-white p-4 shadow-md flex justify-center">
          <TextInput placeholder="Search" icon={HiSearch} className="w-2/4" />
        </header>

        <main className="p-4 overflow-y-scroll">{children}</main>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
