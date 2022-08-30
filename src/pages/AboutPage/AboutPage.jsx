import React from 'react';
import {useTitle} from "../../hooks/useTitle";

const AboutPage = () => {
    useTitle("О сайте")
    return (
        <div>
            ABOUT PAGE WORKS!
        </div>
    );
};

export default AboutPage;