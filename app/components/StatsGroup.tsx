import {Box, Text} from '@mantine/core';
import classes from '~/styles/StatsGroup.module.css';

const data = [
    {
        title: 'Elégedett vásárló',
        stats: '1000+',
        description: 'Vevőink elégedettsége számunkra a legnagyobb visszaigazolás.',
    },
    {
        title: 'Egyedi termék',
        stats: '37',
        description: 'Minden termékünk különös gondossággal, kézzel készült.',
    },
    {
        title: 'Ültetett palánta',
        stats: '3,000',
        description: 'Összesen három fajta levendulával: angol, francia, fehér virágú.',
    },
];

export function StatsGroup() {
    const stats = data.map((stat) => (
        <div key={stat.title} className={classes.stat}>
            <Text className={classes.count}>{stat.stats}</Text>
            <Text className={classes.title}>{stat.title}</Text>
            <Text className={classes.description}>{stat.description}</Text>
        </div>
    ));
    return (
            <div className={classes.root}>{stats}</div>
    );
}