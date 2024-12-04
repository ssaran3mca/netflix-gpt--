import { Provider } from "react-redux";
import Body from "./components/Body";
import "./Style.scss";
import appStore from "./unitls/appStore";
function App() {
  return (
    <>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </>
  );
}

export default App;
