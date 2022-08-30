import React from 'react';
import styles from "./Loader.module.scss";
import {ThreeDots} from "react-loader-spinner";

const Loader = () => {
    return (
        <div className={styles.container}>
            <ThreeDots
                height="100"
                width="100"
                radius="10"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                // wrapperStyle={{}}
                // wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default Loader;