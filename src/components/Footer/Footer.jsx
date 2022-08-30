import React from 'react';
import styles from "./Footer.module.scss";

const Footer = () => {
    const startYear = 2022;
    const currentYear = new Date().getFullYear();
    const year = currentYear.toString() === startYear.toString() ? currentYear : `${startYear}-${currentYear}`;


    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <span>© {year} Сайт разработали <a className={styles.link} href="https://vk.com/id94641330"
                                                   target="_blank" rel="noopener noreferrer">Дудин Ратмир</a> и <a
                    className={styles.link}
                    href="https://vk.com/id374990974" target="_blank" rel="noopener noreferrer">Енсебаева Адэлина</a>. Все права защищены.</span>
            </div>
        </footer>
    );
};

export default Footer;