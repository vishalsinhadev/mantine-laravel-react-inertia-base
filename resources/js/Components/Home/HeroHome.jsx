import {
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import classes from "./HeroBullets.module.css";
import { ServiceCards } from "./Service/ServiceCards";
import { Link } from "@inertiajs/inertia-react";
import { WhyChooseUs } from "./WhyChooseUs/WhyChooseUs";
import { ContactUs } from "./ContactUs/ContactUs";

export function HeroHome() {
    return (
        <Container size="xl">
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        Transform Your{" "}
                        <span className={classes.highlight}>
                            Digital Presence
                        </span>{" "}
                        <br />
                        with our expert guidance
                    </Title>
                    <Text c="dimmed" mt="md">
                        A Leading IT Service company dedicated to empowering
                        businesses with cutting edge technology solutions.
                    </Text>

                    <List
                        mt={30}
                        spacing="sm"
                        size="sm"
                        icon={
                            <ThemeIcon size={20} radius="xl">
                                <IconCheck
                                    style={{ width: rem(12), height: rem(12) }}
                                    stroke={1.5}
                                />
                            </ThemeIcon>
                        }
                    >
                        <List.Item>
                            <b>Latest Technologies</b>
                        </List.Item>
                        <List.Item>
                            <b>Uniqe Solutions</b>
                        </List.Item>
                        <List.Item>
                            <b>Powerful Strategies</b>
                        </List.Item>
                    </List>

                    <Group mt={30}>
                        <Button
                            component={Link}
                            href="/contact-us"
                            radius="xl"
                            size="md"
                            className={classes.control}
                        >
                            Let's Talk
                        </Button>
                    </Group>
                </div>
                {/* <Image src={image} className={classes.image} w="auto"
                    fit="contain"
                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"/> */}
            </div>
            <ServiceCards
                title={`We provide Comprehensive Solutions for Your Digital Needs.`}
            />
            <WhyChooseUs />
            <ContactUs />
        </Container>
    );
}
