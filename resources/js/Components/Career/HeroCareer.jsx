import { Title, Text, Container } from '@mantine/core';
import { Dots } from './Dots';
import classes from './HeroCareer.module.css';
import { CareerCards } from './CareerCards/CareerCards';
import { CareerTypeFilter } from './CareerTypeFilter/CareerTypeFilter';

export function HeroCareer({datas}) {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Be Part  of Our {' '}
          <Text component="span" className={classes.highlight} inherit>
            Journey
          </Text>
        </Title>
        <Container p={0} size="xl">
          
          <CareerCards 
            title="Elevate Your Career with Our Dynamic Team."
            datas={datas}
          />
        </Container>

      </div>
    </Container>
  );
}