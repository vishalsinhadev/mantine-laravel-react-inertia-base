import {
    Title,
    Container,
    SimpleGrid,
    Card,
    Group,
    Center,
    Button,
    Text,
} from '@mantine/core';
import classes from './AboutCards.module.css';
import { AboutFeature } from '../AboutFeature/AboutFeature';
import { Link } from '@inertiajs/react';

export function AboutCards({title}) {

    return (
        <Container size="lg" py="xl">
            <Title order={2} className={classes.title} ta="center" mt="sm">
                {title}
            </Title>
            <SimpleGrid cols={{ base: 1, md: 1 }} spacing="xl" mt={50}>
                <Card shadow="md" radius="md" className={classes.card} padding="xl">
                    <Card.Section className={classes.section}>
                        <AboutFeature />
                    </Card.Section>
                </Card>
                <Card shadow="md" radius="md" className={classes.card} padding="xl">
                    <Card.Section className={classes.section}>
                        <Group justify="space-between" className={classes.footer}>
                            <Text inline className={classes.title}  mt={30}>
                                Bright future that we cherish. 
                                <br/>We thrive for success.
                            </Text>
                        
                            <Group gap={8} mr={0}>
                                <Button
                                    variant="gradient"
                                    gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
                                    size="md"
                                    radius="md"
                                    mt="xl"
                                    component={Link}
                                    href='/career'
                                >
                                    Join Us
                                </Button>
                            </Group>
                        </Group>
                    </Card.Section>
                </Card>
            </SimpleGrid>
        </Container>
    );
}