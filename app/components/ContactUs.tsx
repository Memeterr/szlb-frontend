import { IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react';
import {
    ActionIcon, Box,
    Button, Container,
    Group,
    SimpleGrid,
    Text,
    Textarea,
    TextInput,
    Title,
} from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import classes from '~/styles/ContactUs.module.css';

const social = [IconBrandInstagram, IconBrandFacebook];

export function ContactUs() {
    const icons = social.map((Icon, index) => (
        <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
            <Icon size={22} stroke={1.5} />
        </ActionIcon>
    ));

    return (
        <div className={classes.wrapper}>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
                <div>
                    <Title className={classes.title}>Vedd fel velünk a kapcsolatot</Title>
                    <Text className={classes.description} mt="sm" mb={30}>
                        Kérdésed van? Küldj üzenetet, és igyekszünk egy munkanapon belül válaszolni!
                    </Text>

                    <ContactIconsList />

                    <Group mt="xl">{icons}</Group>
                </div>

                <div className={classes.form}>
                    <TextInput
                        label="Email"
                        placeholder="pelda@email.com"
                        required
                        radius="md"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />
                    <TextInput
                        required
                        label="Név"
                        placeholder="Példa János"
                        mt="md"
                        radius="md"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />
                    <Textarea
                        required
                        label="Üzeneted"
                        placeholder="Szeretnék egyedi terméket"
                        minRows={4}
                        mt="md"
                        radius="md"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button className={classes.control} radius="md">
                            Üzenet küldése
                        </Button>
                    </Group>
                </div>
            </SimpleGrid>
        </div>
    );
}