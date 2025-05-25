import React from 'react';
import { Divider, Stack, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const MediaMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box p={1.5} sx={{
        backgroundColor: el.incoming
          ? theme.palette.background.default
          : theme.palette.primary.light,
        borderRadius: 1.5,
        width: "max-content",
      }}>
        <Stack spacing={1}>
          <img src={el.img} alt={el.message} style={{ maxHeight: 210, borderRadius: "10px" }} />
        </Stack>
      </Box>
    </Stack>
  );
}

const ReplyMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box p={1.5} sx={{
        backgroundColor: el.incoming
          ? theme.palette.background.default
          : theme.palette.mode === "light" ? theme.palette.primary.light : theme.palette.primary.main,
        borderRadius: 1.5,
        width: "max-content",
      }}>
        <Stack spacing={2}>
          <Box p={2} direction="column" spacing={3} alignItems="center" sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}>
            <Typography variant="body2">{el.message}</Typography>
          </Box>
        </Stack>
        <Typography variant="body2" color={el.incoming ? theme.palette.text : "fff"}>
          {el.reply}
        </Typography>
      </Box>
    </Stack>
  );
}

const TextMsg = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box p={1.5} sx={{
        backgroundColor: el.incoming
          ? theme.palette.background.default
          : theme.palette.mode === "light" ? theme.palette.primary.light : theme.palette.primary.main,
        borderRadius: 1.5,
        width: "max-content",
      }}>
        <Typography variant="body2" color={el.incoming ? theme.palette.text.primary : "#ffffff"}>
          {el.message}
        </Typography>
      </Box>
    </Stack>
  );
}

const Timeline = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Divider sx={{ width: "46%" }} />
      <Typography variant='caption' sx={{ color: theme.palette.text.primary }}>{el.text}</Typography>
      <Divider sx={{ width: "46%" }} />
    </Stack>
  );
};

export { Timeline, TextMsg, MediaMsg, ReplyMsg };