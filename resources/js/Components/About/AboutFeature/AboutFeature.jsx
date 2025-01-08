import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
import classes from './AboutFeature.module.css';
import { Link } from '@inertiajs/react';

const features = [
  {
    icon: IconReceiptOff,
    title: 'Innovation',
    description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.',
  },
  {
    icon: IconFileCode,
    title: 'Quality',
    description: 'We are committed to the highest standards of quality in every project we undertake.',
  },
  {
    icon: IconCircleDotted,
    title: 'Collaboration',
    description:
      'We believe in working closely with our clients to understand their needs and exceed their expectations.',
  },
  {
    icon: IconFlame,
    title: 'Integrity',
    description:
      'We operate with transparency and honesty in all our dealings.',
  },
];

export function AboutFeature() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} order={2}>
            We Can Take Your Business To The Next Level.
          </Title>
          <Text c="dimmed">
          Where innovation meets excellence. We are a passionate team of tech enthusiasts dedicated to transforming your ideas into powerful digital solutions. Our journey began with a vision to bridge the gap between businesses and cutting-edge technology, and today, 
          we proudly serve as a trusted partner to numerous clients across various industries.
          </Text>

          <Button
            variant="gradient"
            gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            size="lg"
            radius="md"
            mt="xl"
            component={Link}
            href='/contact-us'
          >
            Get started
          </Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}