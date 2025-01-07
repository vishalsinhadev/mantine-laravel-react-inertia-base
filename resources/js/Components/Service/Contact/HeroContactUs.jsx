import { Container, Title, Text, Button } from "@mantine/core";
import classes from "./HeroImageRight.module.css";
import { Link } from "@inertiajs/react";

export function HeroContactUs() {
    return (
        <div className={classes.root}>
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            Contact{" "}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: "pink", to: "yellow" }}
                            >
                                Us
                            </Text>{" "}
                        </Title>

                        <Text className={classes.description} mt={30}>
                            This is Contact us Page
                        </Text>

                        <Button
                            variant="gradient"
                            gradient={{ from: "pink", to: "yellow" }}
                            size="xl"
                            className={classes.control}
                            mt={40}
                            component={Link}
                            href="/contact-us"
                        >
                            Get started
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}
