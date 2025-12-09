import React, {useState} from "react";
import {
    Box, Button, Divider, Grid, Group, Radio, Skeleton, Stack,
    Text, TextInput, Title
} from '@mantine/core';
import {
    IconBuildingStore, IconHelpSquareRounded, IconHelpSquareRoundedFilled, IconInfoSquareRounded,
    IconPackage, IconPackageExport, IconPigMoney, IconPlus,
    IconRosetteDiscount,
    IconShoppingBagDiscount,
    IconTruckDelivery
} from "@tabler/icons-react";
import classes from "~/styles/Cart.module.css"

export const products_mock = [
    {
        title: 'Levendulás eperlekvár (450g)',
        description: 'Nagyon finom izű lekvár',
        image: 'https://placehold.co/600x400',
        category: 'LEKVÁR',
        quantity: 2,
    },
    {
        title: 'Levendulás áfonyalekvár (210g)',
        description: 'Ez is egy finom lekvár - az áfonyát mindenki szereti',
        image: 'https://placehold.co/600x400',
        category: 'LEKVÁR',
        quantity: 1,
    },
]

const shipping_data = [
    {
        name: 'Házhozszállítás',
        description: 'Kiszállít - GLS, MPL',
        price: "1690",
        icon: <IconTruckDelivery size={24} stroke={1.3} />,
    },
    {
        name: 'Csomagautomata',
        description: 'Lehetséges pontok - Foxpost, Packeta',
        price: "1290",
        icon: <IconPackageExport size={24} stroke={1.3} />,
    },
    {
        name: 'Személyes átvétel',
        description: 'Cím - 5540 Szarvas, Tanya II. 4/4',
        price: "0",
        icon: <IconBuildingStore size={24} stroke={1.3} />,
    },
];

function RadioButtonGroup() {
    const [value, setValue] = useState<string | null>(null);

    const cards = shipping_data.map((item) => (
        <Radio.Card className={classes.root} radius="md" value={item.price} key={item.name}>
            <Group wrap="nowrap" align="flex-start">
                <Radio.Indicator color={"#a058d1"} />
                <div>
                    <Text className={classes.label}>{item.name} <span className={classes.price}>- {item.price} Ft</span></Text>
                    <Group>
                        {item.icon}
                        <Text className={classes.description}>{item.description}</Text>
                    </Group>
                </div>
            </Group>
        </Radio.Card>
    ));

    return (
        <>
            <Radio.Group
                value={value}
                onChange={setValue}
                label={<Text fw={450}>Szállítás</Text>}
                description="Válassz szállítási módot - később módosítható"
            >
                <Stack pt="md" gap="xs">
                    {cards}
                </Stack>
            </Radio.Group>

            {/*<Text fz="xs" mt="md">*/}
            {/*    CurrentValue: {value || '–'}*/}
            {/*</Text>*/}
        </>
    );
}

export default function Cart() {
    return (<Box mx={"4rem"} mt={"2rem"}>
        <Grid gutter="xl" mx={"2rem"} pb={"xl"}>
            <Grid.Col span={12} pb={0}>
                <Title fw={500}>Kosár tartalma</Title>
                <Divider my={"md"} />
            </Grid.Col>
            <Grid.Col span={8}>
                <Grid.Col span={12} style={{ borderRadius: "15px", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
                    <Box mb={"sm"}>
                        <Skeleton height={"100px"} radius="md" animate={false} />
                    </Box>
                    <Box mb={2}>
                        <Skeleton height={"100px"} radius="md" animate={false} />
                    </Box>
                </Grid.Col>
            </Grid.Col>
            <Grid.Col span={4} p={0}>
                <Grid.Col span={12}>
                    <Grid.Col span={12} style={{ borderRadius: "15px", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
                        <Text size={"xl"} fw={500} mb={"md"}>Kupon</Text>
                        <Group gap={0} mb={"md"}>
                            <TextInput leftSectionPointerEvents="none"
                                       leftSection={<IconShoppingBagDiscount size={20} />}
                                       radius={"xs"}
                                       style={{ flexGrow: 1 }}
                                       placeholder="Levendula2000" />
                            <Button variant={"outline"} color={"#a058d1"} size="sm" radius={"xs"}>Felhasznál</Button>
                        </Group>
                    </Grid.Col>
                </Grid.Col>
                <Grid.Col span={12}>
                    <Grid.Col span={12} style={{ borderRadius: "15px", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
                        <Text size={"xl"} fw={500} mb={"md"}>
                            Kredit felhasználás
                            <IconHelpSquareRounded size={20} stroke={1.5} color={"#a058d1"}/> {/* TODO: Add tooltip */}
                        </Text>
                        <Group gap={0} mb={"md"}>
                            <TextInput leftSectionPointerEvents="none"
                                       leftSection={<IconPigMoney size={20} />}
                                       radius={"xs"}
                                       style={{ flexGrow: 1 }}
                                       placeholder="2000" />
                            <Button variant={"outline"} color={"#a058d1"} size="sm" radius={"xs"}>Felhasznál</Button>
                        </Group>
                    </Grid.Col>
                </Grid.Col>
                <Grid.Col span={12}>
                    <Grid.Col span={12} style={{ borderRadius: "15px", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
                        <Text size={"xl"} fw={500}>Rendelés összefoglaló</Text>
                        <Divider my={"sm"} />
                        <Group justify={"space-between"}>
                            <Text>Részösszeg (2 termék)</Text>
                            <Text>3490 Ft</Text>
                        </Group>
                        <Divider my={"sm"} />
                        { RadioButtonGroup() }
                        <Divider my={"sm"} />
                        <Group justify={"space-between"}>
                            <Text>Utánvét</Text>
                            <Text>490 Ft</Text>
                        </Group>
                        <Divider my={"sm"} />
                        <Group justify={"space-between"}>
                            <Text>Áfa (0%)</Text>
                            <Text>0 Ft</Text>
                        </Group>
                        {/*<Divider my={"sm"} />*/}
                        {/*<Group justify={"space-between"}>*/}
                        {/*    <Text>Kupon</Text> /!* TODO: make this appear/hide this dynamically*!/*/}
                        {/*    <Text>-0 Ft</Text>*/}
                        {/*</Group>*/}
                        {/*<Divider my={"sm"} />*/}
                        {/*<Group justify={"space-between"}>*/}
                        {/*    <Text>E-kredit felhasználás</Text> /!* TODO: make this appear/hide this dynamically*!/*/}
                        {/*    <Text>-0 Ft</Text>*/}
                        {/*</Group>*/}
                        <Divider my={"sm"} />
                        <Group justify={"space-between"} mb={"sm"}>
                            <Text>Végösszeg</Text>
                            <Text fw={500}>3450 Ft</Text>
                        </Group>
                        <Button variant={"filled"} color={"#a058d1"} size="sm" radius={"md"} fullWidth>
                            Tovább a fizetéshez
                        </Button>
                    </Grid.Col>
                </Grid.Col>
            </Grid.Col>
        </Grid>
    </Box>)
}