import { InputAdornment, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

export default function PageNotFound() {
  return (
    <Stack padding={"50px"}>
      <Stack sx={{ position: "relative" }}>
        <Typography
          sx={{
            fontSize: {
              xs: "12em",
              sm: "14em",
              md: "16em",
              lg: "17em",
              xl: "25em",
            },
            lineHeight: "1",
            color: "#412A22",
            opacity: "0.1",
            textAlign: "center",
          }}
        >
          404
        </Typography>
        <Typography
          sx={{
            color: "#412A22",
            fontSize: {
              xs: "33px",
              sm: "39px",
              md: "40px",
              lg: "55px",
              xl: "65px",
            },
            fontWeight: "700",
            textAlign: "center",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          یافت نشد
        </Typography>
      </Stack>
      <Stack sx={{display:"flex",gap:"20px"}}>
        <Typography sx={{ textAlign: "center" , fontSize:"24px" , fontWeight:"700"}}>
          چیزی که دنبال آن بودید اینجا پیدا نشد؟
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          چیزی در اینجا پیدا نشد. شاید جستجو بتوانید به شما کمک کند؟
        </Typography>
        <Stack>
          <TextField
            sx={{width:"410px",margin:"auto"}}
            placeholder="جستجو برای نوشته ها"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
