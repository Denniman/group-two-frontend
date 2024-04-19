import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DashboardLayout } from "../components";
import {
    Login,
    Home,
    Store,
    Signup,
    Products,
    Notfound,
    Customers,
    Dashboard,
    Transactions,
} from "../pages";

import { APP_ROUTES } from "./urls";
import { PrivateRoute, PubliceRoute } from "./utils";

export function RootRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={APP_ROUTES.HOME_URL}
                    element={
                        <PubliceRoute>
                            <Home />
                        </PubliceRoute>
                    }
                />
                <Route
                    path={APP_ROUTES.LOGIN}
                    element={
                        <PubliceRoute>
                            <Login />
                        </PubliceRoute>
                    }
                />
                <Route
                    path={APP_ROUTES.SIGNUP}
                    element={
                        <PubliceRoute>
                            <Signup />
                        </PubliceRoute>
                    }
                />
                <Route
                    path={APP_ROUTES.NOT_FOUND}
                    element={
                        <PubliceRoute>
                            <Notfound />
                        </PubliceRoute>
                    }
                />
                <Route
                    path={APP_ROUTES.DASHBOARD}
                    element={
                        <PrivateRoute>
                            <DashboardLayout>
                                <Dashboard />
                            </DashboardLayout>
                        </PrivateRoute>
                    }
                />
                <Route
                    path={APP_ROUTES.TRANSACTIONS}
                    element={
                        <PrivateRoute>
                            <DashboardLayout>
                                <Transactions />
                            </DashboardLayout>
                        </PrivateRoute>
                    }
                />
                <Route
                    path={APP_ROUTES.PRODUCTS}
                    element={
                        <PrivateRoute>
                            <DashboardLayout>
                                <Products />
                            </DashboardLayout>
                        </PrivateRoute>
                    }
                />
                <Route
                    path={APP_ROUTES.STORE}
                    element={
                        <PrivateRoute>
                            <DashboardLayout>
                                <Store />
                            </DashboardLayout>
                        </PrivateRoute>
                    }
                />
                <Route
                    path={APP_ROUTES.CUSTOMERS}
                    element={
                        <PrivateRoute>
                            <DashboardLayout>
                                <Customers />
                            </DashboardLayout>
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
