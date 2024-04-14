import { Box, Stack } from "@mui/material"
import {useTheme} from "@mui/material/styles"
import React from "react";
import { Outlet } from "react-router-dom";

import Logo from "../../assets/Images/send-it-logo.png";
import { Nav_Buttons } from "../../data";

const DashboardLayout = () => {

  const theme = useTheme();

  console.log(theme);

  return (
    <>
     <Box 
     p={2}
     sx={{backgroundColor: theme.palette.background.paper, 
      boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", 
      height: "100vh",
       width: "100px"}}>
        <Stack direction="column" alignItems={"center"} sx={{width: "100%"}}>

        <Box sx={{
          
          height: 50,
          width: 50,
          borderRadius: 1.5,
        }}>
        <img src={Logo} alt="" />

        </Box>
        {Nav_Buttons.map((el))}
        </Stack>
     </Box> 
      <Outlet />
    </>
  );
};

export default DashboardLayout;
