import {
    Group,
    Button,
    UnstyledButton,
    Divider,
    Center,
    Box,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconChevronDown,
} from '@tabler/icons-react';
import classes from './../HeaderMenu.module.css';
import { Link } from '@inertiajs/react'


export function MobileMenu( {links} ) {
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();

    return (
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />

            <Link href="/" className={classes.link}>
                Home
            </Link>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
                <Center inline>
                    <Box component="span" mr={5}>
                        Service
                    </Box>
                    <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
                    />
                </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <Link href="/portfolio" className={classes.link}>
                Portfolio
            </Link>
            <Link href="/career" className={classes.link}>
                Career
            </Link>
            <Link href="/blog" className={classes.link}>
                Blog
            </Link>
            <Link href="/about" className={classes.link}>
                About
            </Link>
            
            <Divider my="sm" />

            <Group justify="center" grow pb="xl" px="md">
                <Button component={Link} href='/contact-us'>Let's Connect</Button>
            </Group>
        </ScrollArea>
    );
}