import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import LoginRegisterPage from "./Pages/LoginRegisterPage";
import PageNotFound from "./Pages/404";
import ProductDetails from "./Pages/Product-Details";
import fetchapi from "./utils/FetchApi";
import LoaderGif from "../../front/src/assets/loader.gif";
import { Stack, ThemeProvider, createMuiTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./store/Slices/TokenSlice";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";

export default function App() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const theme = createMuiTheme({
    direction: "rtl", // Both here and <body dir="rtl">
  });
  setTimeout(() => {
    setLoader(true);
  }, 2000);
  useEffect(() => {
    (async () => {
      const token = JSON.parse(window.localStorage.getItem("token"));
      const user = JSON.parse(window.localStorage.getItem("user"));
      if (token !== null) {
        setUserToken(token);
        console.log(token);
        dispatch(login({ token: token, user: user }));
      }
    })();
  }, []);
  return (
    <>
      {!loader ? (
        <>
          <Stack
            sx={{
              width: { lg: "30%", md: "40%", sm: "50%", xs: "70%" },
              height: "100vh",
              margin: "auto",
              justifyContent: "center",
            }}
          >
            <img width={"100%"} height="50%" src={LoaderGif} />
          </Stack>
        </>
      ) : (
        <>
          <ThemeProvider theme={theme}>
            <Header userToken={userToken} />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/cart" element={<Cart/>} />
              <Route
                path="/login-register"
                element={
                  userToken ? <Navigate to={"/"} /> : <LoginRegisterPage />
                }
              />
              <Route
                path="/product-details/:id/:name"
                element={<ProductDetails />}
              />
              <Route path="/products/:id/:name" element={<Products/>}/>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
          </ThemeProvider>
        </>
      )}
    </>
  );
}
