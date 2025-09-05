import React from "react";
import {
  Typography,
  Box,
  Avatar,
  Stack,
  Button,
  TextField,
  Link,
} from "@mui/material";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import footerImg1 from "../assets/images/footerImg1.png";
import footerImg2 from "../assets/images/footerImg2.png";
import footerImg3 from "../assets/images/footerImg3.png";
import footerImg4 from "../assets/images/footerImg4.png";
import footerImage6 from "../assets/images/footerImg6.png";

const sections = [
  {
    title: "Support",
    links: ["Help centre", "Account information", "About", "Contact us"],
  },
  {
    title: "Company",
    links: ["Our story", "Careers", "Press", "Investors"],
  },
  {
    title: "Product",
    links: ["Update", "Security", "Beta test", "Pricing product"],
  },
];

// Modular Footer Links
const FooterLinks = () => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: { xs: 4, md: 8 },
    }}
  >
    {sections.map((section, idx) => (
      <Box key={idx}>
        <Typography
          sx={{
            color: "#ffffff",
            fontWeight: 500,
            fontSize: "18px",
            mb: "30px",
          }}
        >
          {section.title}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {section.links.map((link, i) => (
            <Link
              key={i}
              href="#"
              underline="hover"
              sx={{
                color: "#A6A6A6",
                fontWeight: 500,
                fontSize: "18px",
                mb: i !== section.links.length - 1 ? "20px" : 0,
              }}
            >
              {link}
            </Link>
          ))}
        </Box>
      </Box>
    ))}
  </Box>
);

const FooterSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#161C28",
        py: "50px",
      }}
    >
      {/* Section 1: Testimonial + Form */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          px: { xs: 2, sm: 4, md: 10, lg: 16 },
          mb: { xs: 8, md: 12 },
          gap: { xs: 6, md: 0 },
        }}
      >
        {/* Left: Testimonial */}
        <Box
          sx={{
            flex: 1,
            pr: { xs: 0, md: "80px" },
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "50px",
              color: "#ffffff",
            }}
          >
            People are Saying About DoWhith
          </Typography>
          <Typography
            sx={{ fontWeight: 500, fontSize: "18px", color: "#A6A6A6", mb: 3 }}
          >
            Everything you need to accept payments and grow your money or manage
            it anywhere on the planet.
          </Typography>
          <Box mb={3}>
            <Typography sx={{ color: "#D9D9D9", fontSize: "20px" }}>//</Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "18px",
                color: "#A6A6A6",
                my: 2,
              }}
            >
              I am very helped by this E-wallet application. My days are very
              easy using this application, and it’s very helpful in my life.
              Even I can pay in a short time 😍
            </Typography>
            <Typography
              sx={{ fontWeight: 500, fontSize: "18px", color: "#A6A6A6" }}
            >
              _ Aria Zinanrio
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <Avatar src={footerImg1} alt="User 1" />
            <Avatar src={footerImg2} alt="User 2" />
            <Avatar src={footerImg3} alt="User 3" />
            <Avatar src={footerImg4} alt="User 4" />
            <Avatar>
              <PlayCircleOutlineOutlinedIcon />
            </Avatar>
          </Stack>
        </Box>

        {/* Right: Contact Form */}
        <Box
          sx={{
            backgroundColor: "#222938",
            flex: 1,
            pl: { xs: 0, md: "40px" },
            borderRadius: "20px",
            mt: { xs: 4, md: 0 },
            p: { xs: 3, md: 4 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 2,
            }}
          >
            <img src={footerImage6} alt="footer illustration" />
            <Typography
              sx={{
                color: "#ffffff",
                fontWeight: 500,
                fontSize: "30px",
                textAlign: "center",
                maxWidth: "168px",
              }}
            >
              Get Started
            </Typography>
          </Box>

          {/* Email */}
          <Box mt={5}>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "18px",
                color: "#ffffff",
                mb: 2,
              }}
            >
              Email
            </Typography>
            <TextField
              label="Enter your email"
              variant="filled"
              fullWidth
              sx={{
                bgcolor: "#ffffff",
                borderRadius: "10px",
                "& .MuiInputLabel-root": {
                  color: "#A6A6A6",
                },
                "& .MuiFilledInput-root": {
                  borderRadius: "10px",
                },
              }}
            />
          </Box>

          {/* Message */}
          <Box mt={4}>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "18px",
                color: "#ffffff",
                mb: 2,
              }}
            >
              Message
            </Typography>
            <TextField
              label="What do you want to say?"
              variant="filled"
              multiline
              minRows={3}
              fullWidth
              sx={{
                bgcolor: "#ffffff",
                borderRadius: "10px",
                "& .MuiInputLabel-root": {
                  color: "#A6A6A6",
                },
                "& .MuiFilledInput-root": {
                  borderRadius: "10px",
                },
              }}
            />
          </Box>

          {/* Button */}
          <Box mt={4}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "#54BD95",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: 600,
                borderRadius: "10px",
                textTransform: "none",
                py: 1.5,
                "&:hover": {
                  bgcolor: "#49a781",
                },
              }}
            >
              Request Demo
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Section 2: Branding + Footer Links */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
          px: { xs: 2, sm: 4, md: 10, lg: 16 },
          mt: { xs: 6, md: 12 },
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        {/* Branding */}
        <Box sx={{ maxWidth: "100%", flex: 1, minWidth: "250px" }}>
          <Typography
            sx={{ color: "#54BD95", fontSize: "50px", fontWeight: 600, mb: 3 }}
          >
            Biccas
          </Typography>
          <Typography
            sx={{ color: "#A6A6A6", fontWeight: 500, fontSize: "18px", mb: 3 }}
          >
            Get started now, try our product
          </Typography>
          <TextField
            label="Enter your email here"
            variant="outlined"
            fullWidth
            sx={{
              bgcolor: "#ffffff",
              borderRadius: "10px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
          />
        </Box>

        {/* Footer Links */}
        <FooterLinks />
      </Box>

      {/* Section 3: Bottom Bar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, sm: 4, md: 10, lg: 16 },
          mt: { xs: 6, md: 8 },
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "16px",
            color: "#ffffff",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          © 2022 Biccas Inc. All rights reserved.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Link
            href="#"
            underline="hover"
            sx={{ color: "#A6A6A6", fontSize: "16px" }}
          >
            Privacy Policy
          </Link>
          <Typography sx={{ color: "#A6A6A6" }}>·</Typography>
          <Link
            href="#"
            underline="hover"
            sx={{ color: "#A6A6A6", fontSize: "16px" }}
          >
            Terms of Service
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterSection;
