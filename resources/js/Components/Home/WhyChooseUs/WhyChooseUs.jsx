import {
    Title,
    SimpleGrid,
    Text,
    Button,
    ThemeIcon,
    Grid,
    rem,
} from "@mantine/core";
import {
    IconReceiptOff,
    IconFlame,
    IconCircleDotted,
    IconFileCode,
} from "@tabler/icons-react";
import classes from "./WhyChooseUs.module.css";
import { Link } from "@inertiajs/react";

const features = [
    {
        icon: IconReceiptOff,
        title: "Expertise",
        description: "description content",
    },
    {
        icon: IconFileCode,
        title: "Client-Centric Approach",
        description: "description content",
    },
    {
        icon: IconCircleDotted,
        title: "Cutting-edge Technology",
        description: "description content",
    },
    {
        icon: IconFlame,
        title: "Responsive & Ease Design",
        description: "description content",
    },
];

export function WhyChooseUs() {
    const items = features.map((feature) => (
        <div key={feature.title}>
            <ThemeIcon
                size={44}
                radius="md"
                variant="gradient"
                gradient={{ deg: 133, from: "blue", to: "cyan" }}
            >
                <feature.icon
                    style={{ width: rem(26), height: rem(26) }}
                    stroke={1.5}
                />
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
                        Choose us
                    </Title>
                    <Text c="dimmed">This is Choose Us Page</Text>

                    <Button
                        variant="gradient"
                        gradient={{ deg: 133, from: "blue", to: "cyan" }}
                        size="lg"
                        radius="md"
                        mt="xl"
                        component={Link}
                        href="/contact-us"
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
