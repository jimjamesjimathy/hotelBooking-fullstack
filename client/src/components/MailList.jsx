import { Box, Button, InputBase, Typography } from "@mui/material";

const MailList = () => {
  return (
    <Box
      width="100%"
      marginTop="5rem"
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="5rem"
      gap=".5rem"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap=".5rem"
      >
        <Typography variant="h1" color="#F5F5F5">
          Save time and money!
        </Typography>
        <Typography variant="h4" color="#F5F5F5">
          Sign up and we'll send you our best deals.
        </Typography>
      </Box>
      <Box
        width="35em"
        display="flex"
        alignItems="center"
        height="3.5em"
        marginTop="1rem"
      >
        <InputBase
          placeholder="Enter your email"
          sx={{
            flex: 1,
            height: "100%",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
          }}
        />
        <Button
          variant="contained"
          sx={{
            flex: 0.3,
            height: "100%",
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default MailList;
