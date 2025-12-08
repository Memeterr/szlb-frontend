import { IconCookie, IconPlant2, IconTrees, IconFriends, IconPalette, IconGift } from '@tabler/icons-react';
import { Container, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from '~/styles/FeaturesGrid.module.css';

export const MOCKDATA = [
    {
        icon: IconPlant2,
        title: 'Levendulaszüret',
        description:
            'Szedd saját kezűleg a friss levendulát, és vigyél haza egy darabot a nyárból!',
    },
    {
        icon: IconPalette,
        title: 'Kézműves foglalkozások',
        description:
            'Készíts levendulás illatzsákot, koszorút vagy szappant családoddal, barátaiddal.',
    },
    {
        icon: IconCookie,
        title: 'Helyi finomságok',
        description:
            'Kóstold meg levendulás szörpjeinket, süteményeinket és egyéb különlegességeinket.',
    },
    {
        icon: IconTrees,
        title: 'Nyugodt környezet',
        description:
            'Pihenj a természetben, élvezd a levendulamező nyugalmát és a friss levegőt.',
    },
    {
        icon: IconFriends,
        title: 'Családi programok',
        description:
            'Gyerekeknek és felnőtteknek egyaránt kínálunk szórakoztató és tartalmas programokat.',
    },
    {
        icon: IconGift,
        title: 'Ajándékbolt',
        description:
            'Vásárolj kézműves levendulás termékeket, ajándéktárgyakat és emlékeket.',
    },
];

interface FeatureProps {
    icon: React.FC<any>;
    title: React.ReactNode;
    description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
    return (
        <div>
            <ThemeIcon variant="light" size={40} radius={40} color={"#a058d1"}>
                <Icon size={18} stroke={1.5} />
            </ThemeIcon>
            <Text mt="sm" mb={7}>
                {title}
            </Text>
            <Text size="sm" c="dimmed" lh={1.6}>
                {description}
            </Text>
        </div>
    );
}

export function FeaturesGrid() {
    const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

    return (
        <Container className={classes.wrapper}>
            <Title className={classes.title}>Amit nálunk megtalálsz</Title>

            <Container size={580} p={0}>
                <Text size="sm" className={classes.description}>
                    Fedezd fel programjainkat, szolgáltatásainkat és a levendula birtok különleges élményeit!
                    Nálunk minden korosztály megtalálja a számára legkedvesebb kikapcsolódást.
                </Text>
            </Container>

            <SimpleGrid
                mt={60}
                cols={{ base: 1, sm: 2, md: 3 }}
                spacing={{ base: 'xl', md: 50 }}
                verticalSpacing={{ base: 'xl', md: 50 }}
            >
                {features}
            </SimpleGrid>
        </Container>
    );
}