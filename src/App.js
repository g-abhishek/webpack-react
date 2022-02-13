import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// import Home from "./components/Home"
// import DynamicPage from "./components/DynamicPage"
// import NoMatch from "./components/NoMatch"
import Header from "./Layouts/Header";

const Home = React.lazy(() => import("./components/Home"));
const DynamicPage = React.lazy(() => import("./components/DynamicPage"));
const NoMatch = React.lazy(() => import("./components/NoMatch"));

const App = () => {
    return (
        <Router>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/dynamic" component={DynamicPage} />
                    <Route component={NoMatch} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default App;