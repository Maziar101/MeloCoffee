import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import useFormFeild from "../../../utils/useFormFeild";
import fetchapi from "../../../utils/FetchApi";
export default function Register({ handleAcc }) {
  const [fields, handleChange] = useFormFeild();
  const handlerRegister = async () => {
    if (fields?.name && fields?.username && fields.password) {
      const res = await fetchapi(
        process.env.REACT_APP_BASE_API + "auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: fields.name,
            username: fields.username,
            password: fields.password,
          }),
        }
      );
      alert("اکانت ساخته شد ، حالا وارد شو");
      handleAcc();
    } else {
      alert("اطلاعات رو کامل وارد کن !");
    }
  };
  const CustomButton = styled(Button)({
    "&:hover": {
      backgroundColor: "#A37952", // رنگ دلخواه خود را اینجا تنظیم کنید
    },
  });
  return (
    <>
      <Stack
        component="form"
        noValidate
        sx={{
          mt: 1,
          width: { lg: "20%", md: "50%", xs: "70%" },
          gap: "5px",
          margin: "50px auto 0px auto",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
        }}
      >
        <Typography variant="h3">ثبت نام</Typography>
        <TextField
          margin="normal"
          color="secondary"
          required
          fullWidth
          id="name"
          placeholder="نام"
          name="name"
          onChange={handleChange}
          autoComplete="name"
          autoFocus
        />
        <TextField
          margin="normal"
          color="secondary"
          required
          fullWidth
          id="username"
          onChange={handleChange}
          placeholder="نام کاربری"
          name="username"
          autoComplete="username"
          autoFocus
        />
        <TextField
          margin="normal"
          color="secondary"
          required
          fullWidth
          id="password"
          placeholder="رمز"
          name="password"
          onChange={handleChange}
          autoComplete="password"
          autoFocus
        />
        <CustomButton
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, background: "#D3A97F" }}
          onClick={handlerRegister}
        >
          ثبت نام
        </CustomButton>
        <Grid container>
          <Grid item>
            <Link onClick={handleAcc}>{"اکانت داری ؟ وارد شو"}</Link>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
