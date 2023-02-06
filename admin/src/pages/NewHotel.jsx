import { useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { hotelInputs } from "../formSource";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import useFetch from "../hooks/useFetch";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import axios from "axios";

const New = () => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch("/rooms");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRooms(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/jkDev/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const newhotel = {
        ...info,
        rooms,
        photos: list,
      };

      await axios.post("/hotels", newhotel);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box width="100%" display="flex">
      <Sidebar />
      <Box flex="6">
        <Navbar />
        <Box
          display="flex"
          margin="20px"
          padding="10px"
          boxShadow="2px 4px 10px 1px rgba(0, 0, 0, 0.5)"
        >
          <Typography variant="h1">Add New Hotel</Typography>
        </Box>
        <Box
          display="flex"
          margin="20px"
          padding="10px"
          boxShadow="2px 4px 10px 1px rgba(0, 0, 0, 0.5)"
        >
          <Box
            flex="1"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box flex="2">
            <form
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "30px",
                justifyContent: "space-around",
              }}
            >
              <Box
                width="40%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <IconButton sx={{ width: "100%", borderRadius: 0 }}>
                  <label
                    htmlFor="file"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "1rem",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Upload Image:{" "}
                    <DriveFolderUploadOutlinedIcon fontSize="large" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    multiple
                    style={{ display: "none" }}
                    onChange={(e) => setFiles(e.target.files)}
                  />
                </IconButton>
              </Box>

              {hotelInputs.map((input) => (
                <Box width="40%" key={input.id}>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {input.label}:
                  </label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                    style={{
                      width: "100%",
                      padding: "5px",
                      border: "none",
                      borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                      textAlign: "center",
                    }}
                  />
                </Box>
              ))}
              <Box width="40%">
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  Featured
                </label>
                <select id="featured" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </Box>
              <Box width="100%">
                <Typography variant="h4" fontWeight="500">
                  Rooms
                </Typography>
                <select
                  id="rooms"
                  multiple
                  onChange={handleSelect}
                  style={{ width: "100%", padding: "10px" }}
                >
                  {loading
                    ? "loading"
                    : data &&
                      data.map((room) => (
                        <option key={room._id} value={room._id}>
                          {room.title}
                        </option>
                      ))}
                </select>
              </Box>
              <Box width="100%" display="flex" justifyContent="center">
                <Button
                  onClick={handleClick}
                  variant="contained"
                  sx={{ width: "13em", height: "4em" }}
                >
                  Send
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default New;
