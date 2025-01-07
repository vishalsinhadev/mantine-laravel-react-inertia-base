import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Card, Text, Title, useMantineTheme, rem, Paper } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './Style/CardsCarousel.module.css';
import HtmlContentDisplay from './HtmlContentDisplay';

function CardElement({ title, category }) {
    return (
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        className={classes.card}
      >
        <div>
        <Title order={3} className={classes.title}>
            {title}
          </Title>
          <Text className={classes.category} size="xs">
            {category}
          </Text>
        </div>
      </Paper>
    );
  }

const SliderWithListItems = ({ content }) => {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  // Function to extract list items from the rich text content
  const parseListItems = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const listItems = Array.from(doc.querySelectorAll('li')).map((item, index) => ({
        type: 'listItem',
        title: `Item ${index + 1}`,
        description: <HtmlContentDisplay htmlContent={item.innerText} />,
    }));
    const otherElements = Array.from(doc.body.children)
      .filter(el => el.tagName !== 'UL' && el.tagName !== 'OL')
      .map((el, index) => ({
        type: 'element',
        title: `Element ${index + 1}`,
        description: <HtmlContentDisplay htmlContent={el.innerText}/>,
      }));

    return [...listItems, ...otherElements];
  };
  
  const listItems = parseListItems(content);

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: rem(2), sm: 'xl' }}
      align="start"
      slidesToScroll={mobile ? 1 : 3}>
      {listItems.map((item, index) => (
        <Carousel.Slide key={index}>
          <Card shadow="sm" p="lg">
            <Title order={4}>{item.title}</Title>
            <Text>{item.description}</Text>
          </Card>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default SliderWithListItems;
