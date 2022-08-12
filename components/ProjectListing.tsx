import React from 'react';
import { Heart } from 'tabler-icons-react';
import attributes from '../components/BadgeCard/attributes.json'
import { BadgeCard } from './BadgeCard/BadgeCard';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  useMantineTheme,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
}));


export function ProjectListing() {
  return (
    <Group position="center" spacing="xs">
      <BadgeCard image={attributes.props.image}
        badges={attributes.props.badges}
        country={attributes.props.country}
        description={attributes.props.description}
        title={attributes.props.title}
      ></BadgeCard>
      <BadgeCard image={attributes.props.image}
        badges={attributes.props.badges}
        country={attributes.props.country}
        description={attributes.props.description}
        title={attributes.props.title}
      ></BadgeCard>
      <BadgeCard image={attributes.props.image}
        badges={attributes.props.badges}
        country={attributes.props.country}
        description={attributes.props.description}
        title={attributes.props.title}
      ></BadgeCard>

    </Group>
  )
}