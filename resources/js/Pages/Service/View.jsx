import React from 'react';

import MainLayout from '../../Layout/MainLayout';
import {
    Container
 } from '@mantine/core';
import { ViewService } from '../../Components/Service/ViewService';


const ServiceView = ({model}) => {
    return (
        <Container size="xl" style={{ paddingTop: 20 }}>
            <ViewService service={model}/>
        </Container>
    )
}
ServiceView.layout = page => <MainLayout children={page}/>


export default ServiceView




