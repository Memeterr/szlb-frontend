import { Carousel } from '@mantine/carousel';
import {Box, Button, Container, Divider, Paper, Text, Title, useMantineTheme} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from '~/styles/CardsCarousel.module.css';
import {ProductCard} from "~/components/ProductCard";

interface CardProps {
    image: string;
    title: string;
    category: string;
}

function Card({ image, title, category }: CardProps) {
    return (
        <ProductCard title={title} category={category} image={image} description="Sample description" />
        // <Paper
        //     shadow="md"
        //     p="xl"
        //     radius="md"
        //     style={{ backgroundImage: `url(${image})` }}
        //     className={classes.card}
        // >
        //     <div>
        //         <Text className={classes.category} size="xs">
        //             {category}
        //         </Text>
        //         <Title order={3} className={classes.title}>
        //             {title}
        //         </Title>
        //     </div>
        //     <Button variant="white" color="dark">
        //         Read article
        //     </Button>
        // </Paper>
    );
}

const data = [
    {
        image: 'https://placehold.co/600x400',
        title: 'Levendula Illatzsák',
        category: 'Illatzsák',
    },
    {
        image: 'https://placehold.co/600x400',
        title: 'Levendulás szörp',
        category: 'Szörp',
    },
    {
        image: 'https://placehold.co/600x400',
        title: 'Levendulás eperlekvár',
        category: 'Lekvár',
    },
    {
        image: 'https://placehold.co/600x400',
        title: 'Levendulás baracklekvár',
        category: 'Lekvár',
    },
    {
        image: 'https://placehold.co/600x400',
        title: 'Levendula olaj',
        category: 'Olaj',
    },
    {
        image: 'https://placehold.co/600x400',
        title: 'Mintás szempárna',
        category: 'Szempárna',
    },
];

export function CardsCarousel() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <Box>
            <Title className={classes.title2}>Kiemelt termékek</Title>
            <Divider my="md" style={{ "margin-bottom": "var(--mantine-spacing-xl)" }} />

            <Carousel
                slideSize="33.3333%"
                slideGap={50}
                controlSize={34}
                withIndicators={true}
                emblaOptions={{ loop: true, align: 'start', slidesToScroll: mobile ? 1 : 2 }}
                classNames={{
                    indicator: classes.indicator,
                    controls: classes.controls,
                    viewport: classes.viewport
            }}
            >
                {slides}
            </Carousel>
        </Box>
    );
}