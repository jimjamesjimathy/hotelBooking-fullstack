import {
  Box,
  Typography,
  useMediaQuery,
  Button,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const { user, loading, error, dispatch } = useContext(AuthContext);
  const theme = useTheme();

  const handleClick = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <FlexBetween sx={{ backgroundColor: theme.palette.blue.fifth }}>
      <FlexBetween width="100%" padding="1rem 3%">
        <Box>
          <Link style={{ textDecoration: "none" }} to="/">
            <Typography
              variant="h4"
              fontWeight="600"
              color={theme.palette.background.main}
            >
              Jam <span style={{ color: theme.palette.gold.fifth }}>\\</span>{" "}
              Booking
            </Typography>
          </Link>
        </Box>
        {isNonMobile ? (
          <FlexBetween>
            {user ? (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                gap="2rem"
              >
                <Typography fontWeight="500" color={theme.palette.primary.main}>
                  {user.username}
                </Typography>
                <Button onClick={handleClick} sx={{ color: "#FFFFFF" }}>
                  Log out
                </Button>
                <DarkMode />
              </Box>
            ) : (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                gap="3rem"
              >
                <Link
                  style={{
                    padding: "0 .7rem",
                    textDecoration: "none",
                  }}
                  to="/login"
                >
                  <Typography
                    color={theme.palette.primary.main}
                    fontSize="1rem"
                    fontWeight={theme.palette.mode === "dark" ? "500" : "bold"}
                  >
                    Log In
                  </Typography>
                </Link>
                <Link
                  style={{
                    padding: "0 .7rem",
                    textDecoration: "none",
                  }}
                  to="/"
                >
                  <Typography
                    color={theme.palette.primary.main}
                    fontSize="1rem"
                    fontWeight={theme.palette.mode === "dark" ? "500" : "bold"}
                  >
                    Register
                  </Typography>
                </Link>
                <DarkMode />
              </Box>
            )}
          </FlexBetween>
        ) : (
          <Box display="flex" alignItems="center" gap=".5rem">
            <DarkMode />
            <MenuOpenOutlinedIcon
              onClick={() => setNavOpen(!navOpen)}
              sx={{ fontSize: "2rem", cursor: "pointer" }}
            />
            <Box
              position="fixed"
              top="5em"
              right="0"
              height="100vh"
              width="55%"
              display={navOpen ? "flex" : "none"}
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap="5rem"
              zIndex="9"
            >
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h1"
                  fontWeight="500"
                  color={theme.palette.primary.main}
                >
                  Log In
                </Typography>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h1"
                  fontWeight="500"
                  color={theme.palette.primary.main}
                >
                  Register
                </Typography>
              </Link>
            </Box>
          </Box>
        )}
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
