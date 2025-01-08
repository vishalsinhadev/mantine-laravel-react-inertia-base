import {
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    useMantineTheme,
    Chip,
    Divider,
    Button,
    Center,
    Drawer,
} from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';
import classes from './CareerCards.module.css';
import { useDisclosure } from '@mantine/hooks';
import { CareerApplicationForm } from '../CareerApplicationForm/CareerApplicationForm';
import { CareerTypeFilter } from '../CareerTypeFilter/CareerTypeFilter';
import { useState } from 'react';

export function CareerCards({title, datas}) {
    const theme = useMantineTheme();
    const [opened, { open, close }] = useDisclosure(false);
    const [selectedId, setSelectedId] = useState(false);

    const handleApply = (id) => {
        setSelectedId(id)
        open();
    }

    const features = datas.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            <Group justify="space-between" className={classes.footer}>
                <Center>
                    <Text inline className={classes.cardTitle} fz="lg" fw={500}>
                        {feature.title}
                    </Text>
                </Center>

                <Group gap={8} mr={0}>
                    <Button 
                        rightSection={<IconArrowUpRight size={14} />} 
                        variant="default" 
                        color={theme.colors.red[6]}
                        onClick={() => handleApply(feature.id)}
                    >
                        Apply Now
                    </Button>
                    {/* <Text className={classes.action}>
                        Apply Now<IconArrowUpRight style={{ width: rem(16), height: rem(16) }} color={theme.colors.red[6]} />
                    </Text> */}
                </Group>
            </Group>
            <Text fz="sm" c="dimmed" mt="sm" lineClamp={2}>
                {feature.description}
            </Text>
            <Divider my="md" />
           <Card.Section className={classes.section}>
                <Chip.Group>
                    <Group justify="center">
                        {feature?.skills.map((skill) => (
                            <Chip inline key={skill.id} defaultChecked>{skill.skill}</Chip>
                        ))}
                    </Group>
                </Chip.Group>
           </Card.Section>
        </Card>
    ));

    return (
        <Container size="lg" py="xl">
            <Drawer 
                opened={opened} 
                onClose={close} 
                title="Apply Now"
                overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
                position='right'
                transitionProps={{ transition: 'rotate-left', duration: 150, timingFunction: 'linear' }}>
                <CareerApplicationForm id={selectedId}/>
            </Drawer>
            <Title order={2} className={classes.title} ta="center" mt="sm">
                {title}
            </Title>

            <CareerTypeFilter/>
            
            <SimpleGrid cols={{ base: 1, md: 1 }} spacing="xl" mt={50}>
                {features}
            </SimpleGrid>
        </Container>
    );
}