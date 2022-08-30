import React from 'react';
import Card from "../../UI/Card/Card";
import styles from "./FoodItem.module.scss";
import {Link} from "react-router-dom";

const FoodItem = ({food}) => {
    return (
        <div className={styles.container}>
            <Link to={`/foods/${food.id}`}>
                <Card>
                    <h3 className={styles.title}>{food.name}</h3>
                    {/*<img*/}
                    {/*    src={food.img}*/}
                    {/*    alt={food.title}/>*/}
                    {/*<p>{food.description}</p>*/}
                </Card>
            </Link>
        </div>
    );
};

export default FoodItem;