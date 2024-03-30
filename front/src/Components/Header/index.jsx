import {
  AppBar,
  Box,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createMuiTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import colors from "../../utils/colors";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import HeaderLogo from "../../assets/logo-png.png"; 
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import fetchapi from "../../utils/FetchApi";

export default function Header() {
  const { token } = useSelector((state) => state.token);
  const { list } = useSelector((state) => state.cart);
  const First = ["خرید قهوه", "قهوه ترک", "فرنچ برس", "موکاپات"];
  const [category, setCategory] = useState();
  const [showSubMenus, setShowSubMenus] = useState(
    Array(category?.length).fill(false)
  );
  const [showCatMobile, setShowCatMobile] = useState(false);
  const [iconColor, setIconColor] = useState("#242424"); // رنگ آیکون اصلی
  const [arrowIconColor, setArrowIconColor] = useState("#242424");
  const [showCat, setShowCat] = useState();
  const [iconStates, setIconStates] = useState(
    Array(category?.length).fill(false)
  );

  const [hoveredIndex, setHoveredIndex] = useState(null); // اضافه کردن متغیر برای ذخیره شاخصی که هاور شده است
  const [linkColors, setLinkColors] = useState(
    Array(First?.length).fill("#fff")
  );

  useEffect(() => {
    (async () => {
      const data = await fetchapi(
        process.env.REACT_APP_BASE_API + "categories"
      );
      setCategory(data?.data?.categories);
    })();
  }, []);
  const handleIconClick = (index) => {
    const newIconStates = [...iconStates];
    newIconStates[index] = !newIconStates[index];
    setIconStates(newIconStates);

    // تغییر بک‌گراند آیکون به رنگ قهوه‌ای
    const iconParent = document.getElementById(`iconParent${index}`);
    if (iconParent) {
      if (newIconStates[index]) {
        iconParent.style.backgroundColor = "#412A22"; // تنظیم بک‌گراند به رنگ قهوه‌ای
        setIconColor("white"); // تغییر رنگ آیکون به سفید
        setArrowIconColor("white"); // تغییر رنگ آیکون پیکان به سفید
      } else {
        iconParent.style.backgroundColor = "transparent"; // بازگشت به حالت اولیه
        setIconColor("#242424"); // بازگشت به رنگ اولیه آیکون
        setArrowIconColor("#242424"); // بازگشت به رنگ اولیه آیکون پیکان
      }
    }
  };
  const theme = createMuiTheme({
    direction: "rtl", // Both here and <body dir="rtl">
  });
  const handleMouseOver = (index) => {
    setShowCat(true);

    // بستن تمام زیرمنوها به جز زیرمنوی مورد نظر
    const newShowSubMenus = showSubMenus.map(() => false);
    newShowSubMenus[index] = true;
    setShowSubMenus(newShowSubMenus);

    setHoveredIndex(index); // تنظیم شاخص هاور شده
    const updatedColors = [...linkColors];
    updatedColors[index] = "rgba(255,255,255,0.8)";
    setLinkColors(updatedColors);
  };

  const handleMouseOut = (index) => {
    setShowCat(false);
    setHoveredIndex(null); // حذف شاخص هاور شده
    const updatedColors = [...linkColors];
    updatedColors[index] = "#fff";
    setLinkColors(updatedColors);

    // بستن تمام زیرمنوها
    setShowSubMenus(showSubMenus.map(() => false));
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar
          style={
            showCat
              ? {
                  backgroundColor: "#fff",
                  position: "static",
                  boxShadow: "none",
                  zIndex: "10",
                  paddingBottom: "15px",
                }
              : {
                  backgroundColor: "#fff",
                  paddingBottom: "20px",
                  zIndex: "10",
                  boxShadow: "none",
                  position: "static",
                }
          }
        >
          <Stack
            sx={{
              backgroundColor: colors.headerBack,
              height: "40px",
              justifyContent: "center",
            }}
          >
            <Stack
              justifyContent={"space-between"}
              flexDirection={"row"}
              alignItems={"center"}
              width={"65%"}
              sx={{
                justifyContent: {
                  md: "center",
                  sm: "center",
                  xs: "center",
                  lg: "space-between",
                },
              }}
              m={"auto"}
            >
              <Stack
                sx={{ flexDirection: "row", gap: "20px" }}
                component={"ul"}
              >
                {First.map((item, index) => (
                  <Typography
                    key={index}
                    fontSize={11.5}
                    sx={{
                      display: {
                        xs: "none",
                        lg: "block",
                        md: "none",
                        sm: "none",
                      },
                    }}
                    component={"li"}
                  >
                    <Link
                      onMouseOver={() => handleMouseOver(index)}
                      onMouseOut={() => handleMouseOut(index)}
                      className="firstHoverHeader"
                      style={{ color: linkColors[index] }}
                    >
                      {item}
                    </Link>
                  </Typography>
                ))}
              </Stack>
              <Stack
                sx={{
                  height: {
                    md: "40px",
                    sm: "40px",
                    xs: "40px",
                    lg: "auto",
                  },
                  background: {
                    md: "rgba(255,255,255,0.3)",
                    sm: "rgba(255,255,255,0.3)",
                    xs: "rgba(255,255,255,0.3)",
                    lg: "none",
                  },
                  borderRadius: "50%",
                  width: {
                    md: "40px",
                    sm: "40px",
                    xs: "40px",
                    lg: "auto",
                  },
                }}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Link
                  to={"https://www.instagram.com/m._.mweb/"}
                  style={{
                    color: "#fff",
                    display: "flex",

                    height: {
                      md: "40px",
                      sm: "40px",
                      xs: "auto",
                      lg: "auto",
                    },
                    width: {
                      md: "40px",
                      sm: "40px",
                      xs: "auto",
                      lg: "auto",
                    },
                  }}
                >
                  <InstagramIcon
                    sx={{
                      borderRadius: "50%",
                      height: "20px",
                      width: "20px",
                    }}
                  />
                </Link>
              </Stack>
            </Stack>
          </Stack>
          {/* middle of Header Top Desktop*/}
          <Stack
            onMouseOver={()=>setShowCat(false)}
            sx={{
              height: "105px",
              justifyContent: "center",
              borderBottom: "1px solid rgba(129, 129, 129, 0.2)",
              display: {
                md: "none",
                sm: "none",
                xs: "none",
                lg: "none",
                xl: "flex",
              },
            }}
          >
            <Stack
              sx={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}
              width={"65%"}
              m={"auto"}
            >
              <Stack>
                <Link to={"/"}>
                  <img width={115} src={HeaderLogo} />
                </Link>
              </Stack>
              <Stack
                sx={{ flexDirection: "row", gap: "15px", alignItems: "center" }}
              >
                <Link style={{ color: "#000", fontWeight: "700" }}>
                  {token ? "حساب کاربری" : "ورود / ثبت نام"}
                </Link>
                <Typography color={"black"} variant={"span"}>
                  <Link>
                    <SearchIcon sx={{ color: "#000" }} />
                  </Link>
                </Typography>

                <Typography color={"#000"} sx={{ position: "relative" }}>
                  <Link>
                    <ShoppingCartOutlinedIcon sx={{ color: "#000" }} />
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
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          {/* End of Header Top Desktop*/}
          <Stack
            sx={{
              display: {
                md: "none",
                sm: "none",
                xs: "none",
                lg: "none",
                xl: "block",
              },
              margin: "auto",
            }}
            width={"75%"}
          >
            <Stack
              width={"88%"}
              m={"auto"}
              component={"ul"}
              sx={{
                gap: "20px",
                flexDirection: "row",
                marginTop: "10px",
                position: "relative",
              }}
            >
              {category?.map((e, index) => (
                <Typography
                  key={index}
                  fontSize={13.5}
                  fontWeight={"700"}
                  marginTop={"5px"}
                  color={"black"}
                  display={"flex"}
                  flexDirection={"row"}
                  sx={{ cursor: "pointer" }}
                  alignItems={"center"}
                  component={"li"}
                  onMouseOver={() => handleMouseOver(index)}
                  
                >
                  {e?.name}
                  <KeyboardArrowDownIcon sx={{ color: "#DBDBDB" }} />
                  <Stack
                    className="opacity-transition"
                    sx={{
                      display: showSubMenus[index] ? "flex" : "none",
                      background: "#fff",
                      borderRadius: "13px",
                      position: "absolute",
                      height: "auto",
                      width: "200px",
                      zIndex: "8",
                      top: "40px",
                      padding: "20px",
                      gap: "14px",
                    }}
                    onMouseOut={() => handleMouseOut(index)}
                  >
                    {e?.sub?.map((e) => (
                      <Typography sx={{ color: "#848484" }}>{e}</Typography>
                    ))}
                  </Stack>
                </Typography>
              ))}
            </Stack>
          </Stack>
          {/* End of Header Top Laptop And Smaller ...*/}
          <Stack
            sx={{
              display: {
                md: "flex",
                sm: "flex",
                xs: "flex",
                lg: "flex",
                xl: "none",
              },
              height: "61px",
              width: "100%",
              borderBottom: "1px solid rgba(129, 129, 129, 0.2)",
            }}
          >
            <Stack
              sx={{
                height: "100%",
                width: "95%",
                margin: "auto",
                display: "flex",
                alignItems: "center",

                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <MenuIcon
                sx={{ color: "black", fontSize: "28px", cursor: "pointer" }}
                onClick={() => setShowCatMobile(true)}
              />
              <Stack>
                <img src={HeaderLogo} alt="" />
              </Stack>
              <Stack>
                <Typography color={"#000"} sx={{ position: "relative" }}>
                  <Link>
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
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </AppBar>
        <Stack
          onBlur={() => setShowCatMobile(false)}
          sx={{
            position: "fixed",
            top: "0",
            right: "0",
            width: "250px",
            display: showCatMobile ? "block" : "none",
            overflowY: "scroll",
            overflowX: "hidden",

            background: "#fff",
            zIndex: "5",
            height: "100vh",
          }}
        >
          <Stack>
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                borderBottom: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <TextField
                id="filled-basic"
                placeholder="جست و جو محصولات"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  textAlign: "right",
                  border: "none",
                  padding: "10px",
                }}
              />
              <SearchIcon sx={{ color: "gray" }} />
            </Stack>
            <Stack
              component={"ul"}
              sx={{
                display: "flex",
                padding: "10px",
                paddingTop: "0 !important",
              }}
            >
              {category?.map((e, index) => (
                <>
                  <Typography
                    key={index}
                    fontSize={13.5}
                    fontWeight={"700"}
                    color={"black"}
                    display={"flex"}
                    flexDirection={"row"}
                    sx={{
                      cursor: "pointer",
                      borderBottom: "1px solid rgba(0,0,0,0.105)",
                    }}
                    width={"235px"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    component={"li"}
                  >
                    <Stack>{e?.name}</Stack>
                    <Stack
                      id={`iconParent${index}`}
                      sx={{
                        width: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "50px",
                        transition: "background-color 0.3s",
                        borderRight: "1px solid rgba(0,0,0,0.105)",
                        borderBottom: "1px solid rgba(0,0,0,0.105)",
                      }}
                    >
                      {iconStates[index] ? (
                        <KeyboardArrowUpIcon
                          onClick={() => handleIconClick(index)}
                          sx={{
                            color: arrowIconColor, // استفاده از arrowIconColor به عنوان رنگ آیکون پیکان
                            fontSize: "30px",
                          }}
                        />
                      ) : (
                        <KeyboardArrowLeftIcon
                          onClick={() => handleIconClick(index)}
                          sx={{
                            color: arrowIconColor, // استفاده از arrowIconColor به عنوان رنگ آیکون پیکان
                            fontSize: "30px",
                          }}
                        />
                      )}
                    </Stack>
                  </Typography>
                  <Stack
                    key={index}
                    fontSize={13.5}
                    fontWeight={"700"}
                    color={"black"}
                    display={"flex"}
                    sx={{
                      cursor: "pointer",
                      borderBottom: "1px solid rgba(0,0,0,0.105)",
                    }}
                    width={"240px"}
                    alignItems={"center"}
                    component={"ul"}
                    style={{ display: iconStates[index] ? "block" : "none" }} // تغییر در نمایش بر اساس وضعیت آیکون
                  >
                    {e?.sub?.map((sub, index) => (
                      <Stack
                        width={"240px"}
                        sx={{
                          borderBottom: "1px solid rgba(0,0,0,0.105)",
                          display: "flex",
                          justifyContent: "right",
                          padding: "15px 0px 15px 0px",
                          color: "#848484",
                          fontWeight: "400",
                        }}
                        component={"li"}
                      >
                        {sub}
                      </Stack>
                    ))}
                  </Stack>
                </>
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Stack
          onClick={() => setShowCatMobile(false)}
          style={
            showCat || showCatMobile
              ? {
                  height: "100vh",
                  width: "100%",
                  margin: "auto",
                  background: "#000",
                  opacity: "0.53",
                  filter: "blur(11px) !important",
                  zIndex: "2",
                  position: "fixed",
                  top: {
                    md: "10px",
                    sm: "50px",
                    xs: "100px",
                    lg: "100px",
                    xl: "1000px",
                  },
                }
              : {}
          }
        ></Stack>
      </ThemeProvider>
    </>
  );
}
