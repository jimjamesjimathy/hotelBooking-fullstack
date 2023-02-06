import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box width="100%" maxWidth="85%">
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        marginBottom="1rem"
      >
        <Box>
          <Typography sx={{ paddingBottom: ".5rem" }}>Countries</Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>Regions</Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>Cities</Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>Districts</Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>Airports</Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>Hotels</Typography>
        </Box>
        <Box>
          <Typography sx={{ paddingBottom: ".5rem" }}>Homes </Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>Apartments </Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>Resorts </Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>Villas</Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>Hostels</Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>Guest houses</Typography>
        </Box>
        <Box>
          <Typography sx={{ paddingBottom: ".5rem" }}>
            Unique places to stay{" "}
          </Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>Reviews</Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>
            Unpacked: Travel articles{" "}
          </Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>
            Travel communities{" "}
          </Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>
            Seasonal and holiday deals{" "}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ paddingBottom: ".5rem" }}>Car rental </Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>Flight Finder</Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>
            Restaurant reservations{" "}
          </Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>
            Travel Agents{" "}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ paddingBottom: ".5rem" }}>
            Curtomer Service
          </Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>Partner Help</Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>Careers</Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>
            Sustainability
          </Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>Press center</Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>
            Safety Resource Center
          </Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>
            Investor relations
          </Typography>
          <Typography sx={{ paddingBottom: ".5rem" }}>
            Terms & conditions
          </Typography>
        </Box>
      </Box>
      <Box>Copyright © 2023 JamBooking.</Box>
    </Box>
  );
};

export default Footer;
