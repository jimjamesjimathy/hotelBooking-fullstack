import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";
import Featured from "../components/Featured";
import TableList from "../components/TableList";
import Chart from "../components/Chart";

const Home = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flex="6">
        <Navbar />
        <Box display="flex" padding="1rem" gap=".75rem">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </Box>
        <Box display="flex" padding="1rem" gap=".75rem">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </Box>
        <Box
          padding="1rem"
          margin="1rem"
          boxShadow="2px 4px 10px 1px rgba(0, 0, 0, 0.3)"
        >
          <Typography variant="h4">Latest Transactions</Typography>
          <TableList />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
