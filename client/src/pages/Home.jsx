import { Box, Typography, useTheme } from "@mui/material";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import PropertyList from "../components/PropertyList";
import FeaturedProperties from "../components/FeaturedProperties";
import Footer from "../components/Footer";
import MailList from "../components/MailList";

const Home = () => {
  const theme = useTheme();

  return (
    <Box>
      <Navbar />
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="2rem"
        margin="auto"
        width="100%"
        maxWidth="85%"
      >
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          gap="2rem"
          width="100%"
          paddingTop="6rem"
        >
          <Featured />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          gap="2rem"
          width="100%"
        >
          <Typography variant="h1" textAlign="center" fontWeight="500">
            Browse by property type:
          </Typography>
          <PropertyList />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          gap="2rem"
          width="100%"
        >
          <Typography variant="h1" textAlign="center" fontWeight="500">
            Highest rated homes:
          </Typography>
          <FeaturedProperties />
        </Box>
        <MailList />
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
