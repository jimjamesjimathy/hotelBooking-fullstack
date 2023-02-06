import { Box, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Chart from "../components/Chart";
import TableList from "../components/TableList";

const Single = () => {
  return (
    <Box display="flex" width="100%">
      <Sidebar />
      <Box flex="6">
        <Navbar />
        <Box padding="20px" display="flex" gap="20px">
          <Box
            flex="1"
            padding="20px"
            boxShadow="2px 4px 10px 1px rgba(0, 0, 0, 0.5)"
            position="relative"
          >
            <Box
              position="absolute"
              top="0"
              right="0"
              padding="5px"
              borderRadius="0px 0px 0px 5px"
            >
              Edit
            </Box>
            <Typography variant="h1" sx={{ marginBottom: "20px" }}>
              Information
            </Typography>
            <Box display="flex" gap="20px">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <Box>
                <Typography variant="h3" sx={{ marginBottom: "10px" }}>
                  Jane Doe
                </Typography>
                <Box marginBottom="10px">
                  <Typography fontWeight="bold">Email:</Typography>
                  <Typography fontWeight="300">janedoe@gmail.com</Typography>
                </Box>
                <Box marginBottom="10px">
                  <Typography fontWeight="bold">Phone:</Typography>
                  <Typography fontWeight="300">+1 2345 67 89</Typography>
                </Box>
                <Box marginBottom="10px">
                  <Typography fontWeight="bold">Address:</Typography>
                  <Typography fontWeight="300">
                    Elton St. 234 Garden Yd. NewYork
                  </Typography>
                </Box>
                <Box marginBottom="10px">
                  <Typography fontWeight="bold">Country:</Typography>
                  <Typography fontWeight="300">USA</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box flex="2">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </Box>
        </Box>
        <Box
          padding="20px"
          margin="10px 20px"
          boxShadow="2px 4px 10px 1px rgba(0,0,0,0.5)"
        >
          <Typography variant="h1" sx={{ marginBottom: "20px" }}>
            Last Transactions
          </Typography>
          <TableList />
        </Box>
      </Box>
    </Box>
  );
};

export default Single;
