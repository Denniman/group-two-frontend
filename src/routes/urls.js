/**
 * extending app global constants
 * @constant APP_ROUTES default value
 */

export const APP_ROUTES = {
    LOGIN: "/login",
    SIGNUP: "/signup",
    HOME_URL: "/",
    NOT_FOUND: "*",
    STORE: "/store",
    PRODUCTS: "/products",
    CUSTOMERS: "/customers",
    DASHBOARD: "/dashboard",
    TRANSACTIONS: "/transactions",
};

export const PUBLIC_ROUTES = [
    APP_ROUTES.LOGIN,
    APP_ROUTES.SIGNUP,
    APP_ROUTES.HOME_URL,
    APP_ROUTES.NOT_FOUND,
];

export const PRIVATE_ROUTES = [
    APP_ROUTES.STORE,
    APP_ROUTES.PRODUCTS,
    APP_ROUTES.CUSTOMERS,
    APP_ROUTES.DASHBOARD,
    APP_ROUTES.TRANSACTIONS,
];
