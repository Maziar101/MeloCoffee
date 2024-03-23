import { AppBar, Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import colors from "../../utils/colors";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/logo-png.png";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import fetchapi from "../../utils/FetchApi";

export default function Header() {
  const { token } = useSelector((state) => state.token);
  const { list } = useSelector((state) => state.cart);
  const First = ["خرید قهوه", "قهوه ترک", "فرنچ برس", "موکاپات"];
  const [category, setCategory] = useState();
  const [showLink1, setShowLink1] = useState(false);
  const [showLink2, setShowLink2] = useState(false);
  const [linkColors, setLinkColors] = useState(
    Array(First.length).fill("#fff")
  );

  useEffect(() => {
    (async () => {
      const data = await fetchapi(
        process.env.REACT_APP_BASE_API+"categories?populate=*"
      );
      setCategory(data?.data);
    })();
  }, []);

  const handleMouseOver = (index) => {
    const updatedColors = [...linkColors];
    updatedColors[index] = "rgba(255,255,255,0.8)";
    setLinkColors(updatedColors);
  };

  const handleMouseOut = (index) => {
    const updatedColors = [...linkColors];
    updatedColors[index] = "#fff";
    setLinkColors(updatedColors);
  };
  const handleFalseLinks = () => {
    setShowLink1(false);
    setShowLink2(false);
  };
  return (
    <>
      <AppBar
        style={
          showLink1
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
            m={"auto"}
          >
            <Stack sx={{ flexDirection: "row", gap: "20px" }} component={"ul"}>
              {First.map((item, index) => (
                <Typography key={index} fontSize={11.5} component={"li"}>
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
            <Stack alignItems={"center"} justifyContent={"center"}>
              <Link
                to={"https://www.instagram.com/m._.mweb/"}
                style={{ color: "#fff", display: "flex" }}
              >
                <InstagramIcon fontSize="little" />
              </Link>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            height: "105px",
            justifyContent: "center",
            borderBottom: "1px solid rgba(129, 129, 129, 0.2)",
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
                  <SearchIcon className="text-dark" />
                </Link>
              </Typography>

              <Typography color={"#000"} sx={{ position: "relative" }}>
                <Link>
                  <ShoppingCartOutlinedIcon className="text-dark" />
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
        <Stack>
          <Stack
            width={"65%"}
            m={"auto"}
            component={"ul"}
            sx={{ gap: "20px", flexDirection: "row", marginTop: "10px" }}
          >
            {category?.map((e, index) => (
              <Typography
                key={index}
                fontSize={14.5}
                fontWeight={"700"}
                marginTop={"5px"}
                display={"flex"}
                flexDirection={"row"}
                component={"li"}
              >
                {/*باید برای Link شرط بزاری براساس ایندکس که ایندکس یک و دو اینجوری باشن در غیر این صورت اونجوری باشن*/}
                {index == 0 ? (
                  <>
                    <Link
                      onMouseOver={() => setShowLink1(true)}
                      style={{ color: "#000" }}
                    >
                      {e?.attributes?.name}
                    </Link>
                    <Stack sx={{ position: "relative", zIndex: "10" }}>
                      <Stack
                        width={"65%"}
                        m={"auto"}
                        sx={{
                          position: "absolute",
                          top: "38px",
                          left: "80px",
                        }}
                      >
                        <Typography
                          style={
                            showLink1
                              ? { display: "flex" }
                              : { display: "none" }
                          }
                          sx={{
                            flexDirection: "column",
                            gap: "14px",
                            boxShadow: "0 0 3px rgba(0,0,0,0.15)",
                            background: "#fff",
                            width: "220px",
                            transition: "10s all",
                            borderRadius: "18px",
                            padding: "16px 25px",
                            fontSize: "14px",
                          }}
                          onMouseOut={handleFalseLinks}
                          onMouseOver={() => setShowLink1(true)}
                        >
                          {showLink1 &&
                            category?.length > 0 &&
                            category[0]?.attributes?.buy_coffees?.data?.map(
                              (e, index) => (
                                <Link style={{ color: "#848484" }} key={index}>
                                  {e?.attributes?.name}
                                </Link>
                              )
                            )}
                        </Typography>
                      </Stack>
                    </Stack>
                  </>
                ) : index == 1 ? (
                  <>
                    <Link
                      onMouseOver={() => setShowLink2(true)}
                      style={{ color: "#000" }}
                    >
                      {e?.attributes?.name}
                    </Link>
                    <Stack sx={{ position: "relative", zIndex: "10" }}>
                      <Stack
                        width={"65%"}
                        m={"auto"}
                        sx={{ position: "absolute", top: "38px", left: "80px" }}
                      >
                        <Typography
                          style={
                            showLink2
                              ? { display: "flex" }
                              : { display: "none" }
                          }
                          sx={{
                            flexDirection: "column",
                            gap: "14px",
                            boxShadow: "0 0 3px rgba(0,0,0,0.15)",
                            background: "#fff",
                            width: "220px",
                            borderRadius: "18px",
                            padding: "16px 25px",
                            fontSize: "14px",
                          }}
                          onMouseOut={handleFalseLinks}
                          onMouseOver={() => setShowLink2(true)}
                        >
                          {showLink2 &&
                            category?.length > 0 &&
                            category[1]?.attributes?.types?.data.map(
                              (e, index) => (
                                <Link style={{ color: "#848484" }} key={index}>
                                  {e?.attributes?.name}
                                </Link>
                              )
                            )}
                        </Typography>
                      </Stack>
                    </Stack>
                  </>
                ) : (
                  <Link style={{ color: "#000" }}>{e?.attributes?.name}</Link>
                )}

                {(e?.attributes?.buy_coffees?.data?.length ||
                  e?.attributes?.types?.data?.length) > 0 && (
                  <Typography
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                    variant="span"
                    marginTop={"1px"}
                    color="rgba(82, 82, 82, .45)"
                  >
                    <KeyboardArrowDownIcon fontSize="6" />
                  </Typography>
                )}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </AppBar>

      <Stack
        style={
          showLink1 || showLink2
            ? {
                height: "100vh",
                width: "100%",
                margin: "auto",
                background: "#000",
                opacity: "0.23",
                zIndex: "9",
                position: "absolute",
              }
            : {}
        }
      ></Stack>
    </>
  );
}
