import { Container, Title, Text } from "@mantine/core";
import { Dots } from "./Dots";
import classes from "./HeroAbout.module.css";
import { AboutCards } from "./AboutCards/AboutCards";

const HeroAbout = () => {
    return (
        <Container className={classes.wrapper} size={1400}>
            <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
            <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

            <div className={classes.inner}>
                <Title className={classes.title}>
                    About
                    <Text
                        component="span"
                        className={classes.highlight}
                        inherit
                    >
                        Us
                    </Text>
                </Title>
                <Container p={0} size="xl">
                    <AboutCards title="This is About Us Page." />
                </Container>
            </div>
        </Container>
    );
};

export default HeroAbout;
