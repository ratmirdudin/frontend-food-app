import React from 'react';
import {useTitle} from "../../hooks/useTitle";
import styles from "./FoodsPage.module.scss";
import FoodItem from "../../components/FoodItem/FoodItem";
import {useGetAllFoodsQuery} from "../../app/food/foodApiSlice";
import Loader from "../../components/Loader/Loader";
import {useLocation, useNavigate} from "react-router-dom";
import {LINKS} from "../../routes/routes";

const FoodsPage = () => {
    const params = new URLSearchParams(useLocation().search);
    const page = params.get('page') ? params.get('page') : 1
    const limit = params.get('limit') ? params.get('limit') : 4
    const {data, isError, isLoading, isSuccess} = useGetAllFoodsQuery({page, limit})
    const navigate = useNavigate()
    useTitle("Еда")


    const numbersArray = Array.from({length: data?.pageMeta?.totalPages}, (_, i) => i + 1);
    return (
        <div className={styles.container}>
            <div className={styles.foods}>
                {isLoading
                    ?
                    <Loader/>
                    :
                    isError
                        ?
                        <h4>Произошла ошиб очка</h4>
                        :
                        data?.data?.map(food => (
                            <FoodItem key={food.id} food={food}/>
                        ))
                }
            </div>
            <div className={styles.pagination}>
                {isSuccess && numbersArray.map((pageNum) => (
                    <div className={styles.pageButton}>
                        <button
                            onClick={() => navigate(`${LINKS.Foods}?page=${pageNum}${limit ? `&limit=${limit}` : ``}`)}>
                            {pageNum}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodsPage;