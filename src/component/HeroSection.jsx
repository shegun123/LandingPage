import React from "react";
import { Typography, Box, Stack, Button } from "@mui/material";
import myImage from "../assets/images/myImage.png";
import firstImg from "../assets/images/firstImg.png";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

const HeroSection = () => {
  return (
    <Box>
      <Box
        sx={{
          
          display: "flex",
          flexDirection: 'row',
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          marginLeft:"130px",
          marginTop:"210px",
          gap:"35px",
        }}
      >
        {/* ✅ Left Section */}
        <Box
        
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap="30px"
        >
          <Typography
            sx={{
              color: "#191A15",
              fontWeight: 700,
              fontSize: { xs: "42px", md: "64px", lg: "80px" },
              lineHeight: { xs: "50px", md: "72px", lg: "90px" },
            }}
          >
            We’re here to Increase your Productivity
          </Typography>

          <Box
            component="img"
            src={myImage}
            alt="Underline graphic"
            sx={{
              width: "479px",
              height: "26px",
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

          <Stack direction="row" spacing={4} alignItems="center">
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

        {/* ✅ Right Section (Hero Image) */}
        <Box
          sx={{
            
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 4, md: 0 },
            
          }}
        >
          <Box
            component="img"
            src={firstImg}
            alt="Hero Illustration"
            sx={{
              margin: "0px",
              padding: "0px",
            }}
          />
        </Box>
      </Box>
{/* ......section at the bottom........ */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop:"130px",
          gap:"60px"
        }}
      >
        <Typography sx={{
          width:"720px",
          height:"48px",
          fontWeight:"700px",
          fontSize:"40px"
        }}>More than 25,000 teams use Collabs</Typography>

        <Box sx={{
          display:"flex",
          flexDirection:"row",
          gap:"25px"
        }}>
          <Button
            variant="text"
            sx={{
              fontSize: "30px",
              color: "#A6A6A6",
            }}
        
            color="inherit"
          >
            Unsplash
          </Button>

          <Button
            variant="text"
            sx={{
              fontSize: "30px",
              color: "#A6A6A6",
            }}
            startIcon={
              <DeleteIcon
                fontSize="inherit"
                sx={{ color: "#A6A6A6", fontSize: "50px" }}
              />
            }
            color="inherit"
          >
            Notion
          </Button>

          <Button
            variant="text"
            sx={{
              fontSize: "30px",
              color: "#A6A6A6",
            }}
            startIcon={
              <DeleteIcon
                fontSize="inherit"
                sx={{ color: "#A6A6A6", fontSize: "50px" }}
              />
            }
            color="inherit"
          >
            INTERCOM
          </Button>

          <Button
            variant="text"
            sx={{
              fontSize: "30px",
              color: "#A6A6A6",
            }}
            startIcon={
              <DeleteIcon
                fontSize="inherit"
                sx={{ color: "#A6A6A6", fontSize: "50px" }}
              />
            }
            color="inherit"
          >
            descript
          </Button>

          <Button
            variant="text"
            sx={{
              fontSize: "30px",
              color: "#A6A6A6",
            }}
            startIcon={
              <DeleteIcon
                fontSize="inherit"
                sx={{ color: "#A6A6A6", fontSize: "50px" }}
              />
            }
            color="inherit"
          >
            grammarly
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
