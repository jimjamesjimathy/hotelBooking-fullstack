import { Box, Button, IconButton, Typography } from "@mui/material";
import { useContext, useState } from "react";
import useFetch from "../hooks/useFetch";

// IMPORT ICONS
import CloseIcon from "@mui/icons-material/Close";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// IMPORT COMPONENTS
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import MailList from "../components/MailList";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { AuthContext } from "../context/AuthContext";
import Reserve from "../components/Reserve";

const Hotel = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { dates, options } = useContext(SearchContext);
  const { user } = useContext(AuthContext);
  const { data, loading, error } = useFetch(
    `http://localhost:5150/hotels/find/${id}`
  );

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <Box>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Loading..."
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginTop="2rem"
        >
          {open && (
            <Box
              position="sticky"
              top="0"
              left="0"
              width="100vw"
              height="100vh"
              backgroundColor="rgba(0, 0, 0, 0.7)"
              zIndex="999"
              display="flex"
              alignItems="center"
            >
              {/* CLOSE  */}
              <IconButton
                onClick={() => setOpen(false)}
                sx={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                }}
              >
                <CloseIcon sx={{ color: "#F5F5F5", fontSize: "50px" }} />
              </IconButton>

              {/* LEFT  */}
              <IconButton onClick={() => handleMove("l")}>
                <KeyboardDoubleArrowLeftIcon
                  sx={{ fontSize: "4rem", color: "#F5F5F5" }}
                />
              </IconButton>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
                width="100%"
              >
                <img
                  src={data.photos[slideNumber].src}
                  alt=""
                  style={{ width: "80%", height: "80vh" }}
                />
              </Box>

              {/* RIGHT  */}
              <IconButton onClick={() => handleMove("r")}>
                <KeyboardDoubleArrowRightIcon
                  sx={{ fontSize: "4rem", color: "#F5F5F5" }}
                />
              </IconButton>
            </Box>
          )}
          <Box
            width="100%"
            maxWidth="85%"
            display="flex"
            flexDirection="column"
            gap=".5rem"
            position="relative"
          >
            <Button
              onClick={handleClick}
              sx={{
                position: "absolute",
                top: "10px",
                right: 0,
                padding: "10px 20px",
                backgroundColor: "#0071c2",
                color: "white",
                fontWeight: "bold",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Reserve or Book Now!
            </Button>
            <Typography variant="h1" className="hotelTitle">
              {data.name}
            </Typography>
            <Box display="flex" alignItems="center" gap=".5rem">
              <LocationOnIcon />
              <Typography>{data.address}</Typography>
            </Box>
            <Typography>
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="space-between">
              {data.photos?.map((photo, i) => (
                <Box width="33%" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              ))}
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              gap=".5rem"
              marginTop=".5rem"
            >
              <Box flex="3">
                <Typography variant="h1">
                  Stay in the heart of {data.city}
                </Typography>
                <Typography sx={{ marginTop: ".7rem" }}>{data.desc}</Typography>
              </Box>
              <Box
                flex="1"
                padding="1rem"
                display="flex"
                flexDirection="column"
                gap=".7rem"
              >
                <Typography variant="h1">
                  Perfect for a {days}-night stay!
                </Typography>
                <Typography>
                  Located in the real heart of {data.city}, this property has an
                  excellent location score of {data.rating}!
                </Typography>
                <Typography variant="h3">
                  <b>${days * data.cheapestPrice * options.room}</b> ({days}{" "}
                  nights)
                </Typography>
                <Button onClick={handleClick} variant="contained">
                  Reserve or Book Now!
                </Button>
              </Box>
            </Box>
          </Box>
          <MailList />
          <Footer />
        </Box>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </Box>
  );
};

export default Hotel;
