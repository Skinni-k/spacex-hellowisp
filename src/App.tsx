import { ReactElement } from "react";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { PersistGate } from "redux-persist/integration/react";
import { Home, FourOhFour } from "./pages";

import configureStore from "./redux/store";
import { SnackbarNotification } from "./components";

export const { store, persistor } = configureStore();

export const history = createBrowserHistory();

function App(): ReactElement {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/*" render={() => <FourOhFour />} />
          </Switch>
        </Router>
        <SnackbarNotification />
      </PersistGate>
    </Provider>
  );
}

export default App;
