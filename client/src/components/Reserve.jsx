import {
  Box,
  Button,
  IconButton,
  InputBase,
  InputLabel,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useFetch from "../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(
    `http://localhost:5150/hotels/room/${hotelId}`
  );
  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    const dates = [];
    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(
            `http://localhost:5150/rooms/availability/${roomId}`,
            {
              dates: alldates,
            }
          );
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {}
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      backgroundColor="rgba(0, 0, 0, 0.69)"
      position="fixed"
      top="0"
      left="0"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        backgroundColor="#FFF"
        height="65vh"
        width="55vw"
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="2rem"
        borderRadius="5px"
      >
        <IconButton
          onClick={() => setOpen(false)}
          sx={{ position: "absolute", top: 0, right: 0 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h1">Select your rooms:</Typography>
        {data.map((item) => (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="85%"
            key={item._id}
          >
            <Box flex="3" display="flex" flexDirection="column" gap=".3rem">
              <Typography fontWeight="500">{item.title}</Typography>
              <Typography fontWeight="400">{item.desc}</Typography>
              <Typography fontWeight="300">
                Max people: <b>{item.maxPeople}</b>
              </Typography>
              <Typography fontWeight="500">${item.price}</Typography>
            </Box>
            <Box flex="1" display="flex" flexWrap="wrap" gap=".3rem">
              <Box width="100%">
                <Typography>Room(s) available</Typography>
              </Box>
              {item.roomNumbers.map((roomNumber) => (
                <Box flex="1" display="flex" gap=".5rem">
                  <InputLabel>{roomNumber.number}</InputLabel>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        ))}
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            padding: ".5rem 1rem",
            borderRadius: "5px",
          }}
        >
          Reserve Now!
        </Button>
      </Box>
    </Box>
  );
};

export default Reserve;
