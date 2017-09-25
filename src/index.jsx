// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import InitializeActions from "./actions/InitilizeActions";

// Styles
import "./index.scss";
import "../node_modules/toastr/toastr.scss";

//Router
import Routes from "./routes/Routes.jsx";

//Initialize App
InitializeActions.initApp();

function renderApp(){
    ReactDOM.render(
        <AppContainer>
            {Routes}
        </AppContainer>,
        document.getElementById("main")
    );
}

renderApp();

if (module.hot) {
    // Renders App every time a change in code happens.
    module.hot.accept("./components/app/App.jsx", renderApp);
}