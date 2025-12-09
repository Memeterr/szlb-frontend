import {
    Anchor,
    Button,
    Checkbox,
    Container,
    Group,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
} from '@mantine/core';
import classes from '~/styles/AuthenticationTitle.module.css';

export function AuthenticationTitle() {
    return (
        <Container size={420} my={40}>
            <Title ta="center" className={classes.title}>
                Üdvözlünk!
            </Title>

            <Text className={classes.subtitle}>
                Még nincs fiókod? <Anchor size={"sm"} c={"#a058d1"}>Fiók létrahozása</Anchor>
            </Text>

            <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
                <TextInput label="Email" placeholder="pelda@email.com" required radius="md" />
                <PasswordInput label="Jelszó" placeholder="Jelszavad" required mt="md" radius="md" />
                <Group justify="space-between" mt="lg">
                    <Checkbox label="Emlékezz rám" />
                    <Anchor component="button" size="sm" c={"#a058d1"}>
                        Elfelejtett jelszó?
                    </Anchor>
                </Group>
                <Button fullWidth mt="xl" radius="md" color={"#a058d1"}>
                    Bejelentkezés
                </Button>
            </Paper>
        </Container>
    );
}