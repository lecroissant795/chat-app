import { Box, Stack } from '@mui/material';
import React from 'react';
import { Chat_History } from '../../data';
import { Timeline, TextMsg, MediaMsg, ReplyMsg } from './MsgTypes';

const Message = () => {
    return (
        <Box p={3}>
            <Stack spacing={3}>
                {Chat_History.map((el, index) => {
                    switch (el.type) {
                        case "divider":
                            // Timeline
                            return <Timeline key={index} el={el} />;
                        case "msg":
                            switch (el.subtype) {
                                case "img":
                                    // img msg
                                    return <MediaMsg el={el} />;
                                    
                                case "reply":
                                    // reply msg
                                    return <ReplyMsg el={el}/>;
                                default:
                                    // text msg
                                    return <TextMsg key={index} el={el} />;
                            }
                            break;
                        default:
                            return <React.Fragment key={index}></React.Fragment>;
                    }
                })}
            </Stack>
        </Box>
    );
};

export default Message;
