import {
    IconBottle,
    IconMagnet,
    IconChevronDown,
    IconEyeglass,
    IconMoneybag,
    IconVaccineBottle,
    IconNotification,
    IconShoppingBag,
    IconTrash,
    IconUser,
    IconMilk, IconHeart
} from '@tabler/icons-react';
import {
    Anchor,
    Box,
    Burger,
    Button,
    Center,
    Collapse,
    Divider,
    Drawer,
    Group,
    HoverCard,
    ScrollArea,
    SimpleGrid,
    Text,
    ThemeIcon,
    UnstyledButton,
    useMantineTheme,
    Image, ActionIcon, TextInput,
    Popover, Table, NumberInput
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from '~/styles/HeaderMenu.module.css';
// import logoDark from '~/welcome/logo-light.svg'
import logo from '~/images/logo.png'
import {useState} from "react";
import {AuthenticationTitle} from "~/components/AuthenticationTitle";

const mockdata = [
    {
        icon: IconMilk,
        title: 'Lekvárok',
        description: 'Kézműves, levendulával ízesített lekvárok, melyek tökéletesek reggelihez vagy desszertekhez.',
    },
    {
        icon: IconBottle,
        title: 'Szörpök',
        description: 'Frissítő, természetes levendulaszörpök, melyek igazi különlegességet visznek a mindennapokba.',
    },
    {
        icon: IconEyeglass,
        title: 'Szempárnák',
        description: 'Levendulával töltött szempárnák a pihentető alvásért és a nyugodt pillanatokért.',
    },
    {
        icon: IconMoneybag,
        title: 'Illatzsákok',
        description: 'Kézzel készített levendulás illatzsákok, melyek kellemes illatot varázsolnak otthonodba vagy szekrényedbe.',
    },
    {
        icon: IconVaccineBottle,
        title: 'Olajok',
        description: '100% természetes levendulaolaj, aromaterápiához, masszázshoz vagy fürdőhöz.',
    },
    {
        icon: IconMagnet,
        title: 'Mágnesek',
        description: 'Levendulás motívumú hűtőmágnesek, hogy a birtok hangulatát otthonodba is elvihesd.',
    },
];

const mainLinksMockData = [
    { link: '#', label: 'Kezdőlap' },
    { link: '#', label: 'Levendulaszüret' },
    { link: '#', label: 'Termékek' },
    { link: '#', label: 'Programok' },
    { link: '#', label: 'Rólunk' },
]

export function HeaderMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const [active, setActive] = useState(0);
    const theme = useMantineTheme();

    function renderLinks(mockData: any, index: any) {
        return mockdata.map((item) => (
            <UnstyledButton className={classes.subLink} key={item.title}
                            data-active={index === active || undefined}
                            onClick={(event) => {
                                event.preventDefault();
                                setActive(index);
                            }}>
                <Group wrap="nowrap" align="flex-start">
                    <ThemeIcon size={34} variant="default" radius="md">
                        <item.icon size={22} color={"#a058d1"} />
                    </ThemeIcon>
                    <div>
                        <Text size="sm" fw={500}>
                            {item.title}
                        </Text>
                        <Text size="xs" c="dimmed">
                            {item.description}
                        </Text>
                    </div>
                </Group>
            </UnstyledButton>
        ))
    }

    const mainLinks = mainLinksMockData.map((item, index) => (
        item.label === "Termékek" ? (
            <HoverCard key={item.label} width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                    <a href={item.link}
                       className={classes.link}
                       data-active={index === active || undefined}
                       onClick={(event) => {
                           event.preventDefault();
                           setActive(index);
                       }}>
                        <Center inline>
                            <Box component="span" mr={5}>
                                {item.label}
                            </Box>
                            <IconChevronDown size={16} color={"#46106a"} />
                        </Center>
                    </a>
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                    <Group justify="space-between" px="md">
                        <Text fw={500}>Termékek</Text>
                        <Anchor href={item.link} fz="xs"
                                variant={"gradient"}
                                gradient={{ from: '#a058d1', to: '#a058d1' }}
                                data-active={index === active || undefined}
                                onClick={(event) => {
                                    event.preventDefault();
                                    setActive(index);
                                }}>
                            Nézd meg az összeset
                        </Anchor>
                    </Group>

                    <Divider my="sm" />

                    <SimpleGrid cols={2} spacing={0}>
                        {renderLinks(mockdata, index)}
                    </SimpleGrid>

                    <div className={classes.dropdownFooter}>
                        <Group justify="space-between">
                            <div>
                                <Text fw={500} fz="sm">
                                    Próbáld ki!
                                </Text>
                                <Text size="xs" c="dimmed">
                                    Fedezd fel levendulás termékeinket és különleges ajánlatainkat a Webshopban!
                                </Text>
                            </div>
                            <Button variant="outline" color={"#a058d1"}
                                    data-active={index === active || undefined}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setActive(index);}}>
                                Irány a Webshop</Button>
                        </Group>
                    </div>
                </HoverCard.Dropdown>
            </HoverCard>
        ) : (
            <Anchor<'a'>
                href={item.link}
                key={item.label}
                className={classes.link}
                data-active={index === active || undefined}
                onClick={(event) => {
                    event.preventDefault();
                    setActive(index);
                }}
            >
                {item.label}
            </Anchor>
        )
    ))

    return (
        <Box pb={60}>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    {/*<MantineLogo size={30} />*/}
                    <Image h="50" w="auto" fit="contain"
                           src={logo}
                           alt="Levendula Birtok Logo"
                    />

                    <Group h="100%" gap={0} visibleFrom="sm">
                        {mainLinks}
                    </Group>

                    <Group visibleFrom="sm">
                        <Popover width={400} trapFocus position="bottom" withArrow shadow="md">
                            <Popover.Target>
                                <ActionIcon variant="light" size="xl" radius="lg" aria-label="Felhasználó" color={"#f8f2fa"}>
                                    <IconUser color={"#46106a"} />
                                </ActionIcon>
                            </Popover.Target>
                            <Popover.Dropdown>
                                <AuthenticationTitle />
                                {/*Belépés*/}
                                {/*<TextInput label="Name" placeholder="Name" size="xs" />*/}
                                {/*<TextInput label="Email" placeholder="john@doe.com" size="xs" mt="xs" />*/}
                                {/*<Button variant="filled" color={"#a058d1"} radius={"lg"} mt={"sm"}>*/}
                                {/*    Belép*/}
                                {/*</Button>*/}
                            </Popover.Dropdown>
                        </Popover>

                        <Popover width={450} trapFocus position="bottom" withArrow shadow="md">
                            <Popover.Target>
                                <ActionIcon variant="light" size="xl" radius="lg" aria-label="Kosár" color={"#f8f2fa"}>
                                    <IconShoppingBag color="#46106a" />
                                </ActionIcon>
                            </Popover.Target>
                            <Popover.Dropdown>
                                <Text fw={700} size="lg" mb="sm">Kosár tartalma</Text>
                                <Table>
                                    <Table.Thead>
                                        <Table.Tr>
                                            <Table.Th>Termék</Table.Th>
                                            <Table.Th style={{minWidth: "105px"}}>Mennyiség</Table.Th>
                                            <Table.Th style={{minWidth: "80px"}}>Ár</Table.Th>
                                            <Table.Th></Table.Th>
                                        </Table.Tr>
                                    </Table.Thead>
                                    <Table.Tbody>
                                        <Table.Tr>
                                            <Table.Td>
                                                <Group justify="flex-start" style={{flexWrap: 'nowrap'}}>
                                                    <Image src="https://placehold.co/600x400" w={"auto"} h={40} radius="sm" />
                                                    <Text size="sm">Levendula illatzsák</Text>
                                                </Group>
                                            </Table.Td>
                                            <Table.Td>
                                                <NumberInput
                                                    variant="filled"
                                                    size="xs"
                                                    radius="xl"
                                                    defaultValue={1}
                                                    min={1}
                                                    max={100}
                                                    suffix=" db"
                                                    style={{ width: 70 }}
                                                />
                                            </Table.Td>
                                            <Table.Td>1000 Ft</Table.Td>
                                            <Table.Td>
                                                <ActionIcon variant="subtle" color="gray">
                                                    <IconTrash size={20} color="var(--mantine-color-red-6)" stroke={1.5} />
                                                </ActionIcon>
                                            </Table.Td>
                                        </Table.Tr>
                                    </Table.Tbody>
                                    <Table.Tfoot>
                                        <Table.Tr>
                                            <Table.Td colSpan={1}>
                                                <Group justify="space-evenly">
                                                    <Text fw={500}>Összesen:</Text>
                                                    <Text fw={600}>1000 Ft</Text>
                                                </Group>
                                            </Table.Td>
                                        </Table.Tr>
                                    </Table.Tfoot>
                                </Table>
                                <Group mt="md">
                                    <Button variant="default" color="gray" size="xs">Kosár ürítése</Button>
                                    <Button color="grape" size="xs">Tovább a fizetéshez</Button>
                                </Group>
                            </Popover.Dropdown>
                        </Popover>

                        {/*<Button variant="default">Log in</Button>*/}
                        {/*<Button>Sign up</Button>*/}
                    </Group>

                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h="calc(100vh - 80px" mx="-md">
                    <Divider my="sm" />

                    <a href="#" className={classes.link}>
                        Home
                    </a>
                    <UnstyledButton className={classes.link} onClick={toggleLinks}>
                        <Center inline>
                            <Box component="span" mr={5}>
                                Features
                            </Box>
                            <IconChevronDown size={16} color={theme.colors.blue[6]} />
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{renderLinks(mockdata, null)}</Collapse>
                    <a href="#" className={classes.link}>
                        Learn
                    </a>
                    <a href="#" className={classes.link}>
                        Academy
                    </a>

                    <Divider my="sm" />

                    <Group justify="center" grow pb="xl" px="md">
                        <Button variant="default">Log in</Button>
                        <Button>Sign up</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}