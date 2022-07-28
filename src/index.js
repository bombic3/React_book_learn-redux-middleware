import ReactDOM from "react-dom";
import { applyMiddleware, legacy_createStore } from "redux";
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import rootReducer from "./modules";
// import loggerMiddleware from "./lib/loggerMiddleware";
import { createLogger } from 'redux-logger';

const logger = createLogger();
const store = legacy_createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);