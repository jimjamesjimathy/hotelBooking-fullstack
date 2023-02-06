import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import axios from "axios";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/jkDev/image/upload",
        data
      );

      const { url } = uploadRes.data;

      const newUser = {
        ...info,
        img: url,
      };

      await axios.post("/auth/register", newUser);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box width="100%" display="flex">
      <Sidebar />
      <Box flex="6">
        <Navbar />
        <Box
          display="flex"
          margin="20px"
          padding="10px"
          boxShadow="2px 4px 10px 1px rgba(0, 0, 0, 0.5)"
        >
          <Typography variant="h1">{title}</Typography>
        </Box>
        <Box
          display="flex"
          margin="20px"
          padding="10px"
          boxShadow="2px 4px 10px 1px rgba(0, 0, 0, 0.5)"
        >
          <Box
            flex="1"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box flex="2">
            <form
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "30px",
                justifyContent: "space-around",
                height: "55vh",
              }}
            >
              <Box
                width="40%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <IconButton sx={{ width: "100%", borderRadius: 0 }}>
                  <label
                    htmlFor="file"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "1rem",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    Upload Image:{" "}
                    <DriveFolderUploadOutlinedIcon fontSize="large" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </IconButton>
              </Box>

              {inputs.map((input) => (
                <Box width="40%" key={input.id}>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {input.label}:
                  </label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                    style={{
                      width: "100%",
                      padding: "5px",
                      border: "none",
                      borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                      textAlign: "center",
                    }}
                  />
                </Box>
              ))}
              <Box width="100%" display="flex" justifyContent="center">
                <Button
                  onClick={handleClick}
                  variant="contained"
                  sx={{ width: "13em", height: "4em" }}
                >
                  Send
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default New;
