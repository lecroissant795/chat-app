import { Box, IconButton, Stack, Typography, InputBase, Button, Divider, Avatar, Badge } from '@mui/material';
import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { faker } from '@faker-js/faker';
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));


const ChatElement = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: 60,
                borderRadius: 1,
                backgroundColor: "white",
            }}
            p={2}
        >
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack direction="row" spacing={2}>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot">

                        <Avatar src={faker.image.avatar()} />
                    </StyledBadge>
                    <Stack spacing={0.3}>
                        <Typography variant="subtitle2">
                            Shrey
                        </Typography>
                        <Typography variant="caption">
                            Hi
                        </Typography>
                    </Stack>

                </Stack>

            </Stack>
        </Box>
    )
}


const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.background.paper, 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyleInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: "100%",
    },
}));



const Chats = () => {
    return (
        <Box sx={{
            position: "relative",
            height: "100%",
            width: 380,
            backgroundColor: "#FFE6E6",
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"
        }}>

            <Stack
                p={3} spacing={2}>
                <Stack direction="row"
                    alignItems={"center"}
                    justifyContent={"space-between"}>
                    <Typography variant='h5'>
                        Messages
                    </Typography>
                    <IconButton>
                        <CircleDashed size={32} />
                    </IconButton>
                </Stack>
                <Stack sx={{ width: "100%" }}>
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass color="#709CE6" />
                        </SearchIconWrapper>
                        <StyleInputBase
                            placeholder="Search…"
                            inputProps={{ "aria-label": "search" }}
                        />
                    </Search>
                </Stack>
                <Stack spacing={1}>
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={1.5}
                    >
                        <ArchiveBox size={24} />
                        <Button>Archive</Button>

                    </Stack>
                    <Divider />
                </Stack>
                <Stack direction="column">
                    <ChatElement />
                </Stack>
            </Stack>
        </Box>

    )
}

export default Chats 