import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer, Persistor } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { createLogger } from "redux-logger";

import rootReducer from "./reducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const isReduxDebug = true;

const logger = createLogger({
  collapsed: true,
});

declare global {
  interface Window {
    // eslint-disable-next-line no-undef
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const isDebugMode = process.env.NODE_ENV === "development";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function configureStore(): { store: any; persistor: Persistor } {
  let middlewares = [];
  if (isDebugMode) {
    if (isReduxDebug) {
      middlewares = [sagaMiddleware, logger];
    } else {
      middlewares = [sagaMiddleware];
    }
  } else {
    middlewares = [sagaMiddleware];
  }

  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(
    persistedReducer,
    <{ _persist: { version: number; rehydrated: boolean } } | undefined>{},
    composeEnhancers(...enhancers)
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
}
