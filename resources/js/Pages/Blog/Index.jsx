import React from 'react';

import MainLayout from '../../Layout/MainLayout';
import { BlogList, CategorySidebar, RandomPostSidebar } from '../../Components/Blog/BlogList';
import { Box, Container, Grid, SimpleGrid, Skeleton } from '@mantine/core';
import { LeadGrid } from './LeadGrid';

const Blog = ({posts, randomPosts, categories}) => {
    return (
        <MainLayout>
            <Container size="xl" style={{ paddingTop: 20 }}>
                <SimpleGrid
                    cols={{ base: 1, md: 3 }}
                    spacing="md"
                    >
                    <Box
                    style={{ gridColumn: 'span 2' }}
                    sx={(theme) => ({
                        padding: theme.spacing.md,
                        backgroundColor: theme.colors.gray[0],
                        textAlign: 'center',
                    })}
                    >
                        <BlogList posts={posts.data} />
                    </Box>
                    <Box
                        sx={(theme) => ({
                            padding: theme.spacing.md,
                            backgroundColor: theme.colors.gray[1],
                            textAlign: 'center',
                        })}
                    >
                    <Grid gutter="md">
                        <Grid.Col>
                            
                            <RandomPostSidebar items={randomPosts.data} />
                        </Grid.Col>
                        <Grid.Col>
                            <CategorySidebar items={categories} />
                        </Grid.Col>
                    </Grid>
                    </Box>
                </SimpleGrid>            
            </Container>
        </MainLayout>
    )
}

export default Blog