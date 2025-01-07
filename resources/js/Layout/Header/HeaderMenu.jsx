import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    rem,
    useMantineTheme,
    Image,
} from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import { useDisclosure } from "@mantine/hooks";
import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
} from "@tabler/icons-react";
import classes from "./HeaderMenu.module.css";
import LightDark from "../../Components/UI/LightDark/LightDark";
import { Link } from "@inertiajs/react";
import { MobileMenu } from "./Mobile/MobileMenu";

const mockdata = [
    {
        icon: IconCode,
        title: "Web App Development",
        description:
            "Crafting dynamic and robust web applications tailored to your business needs.",
        link: "/service/web-app-development",
    },
    {
        icon: IconCoin,
        title: "Mobile App Development",
        description:
            "Creating seamless and innovative mobile experiences for iOS and Android platforms.",
        link: "/service/mobile-app-development",
    },
    {
        icon: IconBook,
        title: "Custom Web/Mobile App Development",
        description:
            "Designing bespoke web and mobile applications to meet your unique business requirements.",
        link: "/service/custom-web-mobile-app-development",
    },
    {
        icon: IconFingerprint,
        title: "Visual Design Service",
        description:
            "Delivering stunning visual designs that captivate and engage your audience.",
        link: "/service/visual-design-development",
    },
    {
        icon: IconChartPie3,
        title: "Digital Marketing",
        description:
            "Empowering your brand with strategic digital marketing solutions for maximum online impact.",
        link: "/service/digital-marketing-development",
    },
    {
        icon: IconNotification,
        title: "E-Commerce Development",
        description:
            "Building secure and scalable e-commerce platforms to boost your online sales.",
        link: "/service/e-commerce-development",
    },
];

export function HeaderMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
        useDisclosure(false);
    const theme = useMantineTheme();

    const links = mockdata.map((item) => (
        <UnstyledButton
            className={classes.subLink}
            key={item.title}
            component={Link}
            href={item.link}
        >
            <Group wrap="nowrap" align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon
                        style={{ width: rem(22), height: rem(22) }}
                        color={theme.colors.blue[6]}
                    />
                </ThemeIcon>
                <div>
                    <Text size="sm" fw={500}>
                        {item.title}
                    </Text>
                    <Text size="xs" c="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ));

    return (
        <Box pb={10}>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <MantineLogo size={30} />

                    <Group h="100%" gap={0} visibleFrom="md">
                        <Link href="/" className={classes.link}>
                            Home
                        </Link>
                        <HoverCard
                            width={600}
                            position="bottom"
                            radius="md"
                            shadow="md"
                            withinPortal
                        >
                            <HoverCard.Target>
                                <a href="#" className={classes.link}>
                                    <Center inline>
                                        <Box component="span" mr={5}>
                                            Service
                                        </Box>
                                        <IconChevronDown
                                            style={{
                                                width: rem(16),
                                                height: rem(16),
                                            }}
                                            color={theme.colors.blue[6]}
                                        />
                                    </Center>
                                </a>
                            </HoverCard.Target>

                            <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                                <Group justify="space-between" px="md">
                                    <Text fw={500}>Service</Text>
                                    <Anchor
                                        component={Link}
                                        href="/service"
                                        fz="xs"
                                    >
                                        View all
                                    </Anchor>
                                </Group>

                                <Divider my="sm" />

                                <SimpleGrid cols={2} spacing={0}>
                                    {links}
                                </SimpleGrid>

                                <div className={classes.dropdownFooter}>
                                    <Group justify="space-between">
                                        <div>
                                            <Text fw={500} fz="sm">
                                                Get started
                                            </Text>
                                            <Text size="xs" c="dimmed">
                                                Lets share your project details
                                                with us.
                                            </Text>
                                        </div>
                                        <Button
                                            component={Link}
                                            href="/contact-us"
                                            variant="default"
                                        >
                                            Get started
                                        </Button>
                                    </Group>
                                </div>
                            </HoverCard.Dropdown>
                        </HoverCard>
                        <Link href="/portfolio" className={classes.link}>
                            Portfolio
                        </Link>
                        <Link href="/career" className={classes.link}>
                            Career
                        </Link>
                        <Link href="/blog" className={classes.link}>
                            Blogs
                        </Link>
                        <Link href="/about" className={classes.link}>
                            About
                        </Link>
                    </Group>

                    <Group visibleFrom="sm">
                        <Link href="/contact-us">
                            <Button>Contact Us</Button>
                        </Link>
                        <LightDark />
                    </Group>

                    <Burger
                        opened={drawerOpened}
                        onClick={toggleDrawer}
                        hiddenFrom="md"
                    />
                </Group>
            </header>
            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title={<MantineLogo size={30} />}
                hiddenFrom="md"
                zIndex={1000000}
            >
                <MobileMenu links={links} />
            </Drawer>
        </Box>
    );
}
