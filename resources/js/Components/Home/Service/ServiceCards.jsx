import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
    Transition,
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";
import classes from "./ServiceCards.module.css";
import { Link } from "@inertiajs/inertia-react";

const mockdata = [
    {
        title: "Website Development",
        description:
            "We have the development expertise in Open-Source technologies and have developed complex applications.",
        icon: IconGauge,
        link: "/service/website-development",
    },
    {
        title: "Mobile App Development",
        description:
            "We take a right approach and help you find the right end-to-end solution for your business needs.",
        icon: IconUser,
        link: "/service/website-development",
    },
    {
        title: "Graphics Design",
        description:
            "We provide eye catch design to attract more and more customer.",
        icon: IconCookie,
        link: "/service/website-development",
    },
    {
        title: "UI/UX",
        description:
            "We Provide excellent approch to identify the best UI/UX design for the project on the basis of requirements.",
        icon: IconCookie,
        link: "/service/website-development",
    },
    {
        title: "QA & Testing",
        description:
            "We always test functionality before deployed on live. Testing can be automation on the basis of requirements.",
        icon: IconCookie,
        link: "/service/website-development",
    },

    {
        title: "Digital Marketing",
        description:
            "This will help you to be live and play in online markets. Very much require service to enlarge business online.",
        icon: IconCookie,
        link: "/service/website-development",
    },
];

export function ServiceCards({ title }) {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
        <Card
            key={feature.title}
            shadow="md"
            radius="md"
            className={classes.card}
            padding="xl"
        >
            <feature.icon
                style={{ width: rem(50), height: rem(50) }}
                stroke={2}
                color={theme.colors.blue[6]}
            />
            <Text
                component={Link}
                href={feature.link}
                fz="lg"
                fw={500}
                className={classes.cardTitle}
                mt="md"
            >
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {feature.description}
            </Text>
        </Card>
    ));

    return (
        <Container size="xl" py="xl">
            <Title order={2} className={classes.title} ta="center" mt="sm">
                {title}
            </Title>
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
                {features}
            </SimpleGrid>
        </Container>
    );
}
