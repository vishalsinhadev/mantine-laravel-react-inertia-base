import { Title, Text, Button, Container, Group, ActionIcon } from '@mantine/core';
import { Dots } from './Dots';
import classes from './HeroService.module.css';
import { Link } from '@inertiajs/react';
import { ServiceCards } from '../Home/Service/ServiceCards';
import { IconArrowLeft } from '@tabler/icons-react';
import HtmlContentDisplay from '../UI/HTML/HtmlContentDisplay';

export function ViewService({service}) {
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
            {service.title}
          </Text>{' '}
        </Title>
        <HtmlContentDisplay htmlContent={service.description} />
      </div>
    </Container>
  );
}