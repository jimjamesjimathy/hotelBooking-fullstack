import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const DarkMode = () => {
  const color = useTheme();
  const theme = useContext(ThemeContext);

  const handleMode = () => {
    if (theme.state.darkMode === "light") {
      theme.dispatch({ type: "DARKMODE" });
    } else {
      theme.dispatch({ type: "LIGHTMODE" });
    }
  };

  return (
    <Box>
      {theme.state.darkMode === "light" ? (
        <IconButton onClick={handleMode}>
          <DarkModeIcon sx={{ color: "#999" }} />
        </IconButton>
      ) : (
        <IconButton onClick={handleMode}>
          <LightModeIcon sx={{ color: color.palette.gold.fifth }} />
        </IconButton>
      )}
    </Box>
  );
};

export default DarkMode;
