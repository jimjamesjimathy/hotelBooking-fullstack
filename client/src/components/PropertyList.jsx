import { Box, Typography } from "@mui/material";
import useFetch from "../hooks/useFetch";

const PropertyList = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:5150/hotels/countByType"
  );

  const images = [
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80",
    "https://images.unsplash.com/photo-1465804575741-338df8554e02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1652996512846-6a857f6332d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  ];

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
          {data &&
            images.map((image, i) => (
              <Box
                flex="1"
                borderRadius="5px"
                overflow="hidden"
                sx={{ cursor: "pointer" }}
                key={i}
              >
                <img
                  src={image}
                  alt=""
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <Box>
                  <Typography variant="h4" fontWeight="500">
                    {data[i]?.type}
                  </Typography>
                  <Typography fontWeight="600">
                    {data[i]?.count} {data[i]?.type}
                  </Typography>
                </Box>
              </Box>
            ))}
        </>
      )}
    </Box>
  );
};

export default PropertyList;
