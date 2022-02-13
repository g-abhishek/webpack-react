import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Welcome to home page 5</h1>
            <Link to={"/dynamic"}>Dynamic page</Link>
        </div>
    )
}

export default Home;