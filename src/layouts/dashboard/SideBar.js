import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import Logo from "../../assets/Images/send-it-logo.png";
import { Nav_Buttons } from "../../data";
import { Gear, SignOut } from "phosphor-react";
import { faker } from '@faker-js/faker';
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";
import { useNavigate } from "react-router-dom";

const getPath = (index) => {
    switch (index) {
        case 0:
            return "/app";
        case 1:
            return "/contact";
        case 2:
            return "/call";
        case 3:
            return "/settings";
        default:
            return "/"; // Provide a fallback route
    }
};

const Sidebar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [selected, setSelected] = useState(0);
    const { onToggleMode } = useSettings();

    return (
        <Box
            padding={2}
            sx={{
                backgroundColor: theme.palette.mode === 'light' ? '#F6C7C7' : '#515F7E',
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                height: "100vh",
                width: "90px",
            }}>
            <Stack
                direction="column"
                alignItems={"center"}
                justifyContent={"space-between"}
                sx={{ height: "100%" }}
                spacing={3}>
                <Stack
                    alignItems={"center"}
                    spacing={7}
                >
                    <Box sx={{
                        height: 50,
                        width: 50,
                        borderRadius: 1.5,
                    }}>
                        <img src={Logo} alt="" />
                    </Box>
                    <Stack sx={{ width: "max-content" }} direction="column" alignItems="center" spacing={5}>
                        {Nav_Buttons.map((el) => (
                            el.index === selected ?
                                <Box
                                    p={1}
                                    sx={{
                                        backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.lighter : '#394769',
                                        borderRadius: 1.5
                                    }}
                                    key={el.index}
                                >
                                    <IconButton
                                        sx={{ width: "max-content", color: theme.palette.mode === 'light' ? 'black' : 'white' }}
                                    >
                                        {el.icon}
                                    </IconButton>
                                </Box>
                                : (
                                    <IconButton
                                        onClick={() => {
                                            setSelected(el.index);
                                            navigate(getPath(el.index));
                                        }}
                                        sx={{ width: "max-content", color: theme.palette.mode === 'light' ? 'black' : 'white' }}
                                        key={el.index}
                                    >
                                        {el.icon}
                                    </IconButton>
                                )
                        ))}
                    </Stack>
                    <Divider sx={{ width: "48px" }} />
                    <IconButton
                        onClick={() => {
                            setSelected(3); // Assuming the Gear icon is linked to the "settings" page
                            navigate(getPath(3)); // Navigate to the settings page
                        }}
                        sx={{ width: "max-content", color: theme.palette.mode === 'light' ? 'black' : 'white' }} 
                    >
                        <Gear />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            navigate("auth/login"); // Navigate to the settings page
                        }}
                        sx={{ width: "max-content", color: theme.palette.mode === 'light' ? 'black' : 'white' }} 
                    >
                        <SignOut />
                    </IconButton>
                </Stack>
                <Stack spacing={4} alignItems={"center"}>
                    <AntSwitch onChange={() => {
                        onToggleMode();
                    }}
                        defaultChecked />
                    <Avatar
                    onClick={() => {
                        navigate("/profile"); // Navigate to the settings page
                    }}
                     src={faker.image.avatar()} />
                </Stack>
            </Stack>
        </Box>
    );
};

export default Sidebar; 