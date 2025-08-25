import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import first from "../assets/images/first.png";
import second from "../assets/images/second.png";
import last from "../assets/images/last.png";

const ThirdSection = () => {
  return (
    <Box
      sx={{
        margin: "130px",
        height: "auto",
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "113px",
          marginBottom:"72px"
        }}
      >
        <Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "32px", md: "50px" },
              color: "#191A15",
              maxWidth: "600px",
            }}
          >
            Our Features you can get
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              color: "#A6A6A6",
              maxWidth: "400px",
            }}
          >
            We offer a variety of interesting features that can help increase
            your productivity at work and manage your project easily.
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#54BD95",
            borderRadius: "70px",
            color: "#FFFFFF",
            fontWeight: 500,
            fontSize: "18px",
            whiteSpace: "none",
            textWrap: "nowrap",
            padding: "10px 30px",
          }}
        >
          Get Started
        </Button>
      </Box>

      {/* Grid Section */}
      <Grid container spacing={10} sx={{ marginTop: "60px", width: "100%" }}>
        {/* Box 1 */}
        <Grid size={{ md: 4, xs: 12 }}>
          <img src={first} alt="first" />
          <Box sx={{
            marginTop:"30px",
            margimLeft:"24px"

          }}>
            <Typography
              sx={{
                width: "282px",
                fontWeight: "600",
                fontSize: "30px",
                color: "#191A15",
              }}
            >
              Collboration Teams
            </Typography>

            <Typography
              sx={{
                width: "340px",
                fontWeight: "500",
                fontSize: "18px",
                color: "#A6A6A6",
              }}
            >
              Here you can handle projects together with team virtually
            </Typography>
          </Box>
        </Grid>

        {/* Box 2 */}
        <Grid size={{ md: 4, xs: 12 }}>
          <img src={second} alt="second" />
          <Box sx={{
            marginTop:"30px",
            margimLeft:"24px"

          }}>
            <Typography
              sx={{
                width: "282px",
                fontWeight: "600",
                fontSize: "30px",
                color: "#191A15",
              }}
            >
              Cloud Storage
            </Typography>

            <Typography
              sx={{
                width: "340px",
                fontWeight: "500",
                fontSize: "18px",
                color: "#A6A6A6",
              }}
            >
            No nedd to worry about storage because we provide storage up to 2 TB
            </Typography>
          </Box>
        </Grid>

        {/* Box 3 */}
        <Grid size={{ md: 4, xs: 12 }}>
          <img src={last} alt="last" />
          <Box sx={{
            marginTop:"30px",
            margimLeft:"24px"

          }}>
            <Typography
              sx={{
                width: "282px",
                fontWeight: "600",
                fontSize: "30px",
                color: "#191A15",
              }}
            >
              Daily Analytics
            </Typography>

            <Typography
              sx={{
                width: "340px",
                fontWeight: "500",
                fontSize: "18px",
                color: "#A6A6A6",
              }}
            >
              We always provide useful informatin to make it easier for you every day
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThirdSection;
