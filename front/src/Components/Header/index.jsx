import {
  AppBar,
  Box,
  Button,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createMuiTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import colors from "../../utils/colors";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/logo-png.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import fetchapi from "../../utils/FetchApi";
import { logout } from "../../store/Slices/TokenSlice";

export default function Header({ userToken }) {
  const { token } = useSelector((state) => state.token);
  const { list } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const First = ["خرید قهوه", "قهوه ترک", "فرنچ برس", "موکاپات"];
  const [category, setCategory] = useState();
  const [showSubMenus, setShowSubMenus] = useState(
    Array(category?.length).fill(false)
  );
  const [showCatMobile, setShowCatMobile] = useState(false);
  const [showCat, setShowCat] = useState();
  const user = useSelector((state) => state.token.user);
  const [openAccount, setOpenAccount] = useState(false);
  const handleOut = () => {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    setOpenAccount(false);
    dispatch(logout());
    window.location.reload();
  };
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

  const handleMouseOver = (index) => {
    setShowCat(true);

    // بستن تمام زیرمنوها به جز زیرمنوی مورد نظر
    const newShowSubMenus = showSubMenus.map(() => false);
    newShowSubMenus[index] = true;
    setShowSubMenus(newShowSubMenus);

    const updatedColors = [...linkColors];
    updatedColors[index] = "rgba(255,255,255,0.8)";
    setLinkColors(updatedColors);
  };

  const handleMouseOut = (index) => {
    setShowCat(false);
    const updatedColors = [...linkColors];
    updatedColors[index] = "#fff";
    setLinkColors(updatedColors);

    // بستن تمام زیرمنوها
    setShowSubMenus(showSubMenus.map(() => false));
  };

  const handleOpenAccount = () => {
    setOpenAccount(!openAccount);
  };
  return (
    <>
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
            <Stack sx={{ flexDirection: "row", gap: "20px" }} component={"ul"}>
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
              {token ? (
                <Link
                  style={{ color: "#000", fontWeight: "700" }}
                  onClick={handleOpenAccount}
                >
                  سلام {user?.name} عزیز
                </Link>
              ) : (
                <Link
                  to={"/login-register"}
                  style={{ color: "#000", fontWeight: "700" }}
                >
                  ورود / ثبت نام
                </Link>
              )}
              {openAccount && (
                <Box>
                  <Button color="error" onClick={handleOut}>
                    خروج از حساب
                  </Button>
                </Box>
              )}
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
              gap: "30px",
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
              >
                {e?.name}
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
                  padding={"17px 0px 17px 0px"}
                  sx={{
                    cursor: "pointer",
                    borderBottom: "1px solid rgba(0,0,0,0.105)",
                  }}
                  width={"235px"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  component={"li"}
                >
                  <Stack>
                    <Link style={{ color: "black" }}>{e?.name}</Link>
                  </Stack>
                </Typography>
              </>
            ))}
          </Stack>
          <Stack flexDirection={"row"} alignItems={"center"}>
            {token ? (
              <Link
                style={{ color: "#000", fontWeight: "700", padding: "10px" , fontSize:"15px"}}
                onClick={handleOpenAccount}
              >
                سلام {user?.name} عزیز
              </Link>
            ) : (
              <Link
                to={"/login-register"}
                style={{ color: "#000", fontWeight: "700" , fontSize:"15px"}}
              >
                ورود / ثبت نام
              </Link>
            )}
            {openAccount && (
              <Box>
                <Button variant="outlined" sx={{width:"120px",height:"40px",fontSize:"14px"}} color="error" onClick={handleOut}>
                  خروج از حساب
                </Button>
              </Box>
            )}
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
    </>
  );
}
