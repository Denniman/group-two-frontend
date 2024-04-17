import PropTypes from "prop-types";

export const DashboardLayout = ({ children }) => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800">
                <div className="p-4 text-white">
                    <h1 className="text-xl font-semibold">
                        E-Commerce Dashboard
                    </h1>
                    {/* Sidebar menu */}
                    <nav className="mt-4">
                        <ul>
                            <li className="py-2 hover:bg-gray-700 cursor-pointer">
                                <a href="#" className="block">
                                    Dashboard
                                </a>
                            </li>
                            <li className="py-2 hover:bg-gray-700 cursor-pointer">
                                <a href="#" className="block">
                                    Orders
                                </a>
                            </li>
                            <li className="py-2 hover:bg-gray-700 cursor-pointer">
                                <a href="#" className="block">
                                    Products
                                </a>
                            </li>
                            {/* Add more sidebar items as needed */}
                        </ul>
                    </nav>
                </div>
            </aside>
            {/* Main content */}
            <main className="flex-1 bg-gray-200">
                <div className="p-4">{children}</div>
            </main>
        </div>
    );
};

DashboardLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
