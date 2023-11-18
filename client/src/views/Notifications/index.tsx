import React from "react";
import Navbar from "../../components/Navbar";
import { Heading } from "../../components/Heading";
import { Box } from "@mui/material";

const Notifications = () => {
  return (
    <>
      <Navbar>
        <Heading>Notifications</Heading>
        <Box
          sx={{
            margin: "20px 0",
            background: "#fff",
            borderRadius: "6px",
            padding: "20px",
            boxShadow: "rgba(0, 0, 0, 0.16) 3px 16px 87px 0px",
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque eum
          dicta necessitatibus laborum nostrum sit, architecto molestias dolor
          aspernatur dolorem, doloremque modi inventore hic obcaecati rerum
          quasi quas vel aperiam.
        </Box>
      </Navbar>
    </>
  );
};

export default Notifications;
