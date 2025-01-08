import { Title, Text, Container } from '@mantine/core';
import { Dots } from './Dots';
import classes from './HeroService.module.css';
import { ServiceCards } from '../Home/Service/ServiceCards';
import { HeroContactUs } from './Contact/HeroContactUs';

export function HeroService() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          <Text component="span" className={classes.highlight} inherit>
          Transformative IT Services:
          </Text>{' '}
          Partnering for Growth
        </Title>

        <Container p={0} size="xl">
          <ServiceCards 
            title="We provide Comprehensive Solutions for Your Digital Needs."
          />
        </Container>

        <HeroContactUs />
      </div>
    </Container>
  );
}