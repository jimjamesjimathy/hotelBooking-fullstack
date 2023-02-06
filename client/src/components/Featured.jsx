import { Box, Typography, useTheme } from "@mui/material";
import useFetch from "../hooks/useFetch";

const Featured = () => {
  const theme = useTheme();
  const { data, loading, error } = useFetch(
    "http://localhost:5150/hotels/countByCity?cities=seattle,new york,san marcos"
  );

  return (
    <Box
      width="100%"
      maxWidth="85%"
      display="flex"
      justifyContent="space-between"
      gap="2rem"
    >
      {loading ? (
        "loading..."
      ) : (
        <>
          <Box position="relative" overflow="hidden" height="20em" flex="1">
            <img
              src="https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1059&q=80"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "5px",
              }}
              alt=""
            />
            <Box
              position="absolute"
              bottom="2rem"
              display="flex"
              flexDirection="column"
              alignItems="center"
              width="100%"
              backgroundColor="rgba(255, 255, 255, 0.7)"
            >
              <Typography color="#000" fontWeight="500" fontSize="1.5rem">
                Seattle
              </Typography>
              <Typography color="#000" fontWeight="600" fontSize="1rem">
                {data[0]} Properties
              </Typography>
            </Box>
          </Box>
          <Box position="relative" overflow="hidden" height="20em" flex="1">
            <img
              src="https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "5px",
              }}
              alt=""
            />
            <Box
              position="absolute"
              bottom="2rem"
              display="flex"
              flexDirection="column"
              alignItems="center"
              width="100%"
              backgroundColor="rgba(255, 255, 255, 0.7)"
            >
              <Typography color="#000" fontWeight="500" fontSize="1.5rem">
                New York
              </Typography>
              <Typography color="#000" fontWeight="600" fontSize="1rem">
                {data[1]} Properties
              </Typography>
            </Box>
          </Box>
          <Box position="relative" overflow="hidden" height="20em" flex="1">
            <img
              src="https://images.unsplash.com/photo-1490122417551-6ee9691429d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "5px",
              }}
              alt=""
            />
            <Box
              position="absolute"
              bottom="2rem"
              display="flex"
              flexDirection="column"
              alignItems="center"
              width="100%"
              backgroundColor="rgba(255, 255, 255, 0.7)"
            >
              <Typography color="#000" fontWeight="500" fontSize="1.5rem">
                Boston
              </Typography>
              <Typography color="#000" fontWeight="600" fontSize="1rem">
                {data[2]} Properties
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Featured;
