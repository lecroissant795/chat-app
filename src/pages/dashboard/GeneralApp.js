import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation";
import {useTheme} from  "@mui/material/styles";


const GeneralApp = () => {
  const theme = useTheme();

  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* Chats */}


        <Chats />


        <Box sx={{ height: "100%",
         width: "calc(102vw - 420px)", 
         backgroundColor: theme.palette.mode === 'light' ? '#F2F0F0': "#1B2129", }}>
        {/* Conversation */}
        <Conversation />
       
        </Box>
      </Stack>



    </>
  );
};

export default GeneralApp;
