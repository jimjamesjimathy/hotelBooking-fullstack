import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DataTable from "../components/DataTable";

const List = ({ columns }) => {
  return (
    <Box display="flex" width="100%">
      <Sidebar />
      <Box flex="6">
        <Navbar />
        <DataTable columns={columns} />
      </Box>
    </Box>
  );
};

export default List;
