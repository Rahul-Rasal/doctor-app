// React Imports
import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
// MUI Imports
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
// React Icons
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface DashboardProps {
  children: ReactNode;
}

export default function Navbar({ children }: DashboardProps) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const location = useLocation();

  const routes = [
    { text: "Home", icon: IoHomeOutline, path: "/" },
    {
      text: "Appointments",
      icon: IoDocumentTextOutline,
      path: "/appointments",
    },
    { text: "Apply Doctor", icon: FaUserDoctor, path: "/apply-doctor" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ background: "#fafbfd", color: "#515b68" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <FaAnglesRight />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Salman Muazam
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ cursor: "pointer" }}>
              <Tooltip title="Notifications" placement="top">
                <div>
                  <IoNotificationsCircleOutline style={{ fontSize: "25px" }} />
                </div>
              </Tooltip>
            </Box>
            <Box sx={{ cursor: "pointer" }}>
              <Tooltip title="Logout" placement="top">
                <div>
                  <RiLogoutCircleLine style={{ fontSize: "23px" }} />
                </div>
              </Tooltip>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ marginLeft: "20px", fontWeight: "600", fontSize: "20px" }}>
            MD Clinic
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <FaAnglesLeft /> : <FaAnglesRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ margin: "0 18px" }}>
          {routes.map((route, index) => (
            <ListItem
              key={route.text}
              disablePadding
              sx={{
                backgroundColor:
                  location.pathname === route.path ? "#eff1f7" : "inherit",
                borderRadius: "10px",
              }}
            >
              <ListItemButton component={Link} to={route.path}>
                <ListItemIcon>{React.createElement(route.icon)}</ListItemIcon>
                <ListItemText primary={route.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
