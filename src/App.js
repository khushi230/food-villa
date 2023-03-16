import { Provider } from "react-redux";

import store from "./utils/store";
import AppLayout from "./components/AppLayout";

const App = () => {
  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
};

export default App;
