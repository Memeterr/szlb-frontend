import { IconBookmark, IconHeart, IconCircleArrowUpRight, IconShoppingBag } from '@tabler/icons-react';
import {ActionIcon, Avatar, Badge, Button, Card, Group, Image, Text, ThemeIcon, Tooltip} from '@mantine/core';
import { IconPackage, IconPackageOff } from '@tabler/icons-react';
import classes from '~/styles/ProductCard.module.css';

type ProductCardProps = {
    title: string;
    category: string;
    image: string;
    description: string;
}

export function ProductCard({title, category, image, description} : ProductCardProps) {
    return (
        <Card withBorder padding="lg" radius="md" className={classes.card}>
            <Card.Section mb="sm">
                <Image
                    src={image}
                    alt="Termék"
                    height={180}
                />
            </Card.Section>

            <Badge variant="light" color={"#a058d1"}>{category}</Badge>
            <Text className={classes.title}>{title}</Text>

            <Group mt="lg" mb={"lg"}>
                <Text fz="xs" c="dimmed">
                    {description}
                </Text>
            </Group>

            <Group justify="flex-end">
                <Group gap={0}>
                    <Tooltip label="Hozzáadás kívánságlistához"
                             openDelay={400}
                             withArrow
                             color={"#c28fe4"}
                    >
                        <ActionIcon variant="subtle" color="gray">
                            <IconHeart size={20} color="var(--mantine-color-red-6)" stroke={1.5} />
                        </ActionIcon>
                    </Tooltip>
                    {/*<Tooltip label="Hozzáadás kosárhoz"*/}
                    {/*         openDelay={400}*/}
                    {/*         withArrow*/}
                    {/*         color={"#c28fe4"}*/}
                    {/*>*/}
                    {/*    <ActionIcon variant="subtle" color="gray" className={classes.button} disabled={category == "Szörp"}>*/}
                    {/*        <IconShoppingBag size={20} color={category == "Szörp" ? "gray" : "var(--mantine-color-blue-6)"} stroke={1.5} />*/}
                    {/*    </ActionIcon>*/}
                    {/*</Tooltip>*/}
                    <Tooltip label="Ugrás a termék oldalra"
                             openDelay={400}
                             withArrow
                             color={"#c28fe4"}
                    >
                        <ActionIcon variant="subtle" color="gray">
                            <IconCircleArrowUpRight size={20} color="var(--mantine-color-yellow-6)" stroke={1.5} />
                        </ActionIcon>
                    </Tooltip>
                </Group>
            </Group>

            <Card.Section className={classes.footer}>

                <Group mt="5px" justify={"space-between"}>
                    <Group gap={2} align={"center"}>
                        <ThemeIcon variant="white" color={category === "Szörp" ? "red" : "green"}>
                            { category == "Szörp" ? (<IconPackageOff />) : (<IconPackage />) }
                        </ThemeIcon>
                        <Text fz="xs" c="dimmed">
                            { category == "Szörp" ? "Elfogyott" : "Készleten" }
                        </Text>
                    </Group>
                    <Button variant={"outline"} color={"#a058d1"} size="xs"
                            leftSection={<IconShoppingBag size={20}stroke={1.5} />}>
                        Kosárba
                    </Button>
                </Group>
            </Card.Section>
        </Card>
    );
}