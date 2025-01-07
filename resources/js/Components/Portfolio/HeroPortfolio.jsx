import { Title, Text, Container } from '@mantine/core';
import { Dots } from './Dots';
import classes from './HeroPortfolio.module.css';
import { PortfolioCards } from './PortfolioCard/PortfolioCards';

export function HeroPortfolio({lists}) {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
      <div className={classes.inner}>
        <Title className={classes.title}>
          {/* Services we offer{' '} */}
          <Text component="span" className={classes.highlight} inherit>
          Portfolio:
          </Text>
          {' '}Crafting Digital Success Stories
        </Title>
        <Container p={0} size="xl">
          <PortfolioCards 
            title="Highlighting our best work across web, mobile, and e-commerce solutions."
            lists={lists}
          />
        </Container>
      </div>
    </Container>
  );
}