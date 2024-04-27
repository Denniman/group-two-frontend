import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { store } from "../providers/store";
import { DashboardLayout } from "../components";
import {
  Login,
  Home,
  Signup,
  Notfound,
  StoreForm,
  Customers,
  Dashboard,
  StoreDetails,
  ProductForm,
  ProductList,
  Transactions,
} from "../pages";

import { APP_ROUTES } from "./urls";
import { PrivateRoute, PubliceRoute } from "./utils";

export function RootRoutes() {
  useEffect(() => {
    store.getState();
  }, []);

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
          path={APP_ROUTES.PRODUCTS_LIST}
          element={
            <PrivateRoute>
              <DashboardLayout>
                <ProductList />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path={APP_ROUTES.ADD_PRODUCTS}
          element={
            <PrivateRoute>
              <DashboardLayout>
                <ProductForm />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path={APP_ROUTES.CREATE_STORE}
          element={
            <PrivateRoute>
              <DashboardLayout>
                <StoreForm />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path={APP_ROUTES.STORE_INFO}
          element={
            <PrivateRoute>
              <DashboardLayout>
                <StoreDetails />
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
