import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import useFetch from "../hooks/useFetch";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SearchItem from "../components/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:5150/hotels?city=${destination}&min=${min || 0}&max=${
      max || 999
    }`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <Box>
      <Navbar />
      <Header type="list" />
      <Box display="flex" justifyContent="center" marginTop="2rem">
        <Box width="100%" maxWidth="85%" display="flex" gap="2rem">
          <Box
            flex="1"
            backgroundColor="white"
            border="2px solid black"
            padding="1rem"
            borderRadius="5px"
            position="sticky"
            top="2rem"
            height="max-content"
          >
            <Typography
              textAlign="center"
              variant="h2"
              fontWeight="600"
              marginBottom=".5rem"
            >
              Search
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              gap=".5rem"
              marginBottom=".3rem"
            >
              <InputLabel>Destination</InputLabel>
              <TextField placeholder={`${destination}`} />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap=".5rem"
              marginBottom=".3rem"
            >
              <InputLabel>Check-in Date</InputLabel>
              <Button
                variant="contained"
                onClick={() => setOpenDate(!openDate)}
              >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                dates[0].endDate,
                "MM/dd/yyyy"
              )}`}</Button>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                  style={{
                    backgroundColor: "#444",
                    padding: "-5rem",
                  }}
                />
              )}
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap=".5rem"
              marginBottom=".3rem"
            >
              <InputLabel>Options</InputLabel>
              <Box padding=".5rem">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  marginBottom=".3rem"
                >
                  <InputLabel sx={{ flex: 3 }}>
                    Min price <small>per night</small>
                  </InputLabel>
                  <TextField
                    type="number"
                    sx={{ flex: 1 }}
                    onChange={(e) => setMin(e.target.value)}
                  />
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  marginBottom=".3rem"
                >
                  <InputLabel sx={{ flex: 3 }}>
                    Max price <small>per night</small>
                  </InputLabel>
                  <TextField
                    type="number"
                    sx={{ flex: 1 }}
                    onChange={(e) => setMax(e.target.value)}
                  />
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  marginBottom=".3rem"
                >
                  <InputLabel sx={{ flex: 3 }}>Adult</InputLabel>
                  <TextField
                    type="number"
                    min={1}
                    sx={{ flex: 1 }}
                    placeholder={`${options.adult}`}
                  />
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  marginBottom=".3rem"
                >
                  <InputLabel sx={{ flex: 3 }}>Children</InputLabel>
                  <TextField
                    type="number"
                    min={0}
                    sx={{ flex: 1 }}
                    placeholder={`${options.children}`}
                  />
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  marginBottom=".3rem"
                >
                  <InputLabel sx={{ flex: 3 }}>Room</InputLabel>
                  <TextField
                    type="number"
                    min={1}
                    sx={{ flex: 1 }}
                    placeholder={`${options.room}`}
                  />
                </Box>
              </Box>
            </Box>
            <Button
              variant="contained"
              onClick={handleClick}
              sx={{
                padding: "10px",
                width: "100%",
                fontWeight: "500",
                cursor: " pointer",
                color: "#F5F5F5",
              }}
            >
              Search
            </Button>
          </Box>
          <Box flex="3" display="flex" flexDirection="column">
            {loading ? (
              "Loading..."
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default List;
