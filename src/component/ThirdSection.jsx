import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import b1 from "../assets/images/b1.png";
import b2 from "../assets/images/b2.png";
import b3 from "../assets/images/b3.png";

function ThirdSection() {

  
  return (
    <Box
      sx={{
        px: { xs: 2, md: 12 },
        py: { xs: 6, md: 10 },
        backgroundColor: "#fff",
      }}
    >
      <Grid
        container
        alignItems="center"
        spacing={3}
        justifyContent="space-between"
      >
        {/* Left: Title */}
        <Grid size={{ md: 4, xs: 12 }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "30px", md: "40px" },
              color: "#191A15",
              lineHeight: 1.3,
            }}
          >
            Our Features <br /> you cab get
          </Typography>
        </Grid>

        {/* Center: Paragraph */}
        <Grid size={{ md: 5, xs: 12 }}>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              color: "#A6A6A6",
              maxWidth: "465px",
              lineHeight: 1.6,
            }}
          >
            We offer a variety of interesting features that you can help
            increase your productivity at work and manage your project easily
          </Typography>
        </Grid>

        {/* Right: Button */}
        <Grid
          size={{ md: 3, xs: 12 }}
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", md: "flex-end" },
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#54BD95",
              borderRadius: "30px",
              textTransform: "none",
              fontSize: "14px",
              width: "162px",
              height: "30px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
              "&:hover": {
                backgroundColor: "#45a983",
              },
            }}
          >
            Get Started
          </Button>
        </Grid>
      </Grid>


                   {/* .......................the card section................. */}
      <Box sx={{ px: 2, py: 4 , marginTop:"50px"}}>
      <Grid container spacing={4}>
        {/* Feature 1 */}
        <Grid size={{xs:12, md:4}}>
          <Box>
            <Box component="img" src={b1} alt="firstImage" sx={{ width: "100%"  }} />
            <Typography
              sx={{
                color: "#191A15",
                fontWeight: 600,
                fontSize: "30px",
                mt: 3,
              }}
            >
              Collaboration Teams
            </Typography>
            <Typography
              sx={{
                color: "#A6A6A6",
                fontWeight: 500,
                fontSize: "18px",
                maxWidth: "340px",
                mt: 2,
              }}
            >
              Here you can handle projects together with team virtually
            </Typography>
          </Box>
        </Grid>

        {/* Feature 2 */}
        <Grid size={{xs:12, md:4}}>
          <Box>
            <Box component="img" src={b2} alt="firstImage" sx={{ width: "100%" }} />
            <Typography
              sx={{
                color: "#191A15",
                fontWeight: 600,
                fontSize: "30px",
                mt: 3,
              }}
            >
             Cloud Storage
            </Typography>
            <Typography
              sx={{
                color: "#A6A6A6",
                fontWeight: 500,
                fontSize: "18px",
                maxWidth: "340px",
                mt: 2,
              }}
            >
              No nedd to worry about storage because we provide storage up to 2 TB
            </Typography>
          </Box>
        </Grid>

        {/* Feature 3 */}
        <Grid size={{xs:12, md:4}}>
          <Box>
            <Box component="img" src={b3} alt="firstImage" sx={{ width: "100%" }} />
            <Typography
              sx={{
                color: "#191A15",
                fontWeight: 600,
                fontSize: "30px",
                mt: 3,
              }}
            >
             Daily Analytics
            </Typography>
            <Typography
              sx={{
                color: "#A6A6A6",
                fontWeight: 500,
                fontSize: "18px",
                maxWidth: "340px",
                mt: 2,
              }}
            >
              We always provide useful informatin to make it easier for you every day
            </Typography>
          </Box>
        </Grid>
      </Grid>
      </Box>
    </Box>
      
    

      
  );
}

export default ThirdSection;
