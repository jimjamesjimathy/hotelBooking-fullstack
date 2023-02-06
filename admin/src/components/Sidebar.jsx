import {
  Box,
  Typography,
  List,
  ListItem,
  Divider,
  useTheme,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import DarkMode from "../components/DarkMode";

const Sidebar = () => {
  const theme = useTheme();

  return (
    <Box flex="1" minHeight="100vh" sx={{ borderRight: "1px solid #999" }}>
      <Box
        height="100%"
        maxHeight="5.8em"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderBottom="1px solid #999"
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography fontSize="1.3rem">Jam || Admin</Typography>
        </Link>
      </Box>
      <Divider />
      <Box paddingLeft="1rem">
        <List>
          <Typography
            fontSize="1rem"
            fontWeight="bold"
            color="#999"
            marginTop="1rem"
            marginBottom=".5rem"
          >
            MAIN
          </Typography>
          <Link to="/" style={{ textDecoration: "none" }}>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#F5F5F5",
                },
              }}
            >
              <DashboardIcon
                fontSize="large"
                sx={{ color: theme.palette.accent.fifth }}
              />
              <Typography fontWeight="700" fontSize=".85rem" color="#999">
                Dashboard
              </Typography>
            </ListItem>
          </Link>
          <Typography
            fontSize="1rem"
            fontWeight="bold"
            color="#999"
            marginTop="1rem"
            marginBottom=".5rem"
          >
            LISTS
          </Typography>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#F5F5F5",
                },
              }}
            >
              <PersonOutlineIcon
                fontSize="large"
                sx={{ color: theme.palette.accent.fifth }}
              />
              <Typography fontWeight="700" fontSize=".85rem" color="#999">
                Users
              </Typography>
            </ListItem>
          </Link>
          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#F5F5F5",
                },
              }}
            >
              <StoreIcon
                fontSize="large"
                sx={{ color: theme.palette.accent.fifth }}
              />
              <Typography fontWeight="700" fontSize=".85rem" color="#999">
                Hotels
              </Typography>
            </ListItem>
          </Link>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#F5F5F5",
                },
              }}
            >
              <CreditCardIcon
                fontSize="large"
                sx={{ color: theme.palette.accent.fifth }}
              />
              <Typography fontWeight="700" fontSize=".85rem" color="#999">
                Rooms
              </Typography>
            </ListItem>
          </Link>
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#F5F5F5",
              },
            }}
          >
            <LocalShippingIcon
              fontSize="large"
              sx={{ color: theme.palette.accent.fifth }}
            />
            <Typography fontWeight="700" fontSize=".85rem" color="#999">
              Delivery
            </Typography>
          </ListItem>
          <Typography
            fontSize="1rem"
            fontWeight="bold"
            color="#999"
            marginTop="1rem"
            marginBottom=".5rem"
          >
            USEFUL
          </Typography>
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#F5F5F5",
              },
            }}
          >
            <InsertChartIcon
              fontSize="large"
              sx={{ color: theme.palette.accent.fifth }}
            />
            <Typography fontWeight="700" fontSize=".85rem" color="#999">
              Stats
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#F5F5F5",
              },
            }}
          >
            <NotificationsNoneIcon
              fontSize="large"
              sx={{ color: theme.palette.accent.fifth }}
            />
            <Typography fontWeight="700" fontSize=".85rem" color="#999">
              Notifications
            </Typography>
          </ListItem>
          <Typography
            fontSize="1rem"
            fontWeight="bold"
            color="#999"
            marginTop="1rem"
            marginBottom=".5rem"
          >
            SERVICE
          </Typography>
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#F5F5F5",
              },
            }}
          >
            <SettingsSystemDaydreamOutlinedIcon
              fontSize="large"
              sx={{ color: theme.palette.accent.fifth }}
            />
            <Typography fontWeight="700" fontSize=".85rem" color="#999">
              System Health
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#F5F5F5",
              },
            }}
          >
            <PsychologyOutlinedIcon
              fontSize="large"
              sx={{ color: theme.palette.accent.fifth }}
            />
            <Typography fontWeight="700" fontSize=".85rem" color="#999">
              Logs
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#F5F5F5",
              },
            }}
          >
            <SettingsApplicationsIcon
              fontSize="large"
              sx={{ color: theme.palette.accent.fifth }}
            />
            <Typography fontWeight="700" fontSize=".85rem" color="#999">
              Settings
            </Typography>
          </ListItem>
          <Typography
            fontSize="1rem"
            fontWeight="bold"
            color="#999"
            marginTop="1rem"
            marginBottom=".5rem"
          >
            USER
          </Typography>
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#F5F5F5",
              },
            }}
          >
            <AccountCircleOutlinedIcon
              fontSize="large"
              sx={{ color: theme.palette.accent.fifth }}
            />
            <Typography fontWeight="700" fontSize=".85rem" color="#999">
              Profile
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#F5F5F5",
              },
            }}
          >
            <ExitToAppIcon
              fontSize="large"
              sx={{ color: theme.palette.accent.fifth }}
            />
            <Typography fontWeight="700" fontSize=".85rem" color="#999">
              Logout
            </Typography>
          </ListItem>
        </List>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <DarkMode />
      </Box>
    </Box>
  );
};

export default Sidebar;
