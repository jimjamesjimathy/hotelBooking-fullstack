import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import useFetch from "../hooks/useFetch";
import axios from "axios";

const DataTable = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState();
  const { data, loading, error } = useFetch(`/${path}`);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <Box display="flex" alignItems="center" gap="15px">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="success"
                padding="2px 5px"
                sx={{ cursor: "pointer", boxShadow: "none" }}
              >
                View
              </Button>
            </Link>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDelete(params.row._id)}
              padding="2px 5px"
              sx={{ cursor: "pointer", boxShadow: "none" }}
            >
              Delete
            </Button>
          </Box>
        );
      },
    },
  ];
  return (
    <Box height="600px" padding="1rem">
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginBottom="10px"
      >
        {path.toUpperCase()}
        <Link
          to={`/${path}/new`}
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          Add New
        </Link>
      </Box>
      <DataGrid
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </Box>
  );
};

export default DataTable;
