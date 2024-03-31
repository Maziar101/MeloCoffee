import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import fetchapi from "../../utils/FetchApi";
import Sliders from "../../Components/Sliders";

export default function Home() {
  const [specialCoffees, setSpecialCoffees] = useState();
  useEffect(() => {
    (async () => {
      const data = await fetchapi(
        process.env.REACT_APP_BASE_API + "special-coffees"
      );
      setSpecialCoffees(data?.data);
    })();
  }, []);

  const specialCoffeeMobile = specialCoffees?.map((e) => (
    <Box
      key={e.id}
      sx={{
        width: { xs: "100%", sm: "100%", md: "200px" },
        margin: "auto",
        '&:hover img': {
          transform: 'scale(0.95)',
        },
      }}
    >
      <img
        style={{ borderRadius: "15px", transition: "transform 0.3s ease" }}
        width={"100%"}
        src={e?.mobile}
        alt={e?.desktop?.message}
      />
    </Box>
  ));

  const specialCoffeeDesktop = specialCoffees?.map((e) => (
    <Box
      key={e.id}
      sx={{
        width: { md: "100%" },
        position: "relative",
        margin: "auto",
        '&:hover img': {
          transform: 'scale(0.95)',
        },
        '&:hover .overlay': {
          transform: 'scale(0.95)', // Add translate on hover
        },
      }}
    >
      <img
        src={e?.desktop?.image}
        width={"100%"}
        style={{ borderRadius: "15px", transition: "transform 0.3s ease" }}
        alt={e?.desktop?.message}
      />
      <Typography
        className="overlay"
        sx={{
          position: "absolute",
          top: "20px",
          right: "20px",
          color: "#fff",
          fontSize: { lg: "18px", xl: "20px", xxl: "23px" },
          transition: "transform 0.3s ease",
        }}
      >
        {e?.desktop?.message}
      </Typography>
    </Box>
  ));

  return (
    <Stack component={"main"}>
      <Stack>
        <Sliders />
      </Stack>
      <Stack marginTop={"20px"}>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          gap={"14px"}
          justifyContent={"center"}
        >
          <hr color="#e9e9e9" width="22%" />
          <Typography fontSize={"22px"} variant="h4">
            قهوه های مناسب برای
          </Typography>
          <hr color="#e9e9e9" width="22%" />
        </Stack>
        <Box
          sx={{
            display: {
              lg: "none",
              md: "grid",
              sm: "grid",
              xs: "grid",
            },
            gap: {
              sm: "5px  10px",
              xs: "5px 10px",
            },
            gridTemplateColumns: {
              xs: "auto auto",
              sm: "auto auto",
              md: "auto auto auto auto",
              lg: "auto auto auto auto",
              xl: "auto auto auto auto",
              xxl: "auto auto auto auto",
            },
            marginTop: "20px !important",
            width: {
              xs: "90%",
              sm: "80%",
              md: "100%",
              lg: "100%",
              xl: "100%",
              xxl: "100%",
            },
            justifyContent: "center",
            margin: "auto",
          }}
        >
          {specialCoffeeMobile}
        </Box>
        <Box
          sx={{
            display: {
              lg: "grid",
              md: "none",
              sm: "none",
              xs: "none",
            },
            gap: {
              sm: "5px  10px",
              xs: "5px 10px",
            },
            gridTemplateColumns: {
              xs: "auto auto",
              sm: "auto auto",
              md: "auto auto auto auto",
              lg: "auto auto auto auto",
              xl: "auto auto auto auto",
              xxl: "auto auto auto auto",
            },
            marginTop: "20px !important",
            width: {
              lg: "65%",
              xl: "55%",
              xxl: "10%",
            },
            justifyContent: "center",
            margin: "auto",
          }}
        >
          {specialCoffeeDesktop}
        </Box>
      </Stack>
    </Stack>
  );
}
