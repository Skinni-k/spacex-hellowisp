import { ReactElement } from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { render, RenderResult } from "@testing-library/react";

import configureStore from "../src/redux/store";
import { history } from "../src/App";

type renderAppReturnType = RenderResult<
  typeof import("c:/Kevin/test/spacex-wisp/node_modules/@testing-library/dom/types/queries"),
  HTMLElement
>;

const { store, persistor } = configureStore();

export const renderApp = (children: ReactElement): renderAppReturnType => {
  return render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>{children}</Router>
      </PersistGate>
    </Provider>
  );
};
