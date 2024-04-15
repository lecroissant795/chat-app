import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/send-it-logo.png";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from '@faker-js/faker';

const DashboardLayout = () => {

  const theme = useTheme();

  const [selected, setSelected] = useState(0);

  console.log(theme);

  return (
    <>
      <Box
        padding={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          height: "100vh",
          width: "80px"
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
                backgroundColor: theme.palette.primary.main, 
                borderRadius: 1.5}}
                > 
                <IconButton 
                sx={{width:"max-content", color: "white"}} 
                key={el.index}
                >
                  {el.icon}
                  </IconButton>
              </Box>
              : <IconButton 
              onClick={() => setSelected(el.index)}
              sx={{width:"max-content", color: "black"}} 
              key={el.index}
              >
                {el.icon}
                </IconButton>

          ))}
          <Divider sx={{width:"48px"}}/>  
          <IconButton>
            <Gear />
          </IconButton>
          </Stack>
          </Stack>
          <Stack spacing={4} alignItems={"center"}>
            <Switch defaultChecked />
            <Avatar src={faker.image.avatar()}/>

          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
