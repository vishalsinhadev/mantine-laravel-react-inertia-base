import React from 'react';

import MainLayout from '../../Layout/MainLayout';
import { HeroPortfolio } from '../../Components/Portfolio/HeroPortfolio';

const Portfolio = ({lists}) => {
    return (
        <MainLayout>
            <HeroPortfolio lists={lists}/>
        </MainLayout>
    )
}

export default Portfolio