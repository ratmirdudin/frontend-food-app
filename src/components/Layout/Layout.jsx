import React from 'react';
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss"

const Layout = () => {
    return (
        <div className={styles.page}>
            <Header/>
            <div className={styles.wrapper}>
                <aside className={styles.sidebar}>Sidebar</aside>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;