import React, { useEffect, useState } from "react";
import fetchapi from "../../utils/FetchApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Box } from "@mui/material";
export default function Slider() {
  const [slideItem, setSlideItem] = useState();
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchapi(
          "http://localhost:1337/api/main-sliders?populate=*"
        );
        setSlideItem(data?.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const slides = slideItem?.map((e) => (
    <SwiperSlide>
      <img
        style={{ width: "100%" }}
        src={
          process.env.REACT_APP_BASE_URL +
          e?.attributes?.image?.data?.attributes?.url
        }
        alt={e?.attributes?.image?.data?.attributes?.name}
      />
    </SwiperSlide>
  ));
  return (
    <>
      <Box width={"100%"} marginTop={"50px"}>
        <Swiper autoplay={{delay:6000,}} modules={[Autoplay]} height={"410px"}>
          {slides}
        </Swiper>
      </Box>
    </>
  );
}
