import React from 'react';

import MainLayout from '../../Layout/MainLayout';
import {
    Container,
    ActionIcon,
    Group,
    Title,
 } from '@mantine/core';
import { Link } from '@inertiajs/react';
import { IconArrowLeft } from "@tabler/icons-react";
import HtmlContentDisplay from '../../Components/UI/HTML/HtmlContentDisplay';
import SliderWithListItems from '../../Components/UI/HTML/SliderWithListItems';


const BlogView = ({post}) => {
    console.log('post', post)
    const {title, html_content} = post.data;
    return (
        // <MainLayout>
            <Container size="xl" style={{ paddingTop: 20 }}>
                <Group>
                    <ActionIcon
                        component={Link}
                        href={`/blog`}
                        aria-label="back to blog list"
                    >
                    <IconArrowLeft size={34} />
                    </ActionIcon>

                    <Title order={1}>{title}</Title>
                </Group>
                {/* <SliderWithListItems content={html_content} /> */}
                <HtmlContentDisplay htmlContent={html_content} />
            </Container>
        // {/* </MainLayout> */}
    )
}
BlogView.layout = page => <MainLayout children={page}/>


export default BlogView




