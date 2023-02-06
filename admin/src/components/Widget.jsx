import { Box, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            sx={{
              alignSelf: "flex-end",
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            sx={{
              alignSelf: "flex-end",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            sx={{
              alignSelf: "flex-end",
              backgroundColor: "rgba(0, 128, 0, 0.2)",
              color: "green",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            sx={{
              alignSelf: "flex-end",
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flex="1"
      padding="0.625rem"
      borderRadius="10px"
      height="100px"
      boxShadow="2px 4px 10px 1px rgba(0, 0, 0, 0.5)"
    >
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <Typography fontWeight="1rem">{data.title}</Typography>
        <Typography fontSize="1.15rem">
          {data.isMoney && "$"} {amount}
        </Typography>
        <Typography
          sx={{
            alignSelf: "flex-end",
            width: "max-content",
            borderBottom: "1px solid #999",
          }}
        >
          {data.link}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <Box
          className="percentage positive"
          display="flex"
          alignItems="center"
          sx={{
            alignSelf: "flex-end",
            "&.positive": { color: "green" },
            "&.negative": { color: "red" },
          }}
        >
          <KeyboardArrowUpIcon />
          {diff} %
        </Box>
        {data.icon}
      </Box>
    </Box>
  );
};

export default Widget;
