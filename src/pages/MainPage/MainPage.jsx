import React, {useState} from 'react';
import {useTitle} from "../../hooks/useTitle";
import styles from "./MainPage.module.scss"
import FoodItem from "../../components/FoodItem/FoodItem";
import Loader from "../../components/Loader/Loader";
const foods = []
const MainPage = () => {

    const [isLoading, setLoading] = useState(false)
    useTitle("Главная")
    return (
        <div className={styles.container}>

            {isLoading ? <Loader/>
                :
                foods?.slice(6, 17).map((food, index) => (
                    <FoodItem key={index} food={food}/>
                ))}
        </div>
    );
};

export default MainPage;