import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { ArrowRight as ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import { CalendarBlank as CalendarBlankIcon } from '@phosphor-icons/react/dist/ssr/CalendarBlank';
import { DotsThree as DotsThreeIcon } from '@phosphor-icons/react/dist/ssr/DotsThree';
import { CheckCircle as CheckCircleIcon } from '@phosphor-icons/react/dist/ssr/CheckCircle';
import { Clock as ClockIcon } from '@phosphor-icons/react/dist/ssr/Clock';
import { Minus as MinusIcon } from '@phosphor-icons/react/dist/ssr/Minus';

import { dayjs } from '@/lib/dayjs';
import { Circle } from '@phosphor-icons/react';
import { chateauGreen, nevada, tomatoOrange } from '@/styles/farben/farben';

export interface StatusOverview {
  id: string;
  title: string;
  running: boolean;
  description: string;
  lastUpdated: Date;
}

export function StatusOverviews({ esps }: StatusOverviewsProps): React.JSX.Element {
  return (
    <Card>
      <CardHeader
        action={
          <IconButton>
            <DotsThreeIcon weight="bold" />
          </IconButton>
        }
        avatar={
          <Avatar>
            <CalendarBlankIcon fontSize="var(--Icon-fontSize)" />
          </Avatar>
        }
        subheader="Basierend auf den letzten Aktivitäten"
        title="ESP Status Übersicht"
      />
      <CardContent sx={{ py: '8px' }}>
        <List disablePadding>
          {esps.map((esp) => (
            <StatusOverviewItem esp={esp} key={esp.id} />
          ))}
        </List>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="secondary" endIcon={<ArrowRightIcon />} size="small">
          Alle ESPs
        </Button>
      </CardActions>
    </Card>
  );
}

export interface StatusOverviewItemProps {
  esp: StatusOverview;
}

export const ESPmapping = {
    active: { label: 'Aktiv', icon: <CheckCircleIcon color={chateauGreen.main} weight="fill" /> },
    inactive: { label: 'Inaktiv', icon: <MinusIcon color={tomatoOrange.main} /> },
    } as const;

function StatusOverviewItem({ esp }: StatusOverviewItemProps): React.JSX.Element {
    const mapping = esp.running ? ESPmapping.active : ESPmapping.inactive;
  return (
    <ListItem disableGutters key={esp.id}>
      <ListItemAvatar>
        <Box
          sx={{
            bgcolor: 'var(--mui-palette-background-level1)',
            borderRadius: 1.5,
            flex: '0 0 auto',
            p: '4px 8px',
            textAlign: 'center',
          }}
        >
          <Typography variant="caption">{dayjs(esp.lastUpdated).format('MMM').toUpperCase()}</Typography>
          <Typography variant="h6">{dayjs(esp.lastUpdated).format('D')}</Typography>
        </Box>
      </ListItemAvatar>
      <ListItemText
        disableTypography
        primary={
          <Typography noWrap variant="subtitle2">
            {esp.title}
          </Typography>
        }
        secondary={
          <Typography color="text.secondary" noWrap variant="body2">
            {esp.description}
          </Typography>
        }
      />
      <Chip icon={mapping.icon} label={mapping.label} size="small" variant="outlined" />
    </ListItem>
  );
}

export interface StatusOverviewsProps {
  esps: StatusOverview[];
}
