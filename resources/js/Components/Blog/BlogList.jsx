import { Card, Grid, Title, Divider, Anchor } from '@mantine/core';
import { BlogCard } from './BlogCard';
import classes from './BlogCard.module.css';
import { Link } from '@inertiajs/react';

const RandomPostSidebar = ({ items }) => (
  <Card shadow="xs" padding="md" radius="md" style={{ marginBottom: 20 }}>
    <Title order={4} style={{ marginBottom: 10 }}>Popular Posts</Title>
    <Divider style={{ marginBottom: 10 }} />
    {items.map((item, index) => (
      <Anchor 
       component={Link}
       variant="gradient"
       gradient={{ from: 'pink', to: 'yellow' }}
       fw={500}
       fz="sm"
       href={`/blog/${item.slug}/${item.id}`}
       key={index} size="sm" 
       className={classes.link} 
       underline="never">
        {item.title}
      </Anchor>
    ))}
  </Card>
);
const CategorySidebar = ({ items }) => (
  <Card shadow="xs" padding="md" radius="md" style={{ marginBottom: 20 }}>
    <Title order={4} style={{ marginBottom: 10 }}>Categories</Title>
    <Divider style={{ marginBottom: 10 }} />
    {items.map((item, index) => (
      <Anchor
       component={Link}
       variant="gradient"
       gradient={{ from: 'pink', to: 'yellow' }}
       fw={500}
       fz="lg"
       href={`/blog/${item.name}`} 
       key={index} size="sm" className={classes.link} underline="never">
        {item.name}
      </Anchor>
    ))}
  </Card>
);

function BlogList({posts}) {
  return (
    <Grid>
      {posts.map((post, index) => (
        <Grid.Col key={index} sm={6} md={4} style={{ marginBottom: 20 }}>
          <BlogCard post={post} />
        </Grid.Col>
      ))}
    </Grid>
  );
}

export {BlogList, RandomPostSidebar, CategorySidebar}