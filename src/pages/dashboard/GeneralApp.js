import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import {useTheme} from  "@mui/material/styles";
import { useSelector } from "react-redux";


const GeneralApp = () => {
  const theme = useTheme();
  const {sidebar} = useSelector((store) => store.app) 

  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* Chats */}


        <Chats />


        <Box sx={{ height: "100%",
         width: sidebar.open ?  "calc(102vw - 705px)" : "calc(102vw - 420px)", 
         backgroundColor: theme.palette.mode === 'light' ? '#F2F0F0': "#1B2129", }}>
        {/* Conversation */}
        <Conversation />
       
        </Box>
        {/* Contact */}
        {sidebar.open && <Contact />}
        



      </Stack>



    </>
  );
};

export default GeneralApp;
