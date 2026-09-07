import { store } from "./redux/store";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </div>
  );
};

export default App;
