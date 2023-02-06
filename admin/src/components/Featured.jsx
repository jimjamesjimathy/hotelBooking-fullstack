import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { Box, Typography } from "@mui/material";

const Featured = () => {
  return (
    <Box
      flex="2"
      padding=".5rem"
      boxShadow="2px 4px 10px 1px rgba(0, 0, 0, 0.5)"
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">Total Revenue</Typography>
        <MoreVertIcon />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="1rem"
      >
        <Box width="100px" height="100px">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </Box>
        <Typography variant="h4">Total sales made today</Typography>
        <Typography>$420</Typography>
        <Typography textAlign="center">
          Previous transactions processing. Last payments may not be included.
        </Typography>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box textAlign="center">
            <Box>Target</Box>
            <Box
              className="itemResult negative"
              display="flex"
              alignItems="center"
              marginTop=".5rem"
              sx={{
                "&.positive": {
                  color: "green",
                },
                "&.negative": {
                  color: "red",
                },
              }}
            >
              <KeyboardArrowDownIcon />
              <Box className="resultAmount">$12.4k</Box>
            </Box>
          </Box>
          <Box textAlign="center">
            <Box>Last Week</Box>
            <Box
              className="itemResult positive"
              display="flex"
              alignItems="center"
              marginTop=".5rem"
              sx={{
                "&.positive": {
                  color: "green",
                },
                "&.negative": {
                  color: "red",
                },
              }}
            >
              <KeyboardArrowUpOutlinedIcon />
              <Box className="resultAmount">$12.4k</Box>
            </Box>
          </Box>
          <Box textAlign="center">
            <Box>Last Month</Box>
            <Box
              className="itemResult positive"
              display="flex"
              alignItems="center"
              marginTop=".5rem"
              sx={{
                "&.positive": {
                  color: "green",
                },
                "&.negative": {
                  color: "red",
                },
              }}
            >
              <KeyboardArrowUpOutlinedIcon />
              <Box className="resultAmount">$12.4k</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Featured;
