import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import  {Provider, connect} from "react-redux";
import configureStore from "./store/configureStore";
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('app')
);


