import { Typography, Box } from "@mui/material";
import React from "react";
import Subtract from "../assets/images/Subtract.png";
import merge from "../assets/images/merge.png"

const FourthSection = () => {
  return (
    <Box
      sx={{
        marginLeft: "130px",
        marginRight: "61px",
        marginBottom: "130px",
        display:"flex",
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center",
        
      }}
    >
      <Box>
        <Typography
          sx={{
            width: "429px",
            fontWeight: "700",
            fontSize: "50px",
            color: "#191A15",
            marginLeft: "42px",
            marginBottom: "50px",
          }}
        >
          What Benifit Will You Get
        </Typography>
        <Box
          sx={{
            display:"flex",
            flexDirection:"column",
            gap: "30px",
            justifyContent:"flex-start"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={Subtract}
              alt="subtract"
              sx={{ width: "32px", height: "32px" }}
            />
            <Typography
              sx={{
                width: "419px",
                fontWeight: "500",
                fontSize: "18px",
                color: "#191A15",
              }}
            >
              Free Consulting With Experet Saving Money
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={Subtract}
              alt="subtract"
              sx={{ width: "32px", height: "32px" }}
            />
            <Typography
              sx={{
                width: "419px",
                fontWeight: "500",
                fontSize: "18px",
                color: "#191A15",
              }}
            >
              Online Banking
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={Subtract}
              alt="subtract"
              sx={{ width: "32px", height: "32px" }}
            />
            <Typography
              sx={{
                width: "419px",
                fontWeight: "500",
                fontSize: "18px",
                color: "#191A15",
              }}
            >
              Investment Report Every Month
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={Subtract}
              alt="subtract"
              sx={{ width: "32px", height: "32px" }}
            />
            <Typography
              sx={{
                width: "419px",
                fontWeight: "500",
                fontSize: "18px",
                color: "#191A15",
              }}
            >
              Saving Money For The Future
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={Subtract}
              alt="subtract"
              sx={{ width: "32px", height: "32px" }}
            />
            <Typography
              sx={{
                width: "419px",
                fontWeight: "500",
                fontSize: "18px",
                color: "#191A15",
              }}
            >
              Online Transection
            </Typography>
          </Box>
        </Box>
      </Box>

      <img src={merge} alt="merge"/>
    </Box>
  );
};

export default FourthSection;
