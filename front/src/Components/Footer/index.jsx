import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import fetchapi from "../../utils/FetchApi";
import { Link } from "react-router-dom";
import EtehadImg from "../../../src/assets/etehad.png";
import EnamadImg from "../../../src/assets/enamad.png";
import SazmanImg from "../../../src/assets/sazman.png";
import colors from "../../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/Slices/TokenSlice";

export default function Footer() {
  const [fastLinks, setFastLinks] = useState();
  const [hoverFooterLinks, setHoverFooterLinks] = useState(null);
  const { list } = useSelector((state) => state.cart);
  const [three, setThree] = useState([""]);
  const [openAccount, setOpenAccount] = useState(false);
  const { token } = useSelector((state) => state.token);
  const user = useSelector((state) => state.token.user);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await fetchapi(
        process.env.REACT_APP_BASE_API + "categories"
      );
      setFastLinks(data?.data?.categories[0]?.sub);
    })();
  }, []);

  const handleOpenAccount = () => {
    setOpenAccount(!openAccount);
  };
  const handleOut = () => {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    setOpenAccount(false);
    dispatch(logout());
    window.location.reload();
  };
  const handleMouseOver = (index) => {
    setHoverFooterLinks(index);
  };

  const handleMouseOut = () => {
    setHoverFooterLinks(null);
  };

  return (
    <>
      <Stack
        sx={{
          display: {lg:"none", md:"none", xs:"flex"},
          width: "100%",
          height: "60px",
          background: "#fff",
          position: "fixed",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          zIndex: "10",
          bottom: "0",
          left: "0",
        }}
      >
        <Typography color={"#000"} sx={{ position: "relative" }}>
          <Link to={"/cart"}>
            <ShoppingBagOutlinedIcon sx={{ color: "black" }} />
          </Link>
          <Typography
            variant="span"
            sx={{
              position: "absolute",
              top: "-5px",
              left: "-5px",
              background: colors.headerBack,
              color: "#fff",
              borderRadius: "50%",
              height: "15px",
              fontSize: "9px",
              width: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {list.length}
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              bottom: "-10px",
              right: "-12px",
              width: "70px",
              fontSize: "11px",
              fontWeight: "700",
              color: "#333",
            }}
          >
            سبد خرید
          </Typography>
        </Typography>
        <Typography color={"#000"} sx={{ position: "relative" }}>
          <Link to={!token && "/login-register"} onClick={token && handleOpenAccount}>
            <PersonOutlinedIcon sx={{ color: "black" }} />
          </Link>
          {token ? (
            <Typography
              onClick={handleOpenAccount}
              sx={{
                position: "absolute",
                bottom: "-10px",
                right: "-30px",
                width: "100px",
                fontSize: "11px",
                fontWeight: "700",
                color: "#333",
                cursor: "pointer",
              }}
            >
              سلام {user?.name} عزیز
            </Typography>
          ) : (
            <Link
              to={"/login-register"}
              style={{
                position: "absolute",
                bottom: "-10px",
                right: "-20px",
                width: "100px",
                fontSize: "11px",
                fontWeight: "700",
                color: "#333",
                cursor: "pointer",
              }}
            >
              ورود / ثبت نام
            </Link>
          )}

          {openAccount && (
            <Box
              sx={{
                position: "fixed",
                bottom: "60px",
                right: "140px",
              }}
            >
              <Button variant="contained" color="error" onClick={handleOut}>
                خروج از حساب
              </Button>
            </Box>
          )}
        </Typography>
        <Typography color={"#000"} sx={{ position: "relative" }}>
          <Link>
            <EditNoteOutlinedIcon sx={{ color: "black" }} />
          </Link>
          <Typography
            sx={{
              position: "absolute",
              bottom: "-10px",
              right: "-1px",
              width: "70px",
              fontSize: "11px",
              fontWeight: "700",
              color: "#333",
            }}
          >
            وبلاگ
          </Typography>
        </Typography>
        <Typography color={"#000"} sx={{ position: "relative" }}>
          <Link to={"/"}>
            <CottageOutlinedIcon sx={{ color: "black" }} />
          </Link>
          <Typography
            sx={{
              position: "absolute",
              bottom: "-10px",
              right: "2px",
              width: "70px",
              fontSize: "11px",
              fontWeight: "700",
              color: "#333",
            }}
          >
            خانه
          </Typography>
        </Typography>
      </Stack>

      {/*************Footer**************/}
      <Stack
        component={"footer"}
        sx={{ height: "800px", marginBottom: "100px" }}
      >
        <Stack
          sx={{
            width: { xl: "85%", lg: "90%", md: "100%", xs: "100%" },
            margin: "auto",
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              flexDirection: "row",
              gap: { xl: "20px", lg: "20px", md: "20px", xs: "0px" },
              justifyContent: "center",
            }}
          >
            {/*********First Two Stack*********/}
            <Stack
              sx={{
                display: {
                  xl: "flex",
                  lg: "flex",
                  md: "flex",
                  sm: "none",
                  xs: "none",
                },
                flexDirection: "row",
                gap: {
                  xl: "180px",
                  lg: "160px",
                  md: "150px",
                  sm: "80px",
                  xs: "0px",
                },
                width: "50%",
                justifyContent: "center",
              }}
            >
              {/*********First Stack*********/}
              <Stack
                sx={{
                  gap: { xl: "0px", lg: "0px", md: "120px", xs: "20px" },
                  position: "relative",
                  alignItems: "center",
                }}
              >
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
                <Stack sx={{ gap: "10px", position: "absolute", top: "400px" }}>
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
              <Stack
                sx={{
                  gap: { xl: "0px", lg: "0px", md: "120px", xs: "20px" },
                  position: "relative",
                  alignItems: "center",
                }}
              >
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
                <Stack sx={{ gap: "10px", position: "absolute", top: "400px" }}>
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
            <Stack
              sx={{
                flexDirection: "row",
                gap: {
                  xl: "180px",
                  lg: "160px",
                  md: "150px",
                  sm: "90px",
                  xs: "90px",
                },
                width: "50%",
                justifyContent: "center",
              }}
            >
              {/*********Third Stack*********/}
              <Stack
                sx={{ gap: "20px", position: "relative", alignItems: "center" }}
              >
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
                <Stack
                  sx={{
                    gap: "10px",
                    position: "absolute",
                    top: {
                      xl: "400px",
                      lg: "400px",
                      md: "400px",
                      sm: "300px",
                      xs: "300px",
                    },
                  }}
                >
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
              <Stack
                sx={{ gap: "20px", position: "relative", alignItems: "center" }}
              >
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
                <Stack
                  sx={{
                    gap: "10px",
                    position: "absolute",
                    top: {
                      xl: "400px",
                      lg: "400px",
                      md: "400px",
                      sm: "300px",
                      xs: "300px",
                    },
                  }}
                >
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
