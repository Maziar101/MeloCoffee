import React, { useEffect, useState } from "react";
import fetchapi from "../../utils/FetchApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Box } from "@mui/material";
export default function Sliders() {
  const [slideItem, setSlideItem] = useState();
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchapi(process.env.REACT_APP_BASE_API + "sliders");
        setSlideItem(data?.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const slides = slideItem?.map((e) => (
    <SwiperSlide>
      <img style={{ width: "100%" }} src={e?.image} alt={e?.alt} />
    </SwiperSlide>
  ));
  return (
    <>
      <Box width={"100%"} marginTop={"50px"}>
        <Swiper
         
         modules={[Autoplay]}
          slideToClickedSlide={true}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
        >
          {slides}
        </Swiper>
      </Box>
    </>
  );
}

