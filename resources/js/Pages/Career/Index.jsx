import React from 'react';

import MainLayout from '../../Layout/MainLayout';
import { HeroCareer } from '../../Components/Career/HeroCareer';

const Career = ({lists}) => {
    const {data} = lists;
    return (
        <MainLayout>
            <HeroCareer datas={data} />
        </MainLayout>
    )
}

export default Career