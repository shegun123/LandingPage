import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


function FivethSection() {

  
    const [billingType, setBillingType] = useState("yearly"); // initial state
  
    const handleToggle = (type) => {
      if (type === "monthly") {
        setBillingType("monthly");
      } else {
        setBillingType("yearly");
      }
    };
    
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 8 },
        mb: { xs: 8, md: 16 },
      }}
    >
      {/* Section Header */}
      <Box
        sx={{
          textAlign: "center",
          mb: 10,
        }}
      >
        <Typography
          sx={{
            color: "#191A15",
            fontWeight: 700,
            fontSize: { xs: "32px", sm: "40px", md: "50px" },
            lineHeight: "73px",
          }}
        >
          Choose Plan That’s Right For You
        </Typography>

        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "18px",
            color: "#A6A6A6",
            mt: 4,
          }}
        >
          Choose plan that works best for you, feel free to contact us
        </Typography>

        {/* Toggle Buttons */}
        <Box
      sx={{
        borderRadius: "10px",
        backgroundColor: "#FFFFFF",
        mt: 4,
        display: "inline-flex",
        gap: 2,
      }}
    >
      {/* Monthly Button */}
      <Button
        onClick={() => handleToggle("monthly")}
        sx={{
          fontWeight: 500,
          fontSize: "18px",
          color: billingType === "monthly" ? "#FFFFFF" : "#191A15",
          backgroundColor: billingType === "monthly" ? "#54BD95" : "#FFFFFF",
          boxShadow: billingType === "monthly" ? "0px 2px 4px rgba(0,0,0,0.1)" : "none",
          "&:hover": {
            backgroundColor: billingType === "monthly" ? "#43a683" : "#f2f2f2",
          },
        }}
      >
        Bil Monthly
      </Button>

      {/* Yearly Button */}
      <Button
        onClick={() => handleToggle("yearly")}
        sx={{
          fontWeight: 500,
          fontSize: "18px",
          color: billingType === "yearly" ? "#FFFFFF" : "#191A15",
          backgroundColor: billingType === "yearly" ? "#54BD95" : "#FFFFFF",
          boxShadow: billingType === "yearly" ? "0px 2px 4px rgba(0,0,0,0.1)" : "none",
          "&:hover": {
            backgroundColor: billingType === "yearly" ? "#43a683" : "#f2f2f2",
          },
        }}
      >
        Bil Yearly
      </Button>
    </Box>
      </Box>

      {/* Responsive Grid Layout */}
      <Grid container spacing={4} justifyContent="center">
        {[
          {
            title: "Free",
            description: "Have a go and test your superpowers",
            price: "0",
            features: [
              "2 Users",
              "2 Files",
              "Public Share & Comments",
              "Chat Support",
              "New income apps",
            ],
            buttonText: "Signup for free",
          },
          {
            title: "Pro",
            description: "Experiment the power of infinite possibilities",
            price: "8",
            features: [
              "4 Users",
              "All apps",
              "Unlimited editable exports",
              "Folders and collaboration",
              "All incoming apps",
            ],
            buttonText: "Go to pro",
          },
          {
            title: "Business",
            description: "Unveil new superpowers and join the Design Leaque",
            price: "16",
            features: [
              "All the features of pro plan",
              "Account success Manager",
              "Single Sign-On (SSO)",
              "Co-conception pogram",
              "Collaboration-Soon",
            ],
            buttonText: "Signup for free",
          },
        ].map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                width: "100%",
                maxWidth: "400px",
                mx: "auto",
                boxShadow: "0px 4px 9px 0px #0000000D",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Plan Header */}
              <Box sx={{ p: 4, textAlign: "center" }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "30px",
                    color: "#191A15",
                    mb: 1,
                  }}
                >
                  {plan.title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "18px",
                    color: "#A6A6A6",
                    mb: 2,
                  }}
                >
                  {plan.description}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "50px",
                    fontWeight: 600,
                    color: "#191A15",
                    mb: 2,
                    lineHeight: "1",
                  }}
                >
                  <span
                    style={{
                      fontSize: "18px",
                      verticalAlign: "super",
                      fontWeight: 500,
                      color: "#A6A6A6",
                    }}
                  >
                    $
                  </span>
                  {plan.price}
                </Typography>
              </Box>

              {/* Features */}
              <Box
                sx={{
                  width: "100%",
                  backgroundColor: "#F9FAFB",
                  px: 3,
                  py: 3,
                }}
              >
                {plan.features.map((feature, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <CheckCircleIcon sx={{ color: "#54BD95" }} />
                    <Typography
                      sx={{
                        color: "#191A15",
                        fontSize: "18px",
                        fontWeight: 500,
                      }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                ))}

                <Button
                  fullWidth
                  sx={{
                    mt: 2,
                    color: "#54BD95",
                    backgroundColor: "#FFFFFF",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "30px",
                    borderRadius: "6px",
                    "&:hover": {
                      backgroundColor: "#f2f2f2",
                    },
                  }}
                >
                  {plan.buttonText}
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FivethSection;
