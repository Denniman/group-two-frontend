import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { APP_ROUTES, PRIVATE_ROUTES, PUBLIC_ROUTES } from "./urls";

const isPrivateRoute = (route) => {
    const hasPartialMatch = PRIVATE_ROUTES.some((routeFromList) =>
        route.includes(routeFromList)
    );
    // for routes that contain parameters example: `/user/forgot_password/:id/:token`
    const match = PRIVATE_ROUTES.includes(route);
    return hasPartialMatch || match;
};

const isPublicRoute = (route) => {
    const hasPartialMatch = PUBLIC_ROUTES.some((routeFromList) =>
        route.includes(routeFromList)
    ); // for routes that contain parameters example: `/user/forgot_password/:id/:token`
    const match = PUBLIC_ROUTES.includes(route);
    return hasPartialMatch || match;
};

export const PrivateRoute = ({ children }) => {
    const location = useLocation();
    // const { access_token } = useSelector((state) => state.session);
    const access_token = true;

    if (access_token && isPrivateRoute(location.pathname)) {
        return children;
    }

    return (
        <Navigate
            to={APP_ROUTES.LOGIN}
            replace
            state={{ path: location.pathname }}
        />
    );
};

export const PubliceRoute = ({ children }) => {
    const location = useLocation();

    // const { access_token } = useSelector((state) => state.session);

    const access_token = true;

    // user is logged in and trying to navigate to non-logged-in routes
    if (access_token && isPublicRoute(location.pathname)) {
        return <Navigate replace to={APP_ROUTES.OVERVIEW} />;
    }

    // user is not logged in and is visiting the base route [/]
    if (location.pathname === APP_ROUTES.HOME_URL) {
        return <Navigate to={APP_ROUTES.LOGIN} replace />;
    }

    if (isPrivateRoute(location.pathname)) {
        return <Navigate to={APP_ROUTES.LOGIN} replace />;
    }

    return children;
};

PubliceRoute.propTypes = {
    children: PropTypes.node,
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};
