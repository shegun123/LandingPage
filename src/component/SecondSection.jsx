import React, { useState } from "react";
import { Box, Typography, Rating } from "@mui/material";
import commandImg from "/src/assets/images/command.png";

const SecondSection = () => {
  const [ratingValue, setRatingValue] = useState(4.9);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F9F8FE",
        mt: { xs: 10, md: "130px" },
        px: { xs: 2, sm: 4, md: 10 },
        py: { xs: 6, md: 10 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        gap: { xs: 6, md: 10 },
      }}
    >
      {/* ✅ Left Part */}
      <Box sx={{ maxWidth: { xs: "100%", md: "50%" } }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: "32px", sm: "40px", md: "50px" },
            lineHeight: 1.2,
          }}
        >
          How we support our partner all over the world
        </Typography>

        <Typography
          sx={{
            color: "#A6A6A6",
            fontSize: { xs: "14px", sm: "16px" },
            mt: { xs: 3, sm: 4 },
          }}
        >
          SaaS has become a common delivery model for many business applications,
          including office software, messaging tools, payroll systems, DBMS, and
          more.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: { xs: 4, sm: 8 },
            flexDirection: { xs: "column", sm: "row" },
            mt: { xs: 4, sm: 6 },
          }}
        >
          {[{ name: "Databricks" }, { name: "Chainalysis" }].map((company, i) => (
            <Box key={i}>
              <Rating
                name={`half-rating-${i}`}
                value={ratingValue}
                precision={0.5}
                onChange={(event, newValue) => {
                  if (newValue !== null) {
                    setRatingValue(newValue);
                  }
                }}
              />
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#191A15",
                  mt: 1,
                }}
              >
                {ratingValue} / 5 rating
              </Typography>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#A6A6A6",
                }}
              >
                {company.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ✅ Right Part */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          mt: { xs: 6, md: 0 },
          display: "flex",
          flexDirection: "column",
          gap: { xs: 4, sm: 5 },
        }}
      >
        {[
          {
            title: "Publishing",
            text: "Plan, collaborate, and publish your content that drives meaningful engagement and growth for your brand.",
          },
          {
            title: "Analytics",
            text: "Analyze your performance and create gorgeous reports.",
          },
          {
            title: "Engagement",
            text: "Quickly navigate and engage with your audience.",
          },
        ].map((item, i) => (
          <Box key={i} sx={{ display: "flex", gap: 3 }}>
            <Box
              component="img"
              src={commandImg}
              alt={item.title}
              sx={{
                mt: "5px",
                p: "5px",
                height: "30px",
                backgroundColor: "#ffffff",
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "20px", sm: "24px", md: "28px" },
                  color: "#191A15",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                  color: "#A6A6A6",
                  mt: 0.5,
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SecondSection;
