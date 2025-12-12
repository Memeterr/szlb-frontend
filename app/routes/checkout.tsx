import React from "react";
import {Badge, Box, Button, Container, Divider, Grid, Group, Image, Text, TextInput, Title} from "@mantine/core";
import {IconArrowLeft, IconShoppingBagDiscount} from "@tabler/icons-react";
import classes from "~/styles/Checkout.module.css";
import {OrderStepper} from "~/components/OrderStepper";

export const products_mock = [
    {
        title: 'Levendulás eperlekvár (450g)',
        description: 'Nagyon finom izű lekvár',
        image: 'https://placehold.co/600x400',
        category: 'LEKVÁR',
        quantity: 2,
        price: 1290,
    },
    {
        title: 'Levendulás áfonyalekvár (210g)',
        description: 'Ez is egy finom lekvár - az áfonyát mindenki szereti',
        image: 'https://placehold.co/600x400',
        category: 'LEKVÁR',
        quantity: 1,
        price: 2390,
    },
]

export default function Checkout() {
    return (<Container strategy="grid" style={{display: "flex", flexDirection: "column", height: "100%"}}>

        {/* TODO: Add logo and remove header and footer */}
        <Group justify={"space-between"} align={"center"} my={"sm"} px={"320px"}>
            <Title className={classes.title} size={"h2"}>Szarvasi Levendula Birtok</Title>
            <Button justify="center" leftSection={<IconArrowLeft />} color={"#a058d1"} variant="outline">
                Vissza a kosárhoz
            </Button>
        </Group>

        <Divider />

        <Group gap={0} justify={"center"} align={"flex-start"} style={{flexGrow: 1, width: "100%"}}>
            <Box style={{ flex: 1, height: "100%" }}>
                <Box pl={"320px"}>
                    <Box p={"md"}>
                        <OrderStepper />
                    </Box>
                </Box>
            </Box>
            <Divider orientation="vertical" />
            <Box style={{ flex: 1, height: "100%", backgroundImage: "linear-gradient(-90deg, #f7f7fa 0%, #ececec 100%)" }}>
                <Box pr={"320px"}>
                    { products_mock.map((item, index) => (
                        <Group key={index} justify={"space-between"} align={"center"}>
                            <Group mt={index == 0 ? "lg" : ""} ml={"lg"} align={"flex-start"}>
                                <Box w={80} h={80} p={"xs"} style={{position: "relative"}} >
                                    <Image src="https://placehold.co/600x400" w={"100%"} h={"100%"} radius="md" />
                                    <Badge circle radius={"md"} size={"md"} color="#a058d1" style={{position: "absolute", zIndex: 1, top: 0, right: 0}} >
                                        {item.quantity}
                                    </Badge>
                                </Box>
                                <Box h={"100%"} style={{width: "300px"}}>
                                    <Text fw={450} size={"sm"}>{item.title}</Text>
                                    <Text size={"xs"} c="var(--mantine-color-dimmed)">{item.description}</Text>
                                    <Text size={"xs"} c="var(--mantine-color-dimmed)" pt={"5px"}>Egységár: {item.price} Ft</Text>
                                </Box>
                            </Group>
                            <Text fw={500} size={"md"} c="var(--mantine-color-dimmed)">{item.price * item.quantity} Ft</Text>
                        </Group>
                    ))}

                    <Box pl={"xl"} mt={"sm"}>
                        <Text size={"md"} fw={500} mb={"5px"}>Kupon</Text>
                        <Group gap={0}>
                            <TextInput leftSectionPointerEvents="none"
                                       leftSection={<IconShoppingBagDiscount size={20} />}
                                       radius={"xs"}
                                       style={{ flexGrow: 1 }}
                                       placeholder="Levendula2000" />
                            <Button variant={"outline"} color={"#a058d1"} size="sm" radius={"xs"}>Felhasznál</Button>
                        </Group>
                    </Box>

                    <Box pl={"xl"} mt={"lg"}>
                        <Group justify={"space-between"} mb={"5px"}>
                            <Text size={"md"} fw={500}>Részösszeg - 2 tétel</Text>
                            <Text size={"md"} fw={500} c="var(--mantine-color-dimmed)">3490 Ft</Text>
                        </Group>
                        <Group justify={"space-between"} mb={"5px"}>
                            <Text size={"md"} fw={500}>Utánvét</Text>
                            <Text size={"md"} fw={500} c="var(--mantine-color-dimmed)">490 Ft</Text>
                        </Group>
                        <Group justify={"space-between"} mb={"5px"}>
                            <Text size={"md"} fw={500}>Szállítás</Text>
                            <Text size={"md"} fw={500} c="var(--mantine-color-dimmed)">1290 Ft</Text>
                        </Group>
                    </Box>

                    <Box pl={"xl"} mt={"lg"}>
                        <Group justify={"space-between"}>
                            <Text size={"lg"} fw={500}>Összesen</Text>
                            <Text size={"lg"} fw={600} c="var(--mantine-color-dimmed)">5890 Ft</Text>
                        </Group>
                        <Text size={"xs"} fw={300} c="var(--mantine-color-dimmed)">0 Ft ÁFA-t tartalmaz</Text>
                    </Box>
                </Box>
            </Box>


        </Group>

    </Container>)
}