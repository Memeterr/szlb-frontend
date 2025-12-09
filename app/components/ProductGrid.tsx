import {
    Box,
    Text,
    Grid,
    Group,
    Pagination,
    SimpleGrid,
    Skeleton,
    Title,
    Divider,
    Fieldset,
    Checkbox,
    Chip, ActionIcon, Button, Image, Switch, Select, Rating, type SelectProps
} from '@mantine/core';
import React from "react";
import classes from "~/styles/FeaturesGrid.module.css";
import {ProductCard} from "~/components/ProductCard";
import {
    IconSquareX,
    IconSortAscendingLetters,
    IconSortDescendingLetters,
    IconTrendingUp,
    IconThumbUp, IconTrendingDown, IconCheck, IconFilter
} from "@tabler/icons-react";
import image from "~/images/creative_work2.png";
import banner_image from "~/images/webshop_banner3.png";

const iconProps = {
    stroke: 1.5,
    color: 'currentColor',
    opacity: 0.6,
    size: 18,
};

const icons: Record<string, React.ReactNode> = {
    popularity: <IconThumbUp {...iconProps} />,
    price_asc: <IconTrendingUp {...iconProps} />,
    price_desc: <IconTrendingDown {...iconProps} />,
    a_z_desc: <IconSortDescendingLetters {...iconProps} />,
    a_z_asc: <IconSortAscendingLetters {...iconProps} />,
};

const renderSelectOption: SelectProps['renderOption'] = ({ option, checked }) => (
    <Group flex="1" gap="xs">
        {icons[option.value]}
        {option.label}
        {checked && <IconCheck style={{ marginInlineStart: 'auto' }} {...iconProps} />}
    </Group>
);

export const products_mock = [
    {
        title: 'Levendulás eperlekvár',
        description: 'Szedd saját kezűleg a friss levendulát, és vigyél haza egy darabot a nyárból!',
        image: 'https://placehold.co/600x400',
        category: 'LEKVÁR',
        stock: 12,
    },
    {
        title: 'Levendulás áfonyalekvár (210g)',
        description: 'Készíts levendulás illatzsákot, koszorút vagy szappant családoddal, barátaiddal.',
        image: 'https://placehold.co/600x400',
        category: 'LEKVÁR',
        stock: 2,
    },
    {
        title: 'Levendulás áfonyalekvár (540g)',
        description: 'Készíts levendulás illatzsákot, koszorút vagy szappant családoddal, barátaiddal.',
        image: 'https://placehold.co/600x400',
        category: 'LEKVÁR',
        stock: 0,
    },
    {
        title: 'Levendula szörp',
        description: 'Kóstold meg levendulás szörpjeinket, süteményeinket és egyéb különlegességeinket.',
        image: 'https://placehold.co/600x400',
        category: 'SZÖRP',
        stock: 12,
    },
    {
        title: 'Szempárna',
        description: 'Pihenj a természetben, élvezd a levendulamező nyugalmát és a friss levegőt.',
        image: 'https://placehold.co/600x400',
        category: 'SZEMPÁRNA',
        stock: 1,
    },
    {
        title: 'Illatzsák',
        description: 'Gyerekeknek és felnőtteknek egyaránt kínálunk szórakoztató és tartalmas programokat.',
        image: 'https://placehold.co/600x400',
        category: 'ILLATZSÁK',
        stock: 6,
    },
    {
        title: 'Illatzsák (cica alakú)',
        description: 'Vásárolj kézműves levendulás termékeket, ajándéktárgyakat és emlékeket.',
        image: 'https://placehold.co/600x400',
        category: 'ILLATZSÁK',
        stock: 3,
    },
    {
        title: 'Illatzsák (mintás #1)',
        description: 'Vásárolj kézműves levendulás termékeket, ajándéktárgyakat és emlékeket.',
        image: 'https://placehold.co/600x400',
        category: 'ILLATZSÁK',
        stock: 3,
    },
    {
        title: 'Illatzsák (mintás #2)',
        description: 'Vásárolj kézműves levendulás termékeket, ajándéktárgyakat és emlékeket.',
        image: 'https://placehold.co/600x400',
        category: 'ILLATZSÁK',
        stock: 3,
    },
];

