import React from 'react';
import * as ReactDOM from "react-dom";

import './style.css';

import AppRoute from "./AppRoute";
import Home from "./Home";


const App = () => {
    return (
        <AppRoute>
            <div>
                <Home/>
            </div>
        </AppRoute>
    );
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);

/*render(<App/>, document.getElementById('root'));*/
