import React from 'react';
import {useTitle} from "../../hooks/useTitle";

const NotFoundPage = () => {
    useTitle("Страница не найдена")
    return (
        <div>
            NOT FOUND PAGE WORKS!
        </div>
    );
};

export default NotFoundPage;