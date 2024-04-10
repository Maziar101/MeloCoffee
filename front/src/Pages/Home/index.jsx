import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import fetchapi from "../../utils/FetchApi";
import likeIcon from "../../assets/like-icon.png";
import "swiper/css/pagination";
import deliveryIcon from "../../assets/delivery-icon.png";
import calenderIcon from "../../assets/calender-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import robostaImg from "../../assets/robosta.jpg";
import arabikaImg from "../../assets/arabica.jpg";
import tarkibiImg from "../../assets/tarkibi.jpg";
import highCoffeeImg from "../../assets/highCoffee.jpg";
import frenchImg from "../../assets/french.jpg";
import espersoBarghImg from "../../assets/espesobargh.jpg";
import mokapatImg from "../../assets/mokapat.jpg";
import mosaferatiImg from "../../assets/mosaferati.jpg";
import ProductSlider from "../../Components/ProductSlider/index.jsx";
import Sliders from "../../Components/Sliders/index.jsx";
import CoffeeAccordion from "../../Components/Accordion/index.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  const [specialCoffees, setSpecialCoffees] = useState();
  const [allProducts, setAllProducts] = useState();
  const [coffeeMaker, setCoffeeMaker] = useState();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await fetchapi(
        process.env.REACT_APP_BASE_API + "special-coffees"
      );
      setSpecialCoffees(data?.data);
    })();
    (async () => {
      const data = await fetchapi(process.env.REACT_APP_BASE_API + "products");
      setAllProducts(data?.data);
    })();
    (async () => {
      const data = await fetchapi(
        process.env.REACT_APP_BASE_API +
          "products?categoryId=660abf6d23641b8a611fb550"
      );
      setCoffeeMaker(data?.data);
    })();
  }, []);
  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const newCoffeeImages = [
    { src: tarkibiImg, alt: "ترکیبی" },
    { src: arabikaImg, alt: "آرابیکا" },
    { src: robostaImg, alt: "رابوستا" },
    { src: highCoffeeImg, alt: "قهوه ارشیو" },
  ];
  const damCoffeeImages = [
    { src: mosaferatiImg, alt: "mosaferati" },
    { src: frenchImg, alt: "frenchPress" },
    { src: mokapatImg, alt: "mokapat" },
    { src: espersoBarghImg, alt: "espersosaz" },
  ];

  const CoffeeCards = newCoffeeImages.map((coffee, index) => (
    <Box
      key={index}
      sx={{
        position: "relative",
        cursor: "pointer",
        "&:hover img": {
          transform: "scale(0.95)",
        },
        "&:hover .overlay": {
          transform: "scale(0.95)", // Add translate on hover
        },
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <Link
        to={`/products/6601ad57bb7b1314d4cb97c9/${coffee.alt
          ?.split(" ")
          ?.join("-")}`}
      >
        <img
          src={coffee.src}
          width={"270px"}
          style={{ borderRadius: "15px", transition: "transform 0.3s ease" }}
          alt={coffee.alt}
        />
      </Link>
    </Box>
  ));
  const damCoffeesCart = damCoffeeImages.map((coffee, index) => (
    <Box
      key={index}
      sx={{
        position: "relative",
        cursor: "pointer",
        "&:hover img": {
          transform: "scale(0.95)",
        },
        "&:hover .overlay": {
          transform: "scale(0.95)", // Add translate on hover
        },
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <Link
        to={`/products/660abf6d23641b8a611fb550/${coffee.alt
          ?.split(" ")
          ?.join("-")}`}
      >
        <img
          src={coffee.src}
          width={"270px"}
          style={{ borderRadius: "15px", transition: "transform 0.3s ease" }}
          alt={coffee.alt}
        />
      </Link>
    </Box>
  ));
  const specialCoffeeMobile = specialCoffees?.map((e) => (
    <Box
      key={e.id}
      sx={{
        width: { xs: "100%", sm: "100%", md: "200px" },
        margin: "auto",
        "&:hover img": {
          transform: "scale(0.95)",
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
        cursor: "pointer",
        "&:hover img": {
          transform: "scale(0.95)",
        },
        "&:hover .overlay": {
          transform: "scale(0.95)", // Add translate on hover
        },
      }}
    >
      <Link
        to={`/products/6601ad57bb7b1314d4cb97c9/${e?.desktop?.message
          ?.split(" ")
          ?.join("-")}`}
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
      </Link>
    </Box>
  ));

  return (
    <Stack component={"main"}>
      {/********First Slider********/}
      <Stack>
        <Sliders />
      </Stack>
      {/********Special Coffees********/}
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
              xl: "60%",
              xxl: "10%",
            },
            justifyContent: "center",
            margin: "auto",
          }}
        >
          {specialCoffeeDesktop}
        </Box>
      </Stack>
      <Box
        sx={{
          marginTop: "10px",
          display: "grid",
          gap: "20px",
          width: {
            xl: "60%",
            lg: "65%",
            md: "77%",
            sm: "80%",
            xs: "85%",
          },
          margin: "auto",
          padding: "10px",
          gridTemplateColumns: {
            xl: "auto auto",
            lg: "auto auto",
            md: "auto auto",
            sm: "auto",
            xs: "auto",
          },
          backgroundImage:
            "linear-gradient(180deg, #EBE5E58A 0%, #FFFFFF7D 100%)",
          backgroundColor: "transparent",
        }}
      >
        <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "0px" }}>
          <Stack
            sx={{
              gap: "8px",
              textAlign: {
                xl: "center",
                lg: "center",
                md: "center",
                sm: "right",
                xs: "right",
              },
              width: {
                xl: "210px",
                lg: "210px",
                md: "210px",
                sm: "100%",
                xs: "100%",
              },
              margin: "auto",
            }}
          >
            <Typography fontWeight={"700"}>ارسال با پیک و پست</Typography>
            <Typography fontSize="14px">
              ارسال رایگان برای تمامی سفارشات
            </Typography>
          </Stack>
          <img src={deliveryIcon} alt="delivery-icon" width={"50px"} />
        </Stack>
        <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "10px" }}>
          <Stack
            sx={{
              gap: "5px",
              textAlign: {
                xl: "center",
                lg: "center",
                md: "center",
                sm: "right",
                xs: "right",
              },
              width: {
                xl: "210px",
                lg: "210px",
                md: "210px",
                sm: "100%",
                xs: "100%",
              },
              margin: "auto",
            }}
          >
            <Typography fontWeight={"700"}>ضمانت 7 روزه</Typography>
            <Typography fontSize="14px">
              ضمانت 7 روزه عودت سفارشات در صورت داشتن مشکل
            </Typography>
          </Stack>
          <img src={calenderIcon} alt="calender-icon" width={"50px"} />
        </Stack>
        <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "10px" }}>
          <Stack
            sx={{
              gap: "5px",
              textAlign: {
                xl: "center",
                lg: "center",
                md: "center",
                sm: "right",
                xs: "right",
              },
              width: {
                xl: "210px",
                lg: "210px",
                md: "210px",
                sm: "100%",
                xs: "100%",
              },
              margin: "auto",
            }}
          >
            <Typography fontWeight={"700"}>پشتیبانی قهوه ملو</Typography>
            <Typography fontSize="14px">
              در صورت نیاز با ما در تماس باشید. 021-86072157
            </Typography>
          </Stack>
          <img src={phoneIcon} alt="phone-icon" width={"50px"} />
        </Stack>
        <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "10px" }}>
          <Stack
            sx={{
              gap: "5px",
              textAlign: {
                xl: "center",
                lg: "center",
                md: "center",
                sm: "right",
                xs: "right",
              },
              width: {
                xl: "210px",
                lg: "210px",
                md: "210px",
                sm: "100%",
                xs: "100%",
              },
              margin: "auto",
            }}
          >
            <Typography fontWeight={"700"}>روست تخصصی قهوه ها</Typography>
            <Typography fontSize="14px">
              قهوه ها در بهترین کیفیت و تازه ترین حالت، بدست شما خواهد رسید
            </Typography>
          </Stack>
          <img src={likeIcon} alt="delivery-icon" width={"50px"} />
        </Stack>
      </Box>
      {/********New Product Slider********/}
      <Stack
        sx={{
          backgroundImage:
            "linear-gradient(180deg, #EBE5E58A 0%, #FFFFFF7D 100%)",
          backgroundColor: "transparent",
          width: { lg: "60%", md: "70%", xs: "80%" },
          margin: "auto",
          padding: "20px 0px 20px 0px",
        }}
      >
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          gap={"14px"}
          justifyContent={"center"}
        >
          <hr color="#e9e9e9" width="35%" />
          <Typography
            sx={{
              fontSize: { lg: "22px", md: "18px", xs: "16px" },
              textAlign: "center",
            }}
            variant="h4"
          >
            جدید ترین محصولات
          </Typography>
          <hr color="#e9e9e9" width="35%" />
        </Stack>
        <Stack width={"90%"} margin={"auto"}>
          <ProductSlider products={allProducts?.slice(-5)} />
        </Stack>
      </Stack>
      {/********Type Of Coffee********/}
      <Stack
        sx={{ width: { lg: "60%", md: "70%", xs: "80%" }, margin: "auto" }}
      >
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          gap={"14px"}
          justifyContent={"center"}
          marginTop={"10px"}
        >
          <hr color="#e9e9e9" width="35%" />
          <Typography
            sx={{
              fontSize: { lg: "22px", md: "18px", xs: "16px" },
              textAlign: "center",
            }}
            variant="h4"
          >
            انواع قهوه
          </Typography>
          <hr color="#e9e9e9" width="35%" />
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            gap: "10px",
            marginTop: "30px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {CoffeeCards}
        </Stack>
      </Stack>
      {/********New Product Slider********/}
      <Stack
        sx={{ width: { lg: "60%", md: "70%", xs: "80%" }, margin: "auto" }}
      >
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          gap={"14px"}
          justifyContent={"center"}
          marginTop={"20px"}
        >
          <hr color="#e9e9e9" width="35%" />
          <Typography
            sx={{
              fontSize: { lg: "22px", md: "18px", xs: "16px" },
              textAlign: "center",
            }}
            variant="h4"
          >
            ابزار دم آوری قهوه
          </Typography>
          <hr color="#e9e9e9" width="35%" />
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            gap: "10px",
            marginTop: "30px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {damCoffeesCart}
        </Stack>
      </Stack>
      {/********Coffee Maker Slider********/}
      <Stack
        sx={{
          width: { lg: "60%", md: "70%", xs: "80%" },
          margin: "auto",
          padding: "20px 0px 20px 0px",
        }}
      >
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          gap={"14px"}
          justifyContent={"center"}
        >
          <hr color="#e9e9e9" width="35%" />
          <Typography
            sx={{
              fontSize: { lg: "22px", md: "18px", xs: "16px" },
              textAlign: "center",
            }}
            variant="h4"
          >
            جدید ترین محصولات
          </Typography>
          <hr color="#e9e9e9" width="35%" />
        </Stack>
        <Stack width={"90%"} margin={"auto"}>
          <ProductSlider products={coffeeMaker} />
        </Stack>
      </Stack>
      <hr width="60%" style={{ margin: "20px auto" }} />
      <Stack
        sx={{
          width: { lg: "60%", md: "70%", xs: "80%" },
          boxShadow: "0 0 5px black",
          padding: "20px",
          margin: "auto",
          textAlign: "center",
          gap: "20px",
        }}
      >
        <Typography
          component={"h1"}
          sx={{ fontSize: "28px", fontWeight: "700" }}
        >
          خرید قهوه
        </Typography>
        <Typography>
          خرید آنلاین قهوه از فروشگاه قهوه ملو می‌تواند یک تجربه‌ی شگفت‌انگیز
          برای شما باشد، به خصوص زمانی که شما به دنبال قهوه‌ ای با کیفیت بالا و
          تازگی و طراوت فوق‌ العاده از قهوه خود هستید. فروشگاه اینترنتی قهوه
          ملو، به شما این امکان را می‌دهد تا به راحتی و با اطمینان، قهوه‌ی مورد
          نظر خود را از میان انواع مختلفی دانه قهوه که در این فروشگاه موجود است،
          انتخاب نمایید.
        </Typography>
      </Stack>
      <Stack
        sx={{
          width: { lg: "60%", md: "70%", xs: "80%" },
          margin: "20px auto",
        }}
      >
        <CoffeeAccordion />
      </Stack>
    </Stack>
  );
}
