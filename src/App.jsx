import { RootRoutes } from "./routes";
import Provider from "./providers/Providers";

function App() {
    return (
        <Provider>
            <RootRoutes />
        </Provider>
    );
}

export default App;
