import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation";


const GeneralApp = () => {

  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* Chats */}


        <Chats />


        <Box sx={{ height: "100%", width: "calc(102vw - 420px)", backgroundColor: "white" }}>
        {/* Conversation */}
        <Conversation />

        </Box>
      </Stack>



    </>
  );
};

export default GeneralApp;
