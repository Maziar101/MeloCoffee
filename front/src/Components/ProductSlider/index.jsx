import React, { useEffect, useState } from "react";
import fetchapi from "../../utils/FetchApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductSliders({ products }) {
  const slides = products?.map((e) => (
    <SwiperSlide>
      <Stack
        width={"100%"}
        margin={"auto"}
        position={"relative"}
        boxShadow={"0 0 5px #D0CFC6"}
      >
        <Stack justifyContent={"center"}>
          <Link to={`/product-details/${e?._id}/${e?.name?.split(" ")?.join("-")}`} style={{display:"flex",justifyContent:"center"}}>
            <img
              style={{ width: "85%", margin: "auto" }}
              src={e?.image}
              alt={e?.alt}
            />
          </Link>
        </Stack>
        <Stack
          sx={{
            textAlign: "center",
            width: "100%",
            background: "#F8F7F7",
            height: "120px",
            gap: "10px",
            padding: "20px",
          }}
        >
          <Typography fontSize={"15px"}>{e?.name}</Typography>
          <Typography
            position="absolute"
            sx={{
              bottom: "15px",
              right: "50%",
              transform: "translateX(50%)",
              textAlign: "center",
            }}
          >
            {e?.price} تومان
          </Typography>
        </Stack>
      </Stack>
    </SwiperSlide>
  ));
  return (
    <>
      <Box
        sx={{ display: { lg: "flex", md: "none", xs: "none" } }}
        width={"100%"}
        marginTop={"50px"}
      >
        <Swiper slidesPerView={3} spaceBetween={20} loop={true}>
          {slides}
        </Swiper>
      </Box>
      <Box
        sx={{ display: { lg: "none", md: "flex", xs: "none" } }}
        width={"100%"}
        marginTop={"50px"}
      >
        <Swiper slidesPerView={2} spaceBetween={20} loop={true}>
          {slides}
        </Swiper>
      </Box>
      <Box
        sx={{ display: { lg: "none", md: "none", xs: "flex" } }}
        width={"100%"}
        marginTop={"50px"}
      >
        <Swiper slidesPerView={1} spaceBetween={20} loop={true} >
          {slides}
        </Swiper>
      </Box>
    </>
  );
}
