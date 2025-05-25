import React from 'react';
import { Box, Stack, IconButton, Typography, Avatar, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Bell, CaretLeft, Image, Info, Key, Keyboard, Lock, Note, PencilCircle } from 'phosphor-react';
import { faker } from '@faker-js/faker';

const Settings = () => {
    const theme = useTheme();

    const list = [
        {
            key: 0,
            icon: <Bell size={20} />,
            title: "Notifications",
            onclick: () => { },
        },
        {
            key: 1,
            icon: <Lock size={20} />,
            title: "Privacy",
            onclick: () => { },
        },
        {
            key: 2,
            icon: <Key size={20} />,
            title: "Security",
            onclick: () => { },
        },
        {
            key: 3,
            icon: <PencilCircle size={20} />,
            title: "Theme",
            onclick: () => { },
        },
        {
            key: 4,
            icon: <Image size={20} />,
            title: "Chat Wallpaper",
            onclick: () => { },
        },
        {
            key: 5,
            icon: <Note size={20} />,
            title: "Request Account Info",
            onclick: () => { },
        },
        {
            key: 6,
            icon: <Info size={20} />,
            title: "Help",
            onclick: () => { },
        },
    ];

    return (
        <>
            <Stack direction="row" sx={{ width: "100%" }}>
                {/* LeftPanel */}
                <Box sx={{
                    overflowY: "scroll", height: "100vh", width: 320, backgroundColor:
                        theme.palette.mode === "light" ? "#F8FAFF" :
                            theme.palette.background,
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"
                }}
                >
                    <Stack p={4} spacing={5}>
                        {/* Header */}
                        <Stack direction="row" alignItems="center" spacing={3}>
                            <IconButton>
                                <CaretLeft size={24} color={"#4B4B4B"} />
                            </IconButton>
                            <Typography variant='h6'>
                                Settings
                            </Typography>
                        </Stack>
                        {/* Profile */}
                        <Stack direction="row" spacing={3} alignItems="center">
                            <Avatar sx={{ width: 56, height: 56 }} src={faker.image.avatar()} alt={faker.name.fullName()} />
                            <Stack spacing={0.5}>
                                <Typography variant='subtitle1'>
                                    {faker.name.fullName()}
                                </Typography>
                                <Typography variant='body2' color="text.secondary">
                                    {faker.random.words()}
                                </Typography>
                            </Stack>
                        </Stack>
                        {/* List of options */}
                        <Stack spacing={3}>
                            {list.map(({ key, icon, title, onclick }) => (
                                <React.Fragment key={key}>
                                    <Stack spacing={2} sx={{ cursor: "pointer" }} onClick={onclick}>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            {icon}
                                            <Typography variant="body2">{title}</Typography>
                                        </Stack>
                                    </Stack>
                                    {key !== 6 && <Divider />}
                                </React.Fragment>
                            ))}
                        </Stack>
                    </Stack>
                </Box>
                {/* RightPanel */}
            </Stack>
        </>
    );
}

export default Settings;