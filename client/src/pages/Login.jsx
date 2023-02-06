import { Box, Button, InputBase, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:5150/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="1rem"
        backgroundColor="#777"
        width="50%"
        height="50vh"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap=".75rem"
        >
          <Typography fontWeight="500" color="#FFF" variant="h1">
            Welcome to Jam Booking
          </Typography>
          <Typography sx={{ width: "75%", textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit.
          </Typography>
        </Box>
        <InputBase
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          sx={{
            backgroundColor: "#FFF",
            width: "55%",
            padding: ".5rem",
            paddingLeft: ".7rem",
            borderRadius: "5px",
          }}
        />
        <InputBase
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          sx={{
            backgroundColor: "#FFF",
            width: "55%",
            padding: ".5rem",
            paddingLeft: ".7rem",
            borderRadius: "5px",
          }}
        />
        <Button
          variant="contained"
          disabled={loading}
          onClick={handleClick}
          sx={{ width: "55%" }}
        >
          Login
        </Button>
        {error && <Typography>{error.message}</Typography>}
      </Box>
    </Box>
  );
};

export default Login;
