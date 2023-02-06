import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      gap="2rem"
      marginBottom="1rem"
      border="2px solid gray"
      borderRadius="5px"
      padding="1rem"
    >
      <img
        src={item.photos[0]}
        alt=""
        style={{ width: "15em", height: "15em", objectFit: "cover" }}
      />
      <Box display="flex" flexDirection="column" gap=".25rem" flex="2">
        <Typography variant="h1">{item.name}</Typography>
        <Typography>Free airport taxi</Typography>
        <Typography>Studio Apartment with Air conditioning</Typography>
        <Typography>{item.desc}</Typography>
        <Typography>Free cancellation </Typography>
        <Typography>
          You can cancel later, so lock in this great price today!
        </Typography>
      </Box>
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        padding="1rem 0"
      >
        {item.rating && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>Excellent</Typography>
            <Box backgroundColor="#0071c2" padding=".3rem">
              {item.rating}
            </Box>
          </Box>
        )}
        <Box
          textAlign="right"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="95%"
        >
          <Box>
            <Typography>{item.cheapestPrice}</Typography>
            <Typography>Includes taxes and fees</Typography>
          </Box>
          <Link to={`/hotels/${item._id}`} style={{ textDecoration: "none" }}>
            <Button
              sx={{
                backgroundColor: "#0071c2",
                color: "white",
                fontWeight: "bold",
                padding: "5px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              See availability
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchItem;
