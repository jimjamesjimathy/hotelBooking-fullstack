import avatar from "../assets/hero-cartoon.png";
import { Box, InputBase } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <Box
      height="100%"
      maxHeight="5em"
      borderBottom="1px solid #999"
      display="flex"
      alignItems="center"
      fontSize="1rem"
    >
      <Box
        width="100%"
        padding="0 3rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" gap=".5rem">
          <InputBase
            type="text"
            placeholder="Search..."
            sx={{
              border: "1px solid #999",
              padding: ".1rem .7rem",
              borderRadius: "5px",
            }}
          />
          <SearchOutlinedIcon fontSize="large" />
        </Box>
        <Box display="flex" alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            position="relative"
            gap=".3rem"
            marginRight="1rem"
          >
            <DarkMode />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            position="relative"
            gap=".3rem"
            marginRight="1rem"
          >
            <FullscreenExitOutlinedIcon />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            position="relative"
            gap=".3rem"
            marginRight="1rem"
          >
            <NotificationsNoneOutlinedIcon />
            <Box
              width="15px"
              height="15px"
              backgroundColor="red"
              borderRadius="50%"
              color="#FFF"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="10px"
              fontWeight="bold"
              position="absolute"
              top="-5px"
              right="-5px"
            >
              1
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            position="relative"
            gap=".3rem"
            marginRight="1rem"
          >
            <ChatBubbleOutlineOutlinedIcon />
            <Box
              width="15px"
              height="15px"
              backgroundColor="red"
              borderRadius="50%"
              color="#FFF"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="10px"
              fontWeight="bold"
              position="absolute"
              top="-5px"
              right="-5px"
            >
              2
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            position="relative"
            gap=".3rem"
            marginRight="1rem"
          >
            <ListOutlinedIcon />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            position="relative"
            gap=".3rem"
            marginRight="1rem"
          >
            <img
              src={avatar}
              alt=""
              style={{
                height: "2.5em",
                width: "2.5em",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
