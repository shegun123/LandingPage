import React from "react";
import { Box } from "@mui/material";
const BackgroundColor = () => {
  return (
    <>
      <Box
        display={{ md: "block", xs: "none" }}
        sx={{
          position: "absolute",
          width: "634px",
          height: "634px",
          top: "-280px",
          left: "-317px",
          background: "#52BDAA",
          filter: "blur(1000px)",
          transform: "rotate(173.52deg)",
          zIndex: "-1",
        }}
      />

      <Box
        display={{ md: "block", xs: "none" }}
        sx={{
          position: "absolute",
          width: "634px",
          height: "634px",
          top: "-364px",
          right: "60px",
          background: "#FFD6D6",
          filter: "blur(1000px)",
          transform: "rotate(173.52deg)",
          zIndex: "-1",
        }}
      />

      <Box
        display={{ md: "block", xs: "none" }}
        sx={{
          position: "absolute",
          width: "634px",
          height: "634px",
          top: "270px",
          right: "60px",
          background: "#54BE96",
          filter: "blur(1000px)",
          transform: "rotate(173.52deg)",
          zIndex: "-1",
        }}
      />

      <Box
        display={{ md: "block", xs: "none" }}
        sx={{
          position: "absolute",
          width: "634px",
          height: "634px",
          top: "219px",
          right: "60px",
          background: "#FFFFFF",
          filter: "blur(1000px)",
          transform: "rotate(173.52deg)",
          zIndex: "-1",
        }}

        
      />

      <Box 
       display={{ md: "block", xs: "none" }}
       sx={{
         position: "absolute",
         width: "634px",
         height: "634px",
         top: "3278px",
         
         background: "#54BE96",
         filter: "blur(1000px)",
         transform: "rotate(173.52deg)",
         
       }}
      />
    </>
  );
};

export default BackgroundColor;
