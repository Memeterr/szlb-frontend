import { Button, Image, Text, TextInput, Title } from '@mantine/core';
import image from '~/images/image_email.svg';
import classes from '~/styles/EmailBanner.module.css';

export function EmailBanner() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.body}>
                <Title className={classes.title}>Várj egy pillanatot...</Title>
                <Text fw={500} fz="lg" mb={5}>
                    Iratkozz fel hírlevelünkre!
                </Text>
                <Text fz="sm" c="dimmed">
                    Ne maradj le termékakcióinkról, nyereményjátékainkról, szezonális programjainkról és levendulás újdonságainkról!
                </Text>

                <div className={classes.controls}>
                    <TextInput
                        placeholder="Email címed"
                        classNames={{ input: classes.input, root: classes.inputWrapper }}
                        radius="md"
                        size="md"
                    />
                    <Button className={classes.control} radius="md" size="md">
                        Feliratkozom
                    </Button>
                </div>
            </div>
            <Image src={image} className={classes.image} />
        </div>
    );
}