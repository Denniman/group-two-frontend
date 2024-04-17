import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DashboardLayout } from "../components";
import { Login, Signup, Dashboard } from "../pages";

import { APP_ROUTES } from "./urls";
import { PrivateRoute, PubliceRoute } from "./utils";

export function RootRoutes() {
    return (
        <BrowserRouter>
            <Routes>
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
                    path={APP_ROUTES.OVERVIEW}
                    element={
                        <PrivateRoute>
                            <DashboardLayout>
                                <Dashboard />
                            </DashboardLayout>
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
