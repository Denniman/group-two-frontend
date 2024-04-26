/**
 * extending app global constants
 * @constant APP_ROUTES default value
 */

export const APP_ROUTES = {
  HOME_URL: "/",
  NOT_FOUND: "*",
  LOGIN: "/login",
  SIGNUP: "/signup",
  PRODUCTS: "/products",
  CUSTOMERS: "/customers",
  DASHBOARD: "/dashboard",
  TRANSACTIONS: "/transactions",
  ADD_PRODUCTS: "/products/add",
  STORE_INFO: "/store/info",
  PRODUCTS_LIST: "/products/list",
  CREATE_STORE: "/store/creat-store",
};

export const PUBLIC_ROUTES = [
  APP_ROUTES.LOGIN,
  APP_ROUTES.SIGNUP,
  APP_ROUTES.HOME_URL,
  APP_ROUTES.NOT_FOUND,
];

export const PRIVATE_ROUTES = [
  APP_ROUTES.PRODUCTS,
  APP_ROUTES.CUSTOMERS,
  APP_ROUTES.STORE_INFO,
  APP_ROUTES.DASHBOARD,
  APP_ROUTES.CREATE_STORE,
  APP_ROUTES.ADD_PRODUCTS,
  APP_ROUTES.TRANSACTIONS,
  APP_ROUTES.PRODUCTS_LIST,
];
