import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const plans = [
  {
    id: "free",
    title: "Free",
    price: 0,
    features: [
      "2 Users",
      "2 Files",
      "Public Share & Comments",
      "Chat Support",
      "New income apps",
    ],
    actionText: "Signup for free",
    description: "Have a go and test your superpowers",
  },
  {
    id: "pro",
    title: "Pro",
    price: 8,
    features: [
      "4 Users",
      "All apps",
      "Unlimited editable exports",
      "Folders and collaboration",
      "All incoming apps",
    ],
    actionText: "Go to pro",
    description: "Experiment the power of infinite possibilities",
    promoText: "Save $50 a year",
  },
  {
    id: "business",
    title: "Business",
    price: 16,
    features: [
      "All the features of pro plan",
      "Account success Manager",
      "Single Sign-On (SSO)",
      "Co-conception pogram",
      "Collaboration-Soon",
    ],
    actionText: "Goto Business",
    description: "Unveil new superpowers and join the Design League",
  },
];

const BillingToggle = () => {
  const [selectedPlan, setSelectedPlan] = useState("pro");

  return (
    <Grid container spacing={3} justifyContent="center">
      {plans.map((plan) => {
        const isSelected = plan.id === selectedPlan;

        return (
          <Grid item xs={12} sm={6} md={4} key={plan.id}>
            <Box
              onClick={() => setSelectedPlan(plan.id)}
              sx={{
                backgroundColor: isSelected ? "#54BD95" : "#FFFFFF",
                borderRadius: "20px",
                maxWidth: "374px",
                maxHeight: "684px",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                position: "relative",
                padding: "20px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: isSelected ? "none" : "1px solid #e0e0e0",
                boxShadow: isSelected
                  ? "0px 10px 30px rgba(84, 189, 149, 0.4)"
                  : "none",
              }}
            >
              {/* Background Circle for selected plan */}
              {isSelected && (
                <Box
                  sx={{
                    position: "absolute",
                    width: "600px",
                    height: "600px",
                    bgcolor: "#6BC2A1",
                    opacity: 0.5,
                    borderRadius: "50%",
                    top: "180px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 0,
                  }}
                />
              )}

              {/* Header Section */}
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  zIndex: 1,
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    color: isSelected ? "#FFFFFF" : "#000000",
                    fontWeight: "600",
                    fontSize: "30px",
                    marginTop: "40px",
                  }}
                >
                  {plan.title}
                </Typography>

                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px",
                    lineHeight: "27px",
                    color: isSelected ? "#FFFFFF" : "#777777",
                    marginBottom: "40px",
                  }}
                >
                  {plan.description}
                </Typography>

                <Typography sx={{ color: isSelected ? "#FFFFFF" : "#000000" }}>
                  $
                </Typography>

                <Typography
                  sx={{
                    lineHeight: "30px",
                    fontSize: "50px",
                    fontWeight: "600",
                    color: isSelected ? "#FFFFFF" : "#000000",
                  }}
                >
                  {plan.price}
                </Typography>

                {plan.promoText && isSelected && (
                  <Button
                    sx={{
                      marginTop: "16px",
                      bgcolor: "#85DAB9",
                      fontWeight: "600",
                      fontSize: "14px",
                      lineHeight: "30px",
                      color: "#ffffff",
                      "&:hover": {
                        backgroundColor: "#74c8a7",
                      },
                    }}
                  >
                    {plan.promoText}
                  </Button>
                )}
              </Box>

              {/* Features Section */}
              <Box
                sx={{
                  paddingTop: "26px",
                  paddingBottom: "25px",
                  paddingX: "37px",
                  backgroundColor: "#ffffff",
                  marginTop: "15px",
                  borderRadius: "10px",
                  zIndex: 2,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {plan.features.map((feature, i) => (
                  <Box key={i} sx={{ display: "flex", gap: "10px" }}>
                    <CheckCircleIcon sx={{ color: "#54BD95" }} />
                    <Typography
                      sx={{
                        color: "#191A15",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "30px",
                      }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                ))}

                {/* Action Button */}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#54BD95",
                    width: "100%",
                    marginTop: "20px",
                    "&:hover": {
                      backgroundColor: "#45ab84",
                    },
                  }}
                >
                  {plan.actionText}
                </Button>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BillingToggle;
