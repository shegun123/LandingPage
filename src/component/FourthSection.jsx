import { Typography, Box } from "@mui/material";
import React from "react";
import Subtract from "../assets/images/Subtract.png";
import merge from "../assets/images/merge.png";

const FourthSection = () => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        mb: 16,
        px: { xs: 2, sm: 4 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: { xs: 6, md: 4 },
      }}
    >
      {/* Text Box: on small screens order 2 (comes below), on large order 1 */}
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "429px" },
          order: { xs: 2, md: 1 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: { xs: "32px", md: "50px" },
            color: "#191A15",
            mb: 6,
          }}
        >
          What Benefit Will You Get
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            justifyContent: "flex-start",
          }}
        >
          {[
            "Free Consulting With Expert Saving Money",
            "Online Banking",
            "Investment Report Every Month",
            "Saving Money For The Future",
            "Online Transaction",
          ].map((text, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Box
                component="img"
                src={Subtract}
                alt="subtract"
                sx={{ width: "32px", height: "32px", flexShrink: 0 }}
              />
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "18px",
                  color: "#191A15",
                  flex: 1,
                }}
              >
                {text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Image Box: on small screens order 1 (comes first), on large order 2 */}
      <Box
        component="img"
        src={merge}
        alt="merge"
        sx={{
          width: { xs: "100%", md: "500px" },
          height: "auto",
          maxWidth: "100%",
          display: "block",
          mx: { xs: "auto", md: 0 },
          order: { xs: 1, md: 2 },
        }}
      />
    </Box>
  );
};

export default FourthSection;
