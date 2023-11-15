import React from "react";
import { Box } from "@mui/material";
import { Heading, SubHeading } from "../../components/Heading";
import { Link } from "react-router-dom";
import NextWhiteLogo from "../../assets/images/nexCenterLogo.svg";

const Signup = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "fixed",
            bottom: "0",
            left: "-110px",
            "@media (max-width: 576px)": {
              display: "none",
            },
          }}
        >
          {/* <Image src={NextWhiteLogo} alt="logo" layout="fixed" height={200} /> */}
          <img src={NextWhiteLogo} alt="logo" style={{ height: 200 }} />
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            "@media (max-width: 768px)": {
              flexDirection: "column-reverse",
            },
          }}
        >
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#4158D0",
              backgroundImage:
                "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ position: "relative", margin: "0 auto" }}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                <Heading sx={{ fontSize: "45px", color: "#fff" }}>
                  Get Started
                </Heading>
                <SubHeading
                  sx={{
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  Already have an account ?
                  <Box>
                    <Link
                      to="/login"
                      style={{
                        fontWeight: "bold",
                        color: "#fff",
                        textDecoration: "none",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.textDecoration = "underline")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.textDecoration = "none")
                      }
                    >
                      Login
                    </Link>
                  </Box>
                </SubHeading>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: "100%",
                padding: "0 100px",
                "@media (min-width: 1500px)": {
                  padding: "0 50px",
                  width: "550px",
                },
                "@media (min-width: 768px) and (max-width: 991px)": {
                  padding: "0 45px",
                },
                "@media (min-width: 576px) and (max-width: 767px)": {
                  padding: "0 50px",
                  width: "550px",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Heading
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Create an Account
                </Heading>
                formik form
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
