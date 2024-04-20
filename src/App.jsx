import { RootRoutes } from "./routes";

import Provider from "./providers/StoreProvider";

function App() {
  return (
    <Provider>
      <RootRoutes />
    </Provider>
  );
}

export default App;
