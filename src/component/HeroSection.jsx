import React from "react";
import { Typography, Box, Stack, Button } from "@mui/material";
import myImage from "../assets/images/myImage.png";
import firstImg from "../assets/images/firstImg.png";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import DeleteIcon from "@mui/icons-material/Delete";



const HeroSection = () => {
  return (
    <Box>
      {/* ✅ Hero Section - Image on top in mobile */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" }, // Stack reversed on small screens
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, sm: 4, md: 10 },
          py: { xs: 6, md: 10 },
          gap: { xs: 6, md: 4 },
        }}
      >
        {/* ✅ Left Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "30px",
            maxWidth: { xs: "100%", md: "50%" },
          }}
        >
          <Typography
            sx={{
              color: "#191A15",
              fontWeight: 700,
              fontSize: { xs: "36px", sm: "48px", md: "64px", lg: "80px" },
              lineHeight: { xs: "44px", sm: "56px", md: "72px", lg: "90px" },
            }}
          >
            We’re here to Increase your Productivity
          </Typography>

          <Box
            component="img"
            src={myImage}
            alt="Underline graphic"
            sx={{
              width: { xs: "100%", sm: "300px", md: "479px" },
              height: "auto",
              color: "#54BD95",
            }}
          />

          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "30px",
              color: "#000000",
              maxWidth: "550px",
            }}
          >
            Let's make your work more organized and efficient using the Taskio
            Dashboard, featuring the latest tools to help you manage your daily
            tasks with ease.
          </Typography>

          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#54BD95",
                height: "62px",
                borderRadius: "40px",
                color: "#FFFFFF",
                px: 5,
              }}
            >
              Try Free Trial
            </Button>

            <Button
              variant="text"
              startIcon={<PlayCircleOutlinedIcon />}
              sx={{
                color: "#191A15",
                height: "62px",
                borderRadius: "40px",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              View Demo
            </Button>
          </Stack>
        </Box>

        {/* ✅ Right Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={firstImg}
            alt="Hero Illustration"
            sx={{
              width: { xs: "100%", sm: "80%", md: "100%" },
              maxWidth: "600px",
              height: "auto",
            }}
          />
        </Box>
      </Box>

      {/* ✅ Bottom Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: 8, md: 12 },
          px: 2,
          textAlign: "center",
          gap: "40px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "28px", sm: "32px", md: "40px" },
            maxWidth: "90%",
          }}
        >
          More than 25,000 teams use Collabs
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {["Unsplash", "Notion", "INTERCOM", "descript", "grammarly"].map(
            (brand, i) => (
              <Button
                key={brand}
                variant="text"
                startIcon={
                  i > 0 && (
                    <DeleteIcon
                      fontSize="inherit"
                      sx={{ color: "#A6A6A6", fontSize: "40px" }}
                    />
                  )
                }
                sx={{
                  fontSize: { xs: "18px", sm: "24px", md: "30px" },
                  color: "#A6A6A6",
                  textTransform: "capitalize",
                }}
              >
                {brand}
              </Button>
            )
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
