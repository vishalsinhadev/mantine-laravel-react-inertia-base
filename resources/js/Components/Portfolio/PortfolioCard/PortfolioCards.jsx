import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    Image,
} from '@mantine/core';
import classes from './PortfolioCards.module.css';
import { Link } from '@inertiajs/inertia-react';


export function PortfolioCards({title, lists}) {
    const image = 'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80';
    const badges = [
        { emoji: '☀️', label: 'Sunny weather' },
        { emoji: '🦓', label: 'Onsite zoo' },
        { emoji: '🌊', label: 'Sea' },
        { emoji: '🌲', label: 'Nature' },
        { emoji: '🤽', label: 'Water sports' },
      ];
    const technologies = badges.map((badge) => (
        <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
          {badge.label}
        </Badge>
      ));
    const features = lists?.data?.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            <Card.Section>
                <Image src={feature.image} alt={feature.title} height={180} />
            </Card.Section>
            <Card.Section className={classes.section} mt="md">
                <Text component={Link} href="#" fz="lg" fw={500} className={classes.cardTitle} mt="md">
                    {feature.title}
                </Text>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Text mt="md" className={classes.label} c="dimmed">
                    Our Tech Stack
                </Text>
                <Group gap={7} mt={5}>
                    {technologies}
                </Group>
            </Card.Section>
        </Card>
    ));

    return (
        <Container size="lg" py="xl">
            <Title order={2} className={classes.title} ta="center" mt="sm">
                {title}
            </Title>
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
                {features}
            </SimpleGrid>
        </Container>
    );
}