/**
 * extending app global constants
 * @constant APP_ROUTES default value
 */

export const APP_ROUTES = {
    LOGIN: "/login",
    SIGNUP: "/signup",
    HOME_URL: "/",
    NOT_FOUND: "*",
    PRODUCTS: "/products",
    OVERVIEW: "/overview",
};

export const PUBLIC_ROUTES = [
    APP_ROUTES.LOGIN,
    APP_ROUTES.SIGNUP,
    APP_ROUTES.HOME_URL,
    APP_ROUTES.NOT_FOUND,
];

export const PRIVATE_ROUTES = [APP_ROUTES.OVERVIEW, APP_ROUTES.PRODUCTS];
