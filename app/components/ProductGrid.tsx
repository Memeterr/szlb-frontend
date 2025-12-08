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
    Chip, ActionIcon, Button, Image, Switch, Select, Rating
} from '@mantine/core';
import React from "react";
import classes from "~/styles/FeaturesGrid.module.css";
import {ProductCard} from "~/components/ProductCard";
import {IconSquareX} from "@tabler/icons-react";
import image from "~/images/creative_work2.png";
import banner_image from "~/images/webshop_banner3.png";

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
                        <Image h={"100%"} w={"100%"} style={{objectFit: "cover"}} src={banner_image} alt="Banner" />
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Group align={"center"} justify={"flex-end"} pr={"sm"}>
                            <Select
                                label="Rendezés"
                                placeholder="Válassz"
                                data={['Népszerűség', 'Olcsóbb', 'Drágább', 'A-z', 'Z-a']}
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
                                <Group justify={"flex-start"} gap={10} pb={"md"}>
                                    <Rating defaultValue={4} readOnly />
                                    <Text size={"sm"}>4+</Text>
                                </Group>
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
                                <Group justify={"flex-end"}>
                                    <Button mt={"xs"} size={"xs"} leftSection={<IconSquareX size={16} />} variant="outline" color={"#534659"}>
                                        Kiválasztás törlése
                                    </Button>
                                </Group>
                            </Box>
                        </Box>

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