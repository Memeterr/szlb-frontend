import {
    IconBottle,
    IconMagnet,
    IconChevronDown,
    IconEyeglass,
    IconMoneybag,
    IconVaccineBottle,
    IconNotification,
    IconMilk
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
    Image
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from '~/styles/HeaderMenu.module.css';
// import logoDark from '~/welcome/logo-light.svg'
import logo from '~/images/logo.png'

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

export function HeaderMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();

    const links = mockdata.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
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
    ));

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
                        <a href="#" className={classes.link}>
                            Kezdőlap
                        </a>
                        <a href="#" className={classes.link}>
                            Levendulaszüret
                        </a>
                        <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                            <HoverCard.Target>
                                <a href="#" className={classes.link}>
                                    <Center inline>
                                        <Box component="span" mr={5}>
                                            Termékek
                                        </Box>
                                        <IconChevronDown size={16} color={theme.colors.blue[6]} />
                                    </Center>
                                </a>
                            </HoverCard.Target>

                            <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                                <Group justify="space-between" px="md">
                                    <Text fw={500}>Termékek</Text>
                                    <Anchor href="#" fz="xs">
                                        Nézd meg az összeset
                                    </Anchor>
                                </Group>

                                <Divider my="sm" />

                                <SimpleGrid cols={2} spacing={0}>
                                    {links}
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
                                        <Button variant="outline" color={"#a058d1"}>Irány a Webshop</Button>
                                    </Group>
                                </div>
                            </HoverCard.Dropdown>
                        </HoverCard>
                        <a href="#" className={classes.link}>
                            Programok
                        </a>
                        <a href="#" className={classes.link}>
                            Rólunk
                        </a>
                    </Group>

                    <Group visibleFrom="sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
                            <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                        </svg>

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
                    <Collapse in={linksOpened}>{links}</Collapse>
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