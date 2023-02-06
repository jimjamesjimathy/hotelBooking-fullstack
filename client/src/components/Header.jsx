import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { AuthContext } from "../context/AuthContext";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

// MUI ICONS
import BedIcon from "@mui/icons-material/Bed";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import PublicIcon from "@mui/icons-material/Public";

const Header = ({ type }) => {
  const [active, setActive] = useState("stays");
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const theme = useTheme();
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <Box
      backgroundColor={theme.palette.background.secondary}
      display="flex"
      justifyContent="center"
      position="relative"
    >
      <Box
        padding="2rem 0"
        width="100%"
        maxWidth="85%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="auto"
        gap="5rem"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          width="75%"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flex="1"
            paddingBottom="2px"
            style={
              active === "stays"
                ? {
                    paddingBottom: "0",
                    borderBottom: `2px solid ${theme.palette.background.reverse}`,
                  }
                : { border: "none" }
            }
          >
            <IconButton
              sx={{
                display: "flex",
                width: "100%",
                gap: "13px",
                borderRadius: "5px",
                color: theme.palette.background.reverse,
                "&:hover": {
                  backgroundColor: theme.palette.background.secondary,
                },
              }}
              onClick={() => setActive("stays")}
            >
              <BedIcon fontSize="large" />
              <Typography fontWeight="500" fontSize="1rem">
                Stays
              </Typography>
            </IconButton>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flex="1"
            paddingBottom="2px"
            style={
              active === "flights"
                ? {
                    paddingBottom: "0",
                    borderBottom: `2px solid ${theme.palette.background.reverse}`,
                  }
                : { border: "none" }
            }
          >
            <IconButton
              sx={{
                display: "flex",
                width: "100%",
                gap: "13px",
                borderRadius: "5px",
                color: theme.palette.background.reverse,
                "&:hover": {
                  backgroundColor: theme.palette.background.secondary,
                },
              }}
              onClick={() => setActive("flights")}
            >
              <FlightTakeoffIcon fontSize="large" />
              <Typography fontWeight="500" fontSize="1rem">
                Flights
              </Typography>
            </IconButton>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flex="1"
            paddingBottom="2px"
            style={
              active === "rentals"
                ? {
                    paddingBottom: "0",
                    borderBottom: `2px solid ${theme.palette.background.reverse}`,
                  }
                : { border: "none" }
            }
          >
            <IconButton
              sx={{
                display: "flex",
                width: "100%",
                gap: "13px",
                borderRadius: "5px",
                color: theme.palette.background.reverse,
                "&:hover": {
                  backgroundColor: theme.palette.background.secondary,
                },
              }}
              onClick={() => setActive("rentals")}
            >
              <DirectionsCarIcon fontSize="large" />
              <Typography fontWeight="500" fontSize="1rem">
                Rentals
              </Typography>
            </IconButton>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flex="1"
            paddingBottom="2px"
            style={
              active === "attractions"
                ? {
                    paddingBottom: "0",
                    borderBottom: `2px solid ${theme.palette.background.reverse}`,
                  }
                : { border: "none" }
            }
          >
            <IconButton
              sx={{
                display: "flex",
                width: "100%",
                gap: "13px",
                borderRadius: "5px",
                color: theme.palette.background.reverse,
                "&:hover": {
                  backgroundColor: theme.palette.background.secondary,
                },
              }}
              onClick={() => setActive("attractions")}
            >
              <AttractionsIcon fontSize="large" />
              <Typography fontWeight="500" fontSize="1rem">
                Attractions
              </Typography>
            </IconButton>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flex="1"
            paddingBottom="2px"
            style={
              active === "taxi"
                ? {
                    paddingBottom: "0",
                    borderBottom: `2px solid ${theme.palette.background.reverse}`,
                  }
                : { border: "none" }
            }
          >
            <IconButton
              sx={{
                display: "flex",
                width: "100%",
                gap: "13px",
                borderRadius: "5px",
                color: theme.palette.background.reverse,
                "&:hover": {
                  backgroundColor: theme.palette.background.secondary,
                },
              }}
              onClick={() => setActive("taxi")}
            >
              <LocalTaxiIcon fontSize="large" />
              <Typography fontWeight="500" fontSize="1rem">
                Taxi
              </Typography>
            </IconButton>
          </Box>
        </Box>

        {type !== "list" && (
          <>
            <Box
              display="flex"
              flexDirection="column"
              gap="2rem"
              alignItems="center"
              paddingBottom="5rem"
            >
              <Typography fontSize="3rem" fontWeight="500">
                All of your booking needs in one place.
              </Typography>
              <Typography variant="h4" color="#FFFFFF" fontWeight="500">
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free Jam-Booking account
              </Typography>
              {!user && (
                <Button
                  sx={{
                    backgroundColor: theme.palette.accent.main,
                    "&:hover": {
                      backgroundColor: theme.palette.accent.fifth,
                    },
                  }}
                >
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Typography
                      textTransform="capitalize"
                      sx={{
                        padding: "0 1rem",
                      }}
                    >
                      log in / register
                    </Typography>
                  </Link>
                </Button>
              )}
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              position="absolute"
              bottom="-2rem"
              width="100%"
              height="5em"
              padding="0 2rem"
              maxWidth="85%"
              borderRadius="5px"
              backgroundColor="#FFFFFF"
              border={`3px solid ${theme.palette.gold.fifth}`}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex="1"
              >
                <PublicIcon fontSize="large" sx={{ color: "#000" }} />
                <input
                  placeholder="Where are you off to?"
                  onChange={(e) => setDestination(e.target.value.toLowerCase())}
                  style={{
                    height: "3.5em",
                    textAlign: "center",
                    border: "none",
                    fontWeight: "600",
                    fontFamily: ["Quicksand", "sans-serif"],
                    opacity: "0.5",
                    padding: "0 1rem",
                  }}
                />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex="1"
              >
                <IconButton
                  onClick={() => setOpenDate(!openDate)}
                  sx={{
                    borderRadius: 0,
                    width: "100%",
                    gap: ".9rem",
                  }}
                >
                  <CalendarMonthIcon fontSize="large" sx={{ color: "#000" }} />
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontFamily: ["Quicksand", "sans-serif"],
                      opacity: "0.5",
                      color: "#666",
                    }}
                  >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                    dates[0].startDate,
                    "MM/dd/yyyy"
                  )}`}</Typography>
                </IconButton>
                {openDate && (
                  <Box position="absolute" top="4.75em" zIndex="1">
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDates([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={dates}
                    />
                  </Box>
                )}
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap=".3rem"
                flex="1"
              >
                <IconButton
                  onClick={() => setOpenOptions(!openOptions)}
                  sx={{
                    borderRadius: 0,
                    width: "100%",
                    gap: ".9rem",
                  }}
                >
                  <AccessibilityNewOutlinedIcon
                    fontSize="large"
                    sx={{ color: "#000" }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontFamily: ["Quicksand", "sans-serif"],
                      opacity: "0.5",
                      color: "#666",
                    }}
                  >{`${options.adult} adult - ${options.children} children - ${options.room} room(s)`}</Typography>
                </IconButton>
                {openOptions && (
                  <Box
                    position="absolute"
                    top="4.8em"
                    width="17em"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    zIndex="1"
                    padding="1.5rem 0"
                    backgroundColor={theme.palette.background.light}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      width="100%"
                    >
                      <Typography sx={{ paddingLeft: "1.25rem" }}>
                        Adult(s)
                      </Typography>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-evenly"
                      >
                        <Button
                          disabled={options.adult <= 1}
                          onClick={() => handleOption("adult", "d")}
                        >
                          <Typography fontSize="1rem">-</Typography>
                        </Button>
                        <Typography>{options.adult}</Typography>
                        <Button onClick={() => handleOption("adult", "i")}>
                          <Typography fontSize="1rem">+</Typography>
                        </Button>
                      </Box>
                    </Box>

                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      width="100%"
                    >
                      <Typography sx={{ paddingLeft: "1.25rem" }}>
                        Children
                      </Typography>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-evenly"
                      >
                        <Button
                          disabled={options.children <= 0}
                          onClick={() => handleOption("children", "d")}
                        >
                          <Typography fontSize="1rem">-</Typography>
                        </Button>
                        <Typography>{options.children}</Typography>
                        <Button onClick={() => handleOption("children", "i")}>
                          <Typography fontSize="1rem">+</Typography>
                        </Button>
                      </Box>
                    </Box>

                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      width="100%"
                    >
                      <Typography sx={{ paddingLeft: "1.25rem" }}>
                        Rooms
                      </Typography>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-evenly"
                      >
                        <Button
                          disabled={options.room <= 1}
                          onClick={() => handleOption("room", "d")}
                        >
                          <Typography fontSize="1rem">-</Typography>
                        </Button>
                        <Typography>{options.room}</Typography>
                        <Button onClick={() => handleOption("room", "i")}>
                          <Typography fontSize="1rem">+</Typography>
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
              <Box>
                <Button onClick={handleSearch} variant="contained">
                  <Typography>Search</Typography>
                </Button>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Header;
