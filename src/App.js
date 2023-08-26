import "react-perfect-scrollbar/dist/css/styles.css";
import "../src/css/style.css";
import Router from "./jsx/router";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

export default App;
