import React from "react";
import { Typography, Box, Button, Grid } from "@mui/material";
import lastbgImg from "../assets/images/lastbgImg.png";
import subtract from "../assets/images/subtract.png";

const FivethSection = () => {
  return (
    <Box
      sx={{
        px: { xs: 4, md: "141px" },
        mb: "130px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "50px",
          color: "#191A15",
          lineHeight: "73px",
          textAlign: "center",
        }}
      >
        Choose Plan <br /> That’s Right For You
      </Typography>

      {/* Subheading */}
      <Typography
        sx={{
          fontSize: "18px",
          color: "#A6A6A6",
          mt: "40px",
          mb: "40px",
          textAlign: "center",
        }}
      >
        Choose plan that works best for you, feel free to contact us
      </Typography>

      {/* Toggle Button */}
      <Box
        sx={{
          width: "340px",
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1,
          borderRadius: "40px",
          boxShadow: 1,
          mb: "60px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "18px",
            color: "#191A15",
          }}
        >
          Bill Monthly
        </Typography>
        <Button
          sx={{
            backgroundColor: "#54BD95",
            width: "120px",
            borderRadius: "40px",
            fontWeight: 500,
            fontSize: "18px",
            color: "#ffffff",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#4ab388",
            },
          }}
        >
          Bill Yearly
        </Button>
      </Box>

      {/* Plan Grid */}
      <Grid container spacing={4}>

        {/* Plan 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
              boxShadow: "0px 4px 9px 0px #0000000D",
              width: "100%",
              height: "100%",
              backgroundColor: "#fff",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                width: "100%",
                maxWidth: "240px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  color: "#191A15",
                  mb: "10px",
                  fontWeight: 600,
                }}
              >
                Free
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "#A6A6A6",
                  textAlign: "center",
                  mb: "10px",
                }}
              >
                Have a go and test your superpowers
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "50px",
                  color: "#191A15",
                }}
              >
                0
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#F9FAFB",
                borderRadius: "10px",
                m: "0 20px 25px 20px",
                width: "calc(100% - 40px)",
              }}
            >
              <Box sx={{ padding: "37px" }}>
                {[
                  "2 Users",
                  "2 Files",
                  "Public Share & Comments",
                  "Chat Support",
                  "New income apps",
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "10px",
                      mb: "22px",
                    }}
                  >
                    <img src={subtract} alt="subtract icon" />
                    <Typography
                      sx={{
                        fontSize: "18px",
                        color: "#191A15",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}

                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    borderRadius: "20px",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0px 4px 9px 0px #0000000D",
                    color: "#54BD95",
                    fontSize: "18px",
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  My Button
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Plan 2 - Background image card */}
        
         

        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundImage: `url(${lastbgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              minHeight: "500px",
              borderRadius: "20px",
              boxShadow: "0px 4px 9px 0px #0000000D",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                width: "100%",
                maxWidth: "240px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  color: "##FFFFFF",
                  mb: "10px",
                  fontWeight: 600,
                }}
              >
                Pro
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "#ffffff",
                  textAlign: "center",
                  mb: "10px",
                }}
              >
       Experiment the power of infinite possibilities
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "50px",
                  color: "#ffffff",
                }}
              >
                8
              </Typography>
            </Box>

            <Button sx={{
            borderRadius:"10px",
            fontSize:"14px",
            color:"#ffffff",
            backgroundColor:"#85DAB9"
            }}>Save $50 a year</Button>

            <Box
              sx={{
                backgroundColor: "#F9FAFB",
                borderRadius: "10px",
                m: "0 20px 25px 20px",
                width: "calc(100% - 40px)",
              }}
            >
              <Box sx={{ padding: "37px" }}>
                {[
                  "All the features of pro plan",
                  "Account success Manager",
                  "Single Sign-On (SSO)",
                  "Co-conception program",
                  "Collaboration - Soon",
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "10px",
                      mb: "22px",
                    }}
                  >
                    <img src={subtract} alt="subtract icon" />
                    <Typography
                      sx={{
                        fontSize: "18px",
                        color: "#191A15",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}

                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    borderRadius: "20px",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0px 4px 9px 0px #0000000D",
                    color: "#54BD95",
                    fontSize: "18px",
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  Collaboration - Soon
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Plan 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
              boxShadow: "0px 4px 9px 0px #0000000D",
              width: "100%",
              height: "100%",
              backgroundColor: "#fff",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                width: "100%",
                maxWidth: "240px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  color: "#191A15",
                  mb: "10px",
                  fontWeight: 600,
                }}
              >
                Business
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "#A6A6A6",
                  textAlign: "center",
                  mb: "10px",
                }}
              >
                Unveil new superpowers and join the Design League
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "50px",
                  color: "#191A15",
                }}
              >
                16
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#F9FAFB",
                borderRadius: "10px",
                m: "0 20px 25px 20px",
                width: "calc(100% - 40px)",
              }}
            >
              <Box sx={{ padding: "37px" }}>
                {[
                  "All the features of pro plan",
                  "Account success Manager",
                  "Single Sign-On (SSO)",
                  "Co-conception program",
                  "Collaboration - Soon",
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "10px",
                      mb: "22px",
                    }}
                  >
                    <img src={subtract} alt="subtract icon" />
                    <Typography
                      sx={{
                        fontSize: "18px",
                        color: "#191A15",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}

                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    borderRadius: "20px",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0px 4px 9px 0px #0000000D",
                    color: "#54BD95",
                    fontSize: "18px",
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  Collaboration - Soon
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FivethSection;
