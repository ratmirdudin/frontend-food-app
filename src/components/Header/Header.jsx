import React, {useEffect, useState} from 'react';
import styles from "./Header.module.scss"
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser as farUser} from '@fortawesome/free-regular-svg-icons'
import {faAppleWhole} from "@fortawesome/free-solid-svg-icons";
import {LINKS} from "../../routes/routes";
import {getCurrentUsername, getTokens, logout} from "../../app/auth/authService";
import Container from "../Container/Container"; // import dependency

const menu = [
    {href: LINKS.Main, title: "Главная"},
    {href: LINKS.Foods, title: "Список еды"},
    {href: LINKS.Calendar, title: "Календарь"},
    {href: LINKS.About, title: "О сайте"},
    {href: LINKS.Contacts, title: "Связаться"},
]

const Header = () => {
    const [isLogout, setLogout] = useState(false)
    const {accessToken} = getTokens()
    const [username, setUsername] = useState(null)
    useEffect(() => {
        if (accessToken) {
            setUsername(getCurrentUsername())
        }
    }, [accessToken, username])
    const [query, setQuery] = useState("");

    const handleChangeQuery = (e) => {
        setQuery(e.target.value)
    }
    const searchQuery = (e) => {
        e.preventDefault();
        if (query.length < 1) {
            return
        }
        setQuery("");
        console.log(query)
    }
    const handleLogout = () => {
        if (isLogout) {
            return
        }
        setLogout(true)
        logout()
    }
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Container>
                    HEADER WORKS!!!
                </Container>
            </div>
        </header>
        // <div className={styles.container}>
        //     <Link to="/">
        //         <div className={styles.logo}>
        //             Еда и точка
        //             <FontAwesomeIcon icon={faAppleWhole} style={{paddingLeft: "10px", fontSize: "20px"}}/>
        //         </div>
        //     </Link>
        //     <ul>
        //         {menu.map(item =>
        //             <li key={item.href}><Link to={item.href}>{item.title}</Link></li>
        //         )}
        //     </ul>
        //     <div className={styles.search}>
        //         <form onSubmit={searchQuery}>
        //             <input
        //                 value={query}
        //                 onChange={handleChangeQuery}
        //                 type="text"
        //                 placeholder="Найти еду..."/>
        //         </form>
        //     </div>
        //     <div className={styles.account}>
        //         <FontAwesomeIcon icon={farUser} fontSize="25px" style={{marginRight: "15px", color: "white"}}/>
        //         {!username ? <Link to={LINKS.Login}>Авторизация</Link>
        //             : (<>
        //                 <Link to={LINKS.Account}>{username.toString()}</Link>
        //                 <button
        //                     onClick={handleLogout}
        //                     className={isLogout ? styles.submitted : {}}
        //                 >Выйти
        //                 </button>
        //             </>)}
        //     </div>
        // </div>
    );
};

export default Header;