export function ProductGrid() {
    return (
        <Box mx={"4rem"} mt={"2rem"}>
            <Grid gutter="md">
                <Grid.Col m={"0"} span={3} style={{maxHeight: "300px"}}>
                    {/* TODO: generate/create artstyle picture here with correct aspect ratio */}
                    <Image h={"100%"} w={"100%"} style={{objectFit: "cover"}} src={image} alt="side-banner" />
                </Grid.Col>
                <Grid.Col span={9}>
                    <Grid.Col span={12} style={{height: "150px"}}>
                        {/*  TODO: add text above it - and generate better one */}
                        <Group h={"100%"} justify="center" align={"center"}>
                            <Title className={classes.title} fw={500} style={{
                                position: "absolute",
                                color: "black", // Change color for contrast
                                textShadow: "0 2px 8px rgba(0,0,0,0.5)", // Optional: for better readability
                                pointerEvents: "none", // Optional: allows clicks to pass through to image
                            }}>
                                Levendula Birtok Webshop
                            </Title>
                            <Image radius={"lg"} h={"100%"} w={"100%"} style={{objectFit: "cover"}} src={banner_image} alt="Banner" />
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Group align={"center"} justify={"flex-end"} pr={"sm"}>
                            <Select
                                label="Rendezés"
                                placeholder="Válassz"
                                leftSection={<IconFilter size={16} />} /* TODO: Display the selected icon  */
                                data={[
                                    { value: 'popularity', label: 'Népszerűség'},
                                    { value: 'price_asc', label: 'Drágább'},
                                    { value: 'price_desc', label: 'Olcsóbb'},
                                    { value: 'a_z_asc', label: 'A-z'},
                                    { value: 'a_z_desc', label: 'Z-a'},
                                ]}
                                defaultValue={"popularity"}
                                checkIconPosition="right"
                                renderOption={renderSelectOption}
                                style={{maxWidth: "200px"}}
                            />
                        </Group>
                    </Grid.Col>
                </Grid.Col>
                <Grid.Col span={3}>
                    <Box w={"100%"} h={"auto"}
                         style={{borderRadius: "15px", boxShadow: "0 4px 16px rgba(0,0,0,0.15)"}}>
                        <Box p={"20px"}>
                            <Text pb={"xs"} fw={500} size={"xl"}>Szűrők</Text>

                            <Box p={"sm"} mb={"md"} style={{borderRadius: "15px", boxShadow: "0 1px 4px rgba(0,0,0,0.15)"}}>
                                <Text fw={500} pb={"xs"}>Elérhetőség</Text>
                                <Switch pb={"md"} color={"#5c376e"} label="Akciós" />
                                <Switch pb={"md"} color={"#5c376e"} label="Készleten" />
                            </Box>

                            <Box p={"sm"} mb={"md"} style={{borderRadius: "15px", boxShadow: "0 1px 4px rgba(0,0,0,0.15)"}}>
                                <Text fw={500} pb={"xs"}>Vásárlói értékelések</Text>
                                <Switch pb={"md"} color={"#5c376e"} label={
                                    <Group justify={"flex-start"} gap={10}>
                                        <Rating defaultValue={4} readOnly />
                                        <Text size={"sm"}>4+</Text>
                                    </Group>
                                } />
                            </Box>

                            <Box p={"sm"} style={{borderRadius: "15px", boxShadow: "0 1px 4px rgba(0,0,0,0.15)"}}>
                                <Text fw={500} pb={"xs"}>Termék kategóriák</Text>
                                <Group p={"10px"} justify={"space-evenly"}>
                                    <Chip color={"#a058d1"} variant="light" radius="md">Lekvár</Chip>
                                    <Chip color={"#a058d1"} variant="light" radius="md">Szörp</Chip>
                                    <Chip color={"#a058d1"} variant="light" radius="md">Olaj</Chip>
                                    <Chip color={"#a058d1"} variant="light" radius="md">Illatzsák</Chip>
                                    <Chip color={"#a058d1"} variant="light" radius="md">Szempárna</Chip>
                                </Group>
                            </Box>
                        </Box>
                        <Group justify={"flex-end"}>
                            <Button size={"xs"} leftSection={<IconSquareX size={16} />} variant="outline"
                                    color={"#534659"} fullWidth radius={"md"} mb={"sm"} mx={"md"}>
                                Kiválasztott paraméterek törlése
                            </Button>
                        </Group>
                    </Box>
                </Grid.Col>
                <Grid.Col span={9}>
                    <Grid>
                        {products_mock.map((product, i) => (
                            <Grid.Col span={4}>
                                {/*<Skeleton height={"24rem"} radius="md" animate={false} />*/}
                                <Box px={"lg"} pb={"lg"}>
                                    <ProductCard
                                        title={product.title}
                                        category={product.category}
                                        image={product.image}
                                        description={product.description} />
                                </Box>
                            </Grid.Col>
                        ))}
                        <Grid.Col span={12}>
                            <Group align={"center"} justify={"center"} >
                                <Pagination total={3} siblings={2} boundaries={2} defaultValue={1} withEdges color={"#caa0ff"} />
                            </Group>
                        </Grid.Col>
                    </Grid>
                    {/*<Skeleton height={"10rem"} radius="md" animate={false} />*/}
                </Grid.Col>
            </Grid>
        </Box>
    );
}