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
        marginTop: "130px",
        padding: "60px 130px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {/* Left Part */}
      <Box sx={{ maxWidth: 600 }}>
        <Typography sx={{ fontWeight: 600, fontSize: "50px" }}>
          How we support our partner all over the world
        </Typography>
        <Typography
          sx={{
            color: "#A6A6A6",
            fontSize: "16px",
            marginTop: "30px",
          }}
        >
          SaaS has become a common delivery model for many business applications,
          including office software, messaging tools, payroll systems, DBMS, and
          more.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "80px",
            marginTop: "73px",
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
                  marginTop: "8px",
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

      {/* Right Part */}
      <Box
        sx={{
          width: { xs: "100%", md: "509px" },
          marginTop: { xs: "40px", md: "0" },
          display: "flex",
          flexDirection: "column",
          gap: "30px",
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
          <Box key={i} sx={{ display: "flex", gap: "36px" }}>
            <Box
              component="img"
              src={commandImg}
              alt={item.title}
              sx={{
                marginTop: "5px",
                padding: "5px",
                height: "30px",
                backgroundColor: "#ffffff",
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "28px",
                  color: "#191A15",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#A6A6A6",
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
