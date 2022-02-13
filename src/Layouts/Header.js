import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.css"

const Header = () => {
    return (
        <div className={styles.container}>
            <h1>Webpack for react</h1>
        </div>
    )
}

export default Header;