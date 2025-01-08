import { Box, Paper, Text, ThemeIcon, TypographyStylesProvider, rem } from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons-react';
import classes from './BlogCard.module.css';
import { Link } from '@inertiajs/react';
import HtmlContentDisplay from '../UI/HTML/HtmlContentDisplay';

export function BlogCard({post}) {
  const {title, slug, id, html_content} = post;
  return (
    <Paper component={Link} href={`/blog/${slug}/${id}`} withBorder radius="md" className={classes.card} classNames={classes.Link}>      
      <Text size="xl" fw={500} mt="md">
        {title}
      </Text>
      <Text size="sm" mt="sm" c="dimmed" lineClamp={4}>
        <TypographyStylesProvider>
            <div
              dangerouslySetInnerHTML={{ __html: html_content }}
            />
        </TypographyStylesProvider>
      </Text>
    </Paper>
  );
}