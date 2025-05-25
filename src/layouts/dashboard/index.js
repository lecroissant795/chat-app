import {Stack} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useSettings from "../../hooks/useSettings";
import Sidebar from "./SideBar"


//const isAuthenticated = true; // Authentication ( true to allow user to go to app , and false to disable)

const DashboardLayout = () => {

  /*if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }*/


  return (
    <Stack direction="row">
      <Sidebar/>
      
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
