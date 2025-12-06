import cx from 'clsx';
import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from '~/styles/HeroImageBackground.module.css';

export function HeroImageBackground() {
    return (
        <div className={classes.wrapper}>
            <Overlay color="#000" opacity={0.65} zIndex={1} />

            <div className={classes.inner}>
                <Title className={classes.title}>
                    Szarvasi Levendula Birtok
                </Title>

                <Container size={640}>
                    <Text size="lg" className={classes.description}>
                        Családi programok, kézműves termékek, levendulaszüret – minden, ami levendula!
                        Töltsd velünk a napot Szarvason!
                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button className={classes.control} variant="white" color={"#a058d1"} size="lg">
                        Irány a Webshop
                    </Button>
                    <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
                        Tudj meg többet rólunk
                    </Button>
                </div>
            </div>
        </div>
    );
}