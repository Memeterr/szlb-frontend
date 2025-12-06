import {IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandYoutube} from '@tabler/icons-react';
import {ActionIcon, Container, Group, Image, Text} from '@mantine/core';
// import { MantineLogo } from '@mantinex/mantine-logo';
import logo from '~/images/logo.png'
import classes from '~/styles/FooterLinks.module.css';

const data = [
    {
        title: 'Rólunk',
        links: [
            { label: 'Bemutatkozás', link: '/rolunk' },
            { label: 'Levendula fajták', link: '/levendula-tortenete' },
            { label: 'Kapcsolat', link: '/kapcsolat' },
            { label: 'GYIK', link: '/gyik' },
        ],
    },
    {
        title: 'Webshop',
        links: [
            { label: 'Termékek', link: '/termekek' },
            { label: 'Akciók', link: '/akciok' },
            { label: 'Szállítás és fizetés', link: '/szallitas-fizetes' },
        ],
    },
    {
        title: 'Közösség & Programok',
        links: [
            { label: 'Levendulaszüret', link: '/programok/levendulaszuret' },
            { label: 'Családi napok', link: '/programok/workshopok' },
            { label: 'Nyereményjátékok', link: '/nyeremenyjatek' },
            { label: 'Hírlevél feliratkozás', link: '/hirlevel' },
        ],
    },
];

export function FooterLinks() {
    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text<'a'>
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </Text>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <Image h="70" w="auto" fit="contain"
                           src={logo}
                           alt="Levendula Birtok Logo"
                    />

                    <Text size="xs" c="dimmed" className={classes.description}>
                        Fedezd fel programjainkat, kézműves termékeinket és a levendulamező varázsát!
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text c="dimmed" size="sm">
                    © 2026 Szarvasi Levendula Birtok. Minden jog fenntartva.
                </Text>

                <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandInstagram size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandFacebook size={18} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}