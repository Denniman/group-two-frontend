import "redux-persist";
import PropTypes from "prop-types";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import * as store from "./store";

const Provider = ({ children }) => (
  <ReduxProvider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      {children}
    </PersistGate>
  </ReduxProvider>
);

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
