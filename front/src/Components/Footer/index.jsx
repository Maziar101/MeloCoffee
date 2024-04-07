import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import fetchapi from "../../utils/FetchApi";
import { Link } from "react-router-dom";
import EtehadImg from "../../../src/assets/etehad.png";
import EnamadImg from "../../../src/assets/enamad.png";
import SazmanImg from "../../../src/assets/sazman.png";

export default function Footer() {
  const [fastLinks, setFastLinks] = useState();
  const [hoverFooterLinks, setHoverFooterLinks] = useState(null);
  const [three, setThree] = useState([""]);
  useEffect(() => {
    (async () => {
      const data = await fetchapi(
        process.env.REACT_APP_BASE_API + "categories"
      );
      setFastLinks(data?.data?.categories[0]?.sub);
    })();
  }, []);

  const handleMouseOver = (index) => {
    setHoverFooterLinks(index);
  };

  const handleMouseOut = () => {
    setHoverFooterLinks(null);
  };

  return (
    <>
      <Stack component={"footer"} sx={{  height:"800px" , marginBottom:"100px"}}>
        <Stack sx={{ width: {xl:"85%" , lg:"90%" , md:"100%" , xs:"100%"}, margin: "auto", textAlign: "center" }}>
          <Stack
            sx={{ flexDirection: "row", gap: {xl:"20px" , lg:"20px" , md:"20px" , xs:"0px"}, justifyContent: "center" }}
          >
            {/*********First Two Stack*********/}
            <Stack sx={{ display:{xl:"flex" , lg:"flex" , md:"flex" , sm:"none" , xs:"none"} , flexDirection: "row" , gap: {xl:"180px" , lg:"160px" , md:"150px" , sm:"80px" , xs:"0px"} , width:"50%" , justifyContent:"center"}}>
              {/*********First Stack*********/}
              <Stack sx={{ gap: {xl:"0px" , lg:"0px" , md:"120px" , xs:"20px"} , position:"relative" , alignItems:"center"}}>
                <Stack sx={{ gap: "20px" }}>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "18px", fontWeight: "700" }}
                  >
                    لینک های سریع
                  </Typography>
                  <Stack
                    component={"ul"}
                    sx={{
                      gap: "15px",
                    }}
                  >
                    {fastLinks?.map((sub, index) => (
                      <Link
                        key={index}
                        style={{
                          color:
                            hoverFooterLinks === index ? "#A77B38" : "black",
                          transition: "color 0.3s", // افزودن transition
                        }}
                        onMouseOver={() => handleMouseOver(index)}
                        onMouseOut={handleMouseOut}
                      >
                        {sub}
                      </Link>
                    ))}
                  </Stack>
                </Stack>
                <Stack sx={{ gap: "10px" , position:"absolute" , top:"400px"}}>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "18px", fontWeight: "700" }}
                  >
                    آدرس فروشگاه ها
                  </Typography>
                  <Stack
                    width={"200px"}
                    component={"ul"}
                    sx={{
                      display: "flex",
                      gap: "15px",
                    }}
                  >
                    <Typography>
                      شعبه بهار شمالی: <br />
                      خ بهار شمالی پ 342
                      <br />
                      واحد اینترنتی:
                      <br />
                      نرسیده به م فردوسی ک شکوه پ7
                      <br />
                      شعبه میدان ولیعصر:
                      <br />
                      ضلع شرقی میدان ولی عصر،
                      <br />
                      نبش پاساژ ایرانیان
                      <br />
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              {/*********Second Stack*********/}
              <Stack sx={{ gap: {xl:"0px" , lg:"0px" , md:"120px" , xs:"20px"} , position:"relative",alignItems:"center"}}>
                <Stack sx={{ gap: "20px" }}>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "18px", fontWeight: "700" }}
                  >
                    حساب کاربری
                  </Typography>
                  <Stack
                    component={"ul"}
                    sx={{
                      gap: "15px",
                    }}
                  >
                    {three?.map((sub, index) => (
                      <>
                        <Link
                          style={{
                            color:
                              hoverFooterLinks === index ? "#A77B38" : "black",
                            transition: "color 0.3s", // افزودن transition
                          }}
                          onMouseOver={() => handleMouseOver(index)}
                          onMouseOut={handleMouseOut}
                        >
                          پنل کاربری
                        </Link>
                        <Link
                          style={{
                            color:
                              hoverFooterLinks === index ? "#A77B38" : "black",
                            transition: "color 0.3s", // افزودن transition
                          }}
                          onMouseOver={() => handleMouseOver(index)}
                          onMouseOut={handleMouseOut}
                        >
                          راهنمای خرید
                        </Link>
                        <Link
                          style={{
                            color:
                              hoverFooterLinks === index ? "#A77B38" : "black",
                            transition: "color 0.3s", // افزودن transition
                          }}
                          onMouseOver={() => handleMouseOver(index)}
                          onMouseOut={handleMouseOut}
                        >
                          پیگیری سفارش
                        </Link>
                      </>
                    ))}
                  </Stack>
                </Stack>
                <Stack sx={{ gap: "10px" , position:"absolute" , top:"400px"}}>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "18px", fontWeight: "700" }}
                  >
                    ساعات کاری فروشگاه
                  </Typography>
                  <Stack
                    width={"160px"}
                    component={"ul"}
                    sx={{
                      display: "flex",
                      gap: "15px",
                    }}
                  >
                    <Typography>
                      اینترنتی: 10 صبح تا 17 بعد از ظهر
                      <br />
                      پنجشنبه: 10 صبح تا 14 بعد از ظهر
                      <br />
                      شعبه خیابان بهار
                      <br />
                      10 صبح تا 9 شب
                      <br />
                      شعبه خیابان ولیعصر
                      <br />
                      8 صبح تا 9 شب
                      <br />
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            {/*********Last Two Stack*********/}
            <Stack sx={{ flexDirection: "row" , gap: {xl:"180px" , lg:"160px" , md:"150px" , sm:"90px" , xs:"90px"} , width:"50%" , justifyContent:"center"}}>
              {/*********Third Stack*********/}
              <Stack sx={{ gap: "20px" , position:"relative",alignItems:"center"}}>
                <Stack sx={{ gap: "20px" }}>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "18px", fontWeight: "700" }}
                  >
                    تماس با ما
                  </Typography>
                  <Stack
                    component={"ul"}
                    sx={{
                      gap: "15px",
                    }}
                  >
                    <Link
                      style={{
                        color: "black",
                        transition: "color 0.3s", // افزودن transition
                      }}
                    >
                      تلگرام: @LuciferorAngel
                    </Link>
                    <Link
                      style={{
                        color: "black",
                        transition: "color 0.3s", // افزودن transition
                      }}
                    >
                      ایمیل: info@gmail.com
                    </Link>
                  </Stack>
                </Stack>
                <Stack sx={{ gap: "10px" , position:"absolute" , top:{xl:"400px" , lg:"400px" , md:"400px" , sm:"300px" , xs:"300px"}}}>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "18px", fontWeight: "700" }}
                  >
                    نماد اتحادیه کشوری
                  </Typography>
                  <Stack
                    sx={{
                      display: "flex",
                      gap: "15px",
                    }}
                  >
                    <img src={EtehadImg} alt="" />
                  </Stack>
                </Stack>
              </Stack>
              {/*********Fourth Stack*********/}
              <Stack sx={{ gap: "20px" , position:"relative",alignItems:"center"}}>
                <Stack sx={{ gap: "20px" }}>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "18px", fontWeight: "700" }}
                  >
                    نماد اعتماد الکترونیکی
                  </Typography>
                  <Stack>
                    <img src={EnamadImg} alt="" />
                  </Stack>
                </Stack>
                <Stack sx={{ gap: "10px" , position:"absolute" , top:{xl:"400px" , lg:"400px" , md:"400px" , sm:"300px" , xs:"300px"}}}>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "18px", fontWeight: "700" }}
                  >
                    نماد ساماندهی
                  </Typography>
                  <Stack>
                    <img src={SazmanImg} alt="" />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
