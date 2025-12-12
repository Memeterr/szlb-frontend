import React, { useState } from 'react';
import {Stepper, Button, Group, TextInput, Checkbox, Text, Anchor, Radio, Stack} from '@mantine/core';
import {
    IconAt, IconBuildingStore,
    IconCircleCheck,
    IconCreditCardPay,
    IconPackageExport, IconPhone,
    IconTruckDelivery,
    IconUser
} from "@tabler/icons-react";
import classes from "~/styles/OrderStepper.module.css";

const shipping_providers = [
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

function RadioButtonGroupShippingOptions() { /* TODO: use a parameter which should provide component to display inside the Group - maybe have a justify parameter as well - do it with AI */
    const [value, setValue] = useState<string | null>(null);

    const cards = shipping_data.map((item) => (
        <Radio.Card className={classes.root} radius="md" value={item.price} key={item.name}>
            <Group wrap="nowrap" align="flex-start">
                <Radio.Indicator color={"#a058d1"} />
                {/*<div>*/}
                    {/*<Text className={classes.label}>{item.name} <span className={classes.price}>- {item.price} Ft</span></Text>*/}
                    <Group justify={"space-between"} w={"100%"}>
                        <Text className={classes.label}>{item.name}</Text>
                        {item.icon}
                        {/*<Text className={classes.description}>{item.description}</Text>*/}
                    </Group>
                {/*</div>*/}
            </Group>
        </Radio.Card>
    ));

    return (
        <>
            <Radio.Group
                mt={"md"}
                value={value}
                onChange={setValue}
                label={<Text fw={450} size={"sm"} >Szállítási mód</Text>}
                description=""
            >
                <Stack pt="xs" gap="xs">
                    {cards}
                </Stack>
            </Radio.Group>

            {/*<Text fz="xs" mt="md">*/}
            {/*    CurrentValue: {value || '–'}*/}
            {/*</Text>*/}
        </>
    );
}

export function OrderStepper() {
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <>
            <Stepper
                completedIcon={<IconCircleCheck size={18} />}
                size={"md"}
                color={"#a058d1"}
                active={active}
                onStepClick={setActive}
                allowNextStepsSelect={false}
                pt={"md"} px={"md"}
            >
                <Stepper.Step icon={<IconUser size={16} />}>
                    <Group mt={"md"} justify={"space-between"}>
                        <Text size={"md"} fw={500}>Saját adatok</Text>
                        <Anchor variant={"gradient"} size={"sm"} href="#" target="_blank" underline="always" gradient={{from: "#a058d1", to: "#a058d1"}}>
                            Bejelentkezés
                        </Anchor>
                    </Group>

                    <Group mt={"md"} grow>
                        <TextInput
                            label="Vezetéknév"
                            placeholder="Példa"
                            required
                            radius={"md"}
                            color={"#a058d1"}
                        />
                        <TextInput
                            label="Keresztnév"
                            placeholder="Péter"
                            required
                            radius={"md"}
                            color={"#a058d1"}
                        />
                    </Group>
                    <TextInput mt={"xs"}
                        leftSectionPointerEvents="none"
                        leftSection={<IconAt size={16} />}
                        label="Email"
                        placeholder="pelda@email.com"
                        radius={"md"}
                        required
                        color={"#a058d1"}
                    />
                    <TextInput mt={"xs"}
                       leftSectionPointerEvents="none"
                       leftSection={<IconPhone size={16} />}
                       label="Telefonszám"
                       placeholder="+26 20 123 4567"
                       radius={"md"}
                       required
                       color={"#a058d1"}
                    />
                    <Checkbox mt={"lg"}
                        label="Szeretnék értesítést kapni a Szarvasi Levendula Birtok akcióiról, ezért feliratkozom a hírlevélre!"
                        color={"#a058d1"}
                    />
                </Stepper.Step>
                <Stepper.Step icon={<IconTruckDelivery size={18} />}>
                    <Text size={"md"} fw={500}>Szállítási adatok</Text>
                    {RadioButtonGroupShippingOptions()}
                    <Group mt={"md"} grow>
                        <TextInput
                            label="Irányítószám"
                            placeholder=""
                            required
                            radius={"md"}
                            color={"#a058d1"}
                        />
                        <TextInput
                            label="Város"
                            placeholder=""
                            required
                            radius={"md"}
                            color={"#a058d1"}
                        />
                    </Group>
                    <Group mt={"xs"} grow style={{"--group-child-width": ""}}>
                        <TextInput
                            label="Cím"
                            placeholder=""
                            required
                            radius={"md"}
                            color={"#a058d1"}
                            style={{ flex: 7 }}
                        />
                        <TextInput
                            label="Házszám"
                            placeholder=""
                            required
                            radius={"md"}
                            color={"#a058d1"}
                            style={{ flex: 3 }}
                        />
                    </Group>
                    Szállítási opciók
                </Stepper.Step>
                <Stepper.Step icon={<IconCreditCardPay size={18} />}
                      /*label="Utolsó lépés" description="Fizetés"*/
                >
                    Step 3 content
                </Stepper.Step>
                <Stepper.Completed>
                    Completed, click back button to get to previous step
                </Stepper.Completed>
            </Stepper>

            <Group justify={ active !== 0 ? "space-between" : "flex-end"} mt="xl" px={"md"}>
                {active !== 0 &&
                    (<Button color={"#a058d1"} variant="outline" onClick={prevStep}>Vissza</Button>)
                }
                <Button color={"#a058d1"} onClick={nextStep}>Tovább</Button>
            </Group>
        </>
    );
}