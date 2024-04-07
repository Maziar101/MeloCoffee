import React from 'react'
import { Link } from "react-router-dom";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import useFormFeild from "../../../utils/useFormFeild";
import fetchapi from "../../../utils/FetchApi";
import { useDispatch } from 'react-redux';
import { login } from '../../../store/Slices/TokenSlice';
export default function Login({handleAcc}) {
  const [fields, handleChange] = useFormFeild();
  const Dispatch = useDispatch();
  const CustomButton = styled(Button)({
    "&:hover": {
      backgroundColor: "#A37952", // رنگ دلخواه خود را اینجا تنظیم کنید
    },
  });
  const handleLogin = async()=>{
    const res = await fetchapi(process.env.REACT_APP_BASE_API + "auth" , {
      method : "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        username: fields.username,
        password: fields.password, 
      }),
    });
    if (res?.status == "success"){
      window.localStorage.setItem("token" , JSON.stringify(res?.token));
      window.localStorage.setItem("user" , JSON.stringify(res?.user));
      Dispatch(login({token:res?.token,user:res?.user}));
      window.location.href = "/";
    }else{
      alert(res?.message);
    }
  }
  return (
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
        <Typography variant="h3">ورود</Typography>
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
          onClick={handleLogin}
          sx={{ mt: 3, mb: 2, background: "#D3A97F" }}
        >
          ورود
        </CustomButton>
        <Grid container>
          <Grid item>
            <Link onClick={handleAcc}>{"اکانت نداری ؟ ثبت نام کن"}</Link>
          </Grid>
        </Grid>
      </Stack>
  )
}
