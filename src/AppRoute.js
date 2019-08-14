import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Photo from "./Photo";
import Home from "./Home";


const NoMatch = ({location}) => {
    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}

const AppRoute = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/"> Home </Link></li>
                        <li>
                            <Link to="/photo/">Photo</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/photo/" component={Photo}/>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        </Router>
    );
}


export default AppRoute;