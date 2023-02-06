import { Box, Button, IconButton, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { roomInputs } from "../formSource";
import useFetch from "../hooks/useFetch";
import axios from "axios";

const NewRoom = () => {
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch("/hotels");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
    try {
      await axios.post(`/rooms/${hotelId}`, { ...info, roomNumbers });
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
          padding="10px"
          margin="20px"
          boxShadow="2px 4px 10px 1px rgba(0, 0, 0, 0.5)"
        >
          <Typography variant="h1">Add New Room</Typography>
        </Box>
        <Box
          display="flex"
          padding="5rem .3rem"
          margin="20px"
          boxShadow="2px 4px 10px 1px rgba(0, 0, 0, 0.5)"
        >
          <Box flex="2">
            <form
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "5rem",
                justifyContent: "space-around",
              }}
            >
              {roomInputs.map((input) => (
                <Box width="40%" key={input.id}>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                      paddingBottom: "1.75rem",
                    }}
                  >
                    {input.label}:
                  </label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
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
              <Box
                width="40%"
                display="flex"
                alignItems="center"
                flexDirection="column"
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Rooms
                </label>
                <textarea
                  rows="5"
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="give comma between room numbers."
                  style={{
                    width: "100%",
                    textAlign: "center",
                  }}
                />
              </Box>
              <Box width="40%">
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Choose a hotel
                </label>
                <select
                  id="hotelId"
                  onChange={(e) => setHotelId(e.target.value)}
                >
                  {loading
                    ? "loading"
                    : data &&
                      data.map((hotel) => (
                        <option key={hotel._id} value={hotel._id}>
                          {hotel.name}
                        </option>
                      ))}
                </select>
              </Box>
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Button onClick={handleClick}>Send</Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewRoom;
