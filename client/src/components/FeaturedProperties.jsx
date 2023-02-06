import { Box, Button, Typography } from "@mui/material";
import useFetch from "../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:5150/hotels?featured=true&limit=4"
  );
  return (
    <Box
      width="100%"
      maxWidth="80%"
      display="flex"
      justifyContent="space-between"
      gap="1rem"
    >
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data.map((item) => (
            <Box flex="1" display="flex" flexDirection="column" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
              >
                <Typography variant="h3">{item.name}</Typography>
                <Typography>{item.city}</Typography>
                <Box>
                  <Typography fontWeight="bold">
                    Starting from ${item.cheapestPrice}
                  </Typography>
                </Box>
              </Box>
              {item.rating && (
                <Box
                  display="flex"
                  alignItems="center"
                  gap="1rem"
                  textAlign="center"
                  justifyContent="center"
                >
                  <Typography>Rating:</Typography>
                  <Typography
                    color="#FFF"
                    sx={{
                      backgroundColor: "#777",
                      padding: ".2rem .5rem",
                      borderRadius: "5px",
                    }}
                  >
                    {item.rating}
                  </Typography>
                </Box>
              )}
            </Box>
          ))}
        </>
      )}
    </Box>
  );
};

export default FeaturedProperties;
