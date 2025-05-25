import React from 'react';
import { faker } from '@faker-js/faker';
import { Box, Stack, Avatar, Badge, Typography, IconButton, Divider, TextField, InputAdornment } from '@mui/material';
import { styled, useTheme } from "@mui/material/styles";
import { CaretDown, LinkSimple, MagnifyingGlass, PaperPlaneTilt, Phone, SmileySticker, VideoCamera } from 'phosphor-react';
import Message from './Message';
import { dispatch } from '../../redux/store';
import { ToggleSidebar } from '../../redux/slices/app';
import { useDispatch } from 'react-redux';

const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12px",
        paddingBottom: "12px",

    }
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
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

const Conversation = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    return (
        <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
            {/* Chat Header */}
            <Box
                sx={{
                    width: "100%",
                    backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF': theme.palette.background.default,
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 2,

                }}
            >
                <Stack onClick={() => {
                    //
                    dispatch(ToggleSidebar()); 
                }} direction="row" spacing={2} alignItems="center">
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
                    </StyledBadge>
                    <Stack spacing={0.2}>
                        <Typography variant="subtitle2">
                            {faker.name.fullName()}
                        </Typography>
                        <Typography variant="caption">
                            Online
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction="row" alignItems={"center"} spacing={1}>
                    <IconButton>
                        <VideoCamera />
                    </IconButton>
                    <IconButton>
                        <Phone />
                    </IconButton>
                    <IconButton>
                        <MagnifyingGlass />
                    </IconButton>
                    <Divider orientation='vertical' flexItem />
                    <IconButton>
                        <CaretDown />
                    </IconButton>
                </Stack>
            </Box>

            {/* Msg */}
            <Box width={"100%"} sx={{ flexGrow: 1, height:"100%" ,overflowY:"scroll"}}>
                <Message />
            </Box>

            {/* Chat Footer */}
            <Box
                p={2}
                sx={{
                    width: "100%",
                    backgroundColor: theme.palette.mode === 'light' ? '#F2F0F0': theme.palette.background.default,
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                }}
            >
                {/* Footer content goes here */}
                <Stack direction="row" alignItems={"center"} spacing={3}>
                    <StyledInput fullWidth placeholder="Message..." variant="filled" InputProps={{
                        disableUnderline: true,
                        startAdornment: <InputAdornment>
                            <IconButton>
                                <LinkSimple />
                            </IconButton>
                        </InputAdornment>,
                        endAdornment: <InputAdornment>
                            <IconButton>
                                <SmileySticker />
                            </IconButton>
                        </InputAdornment>,
                    }} />
                    <Box sx={{ height: "48px", width: "48px", backgroundColor: theme.palette.primary.main, borderRadius: 1.5, }}>
                        <Stack sx={{height:"100%", width:"100%"}} alignItems="center" justifyContent="center">
                            <IconButton >
                                <PaperPlaneTilt color='white'/>
                            </IconButton>

                        </Stack>

                    </Box>

                </Stack>

            </Box>
        </Stack>
    );
};

export default Conversation;
