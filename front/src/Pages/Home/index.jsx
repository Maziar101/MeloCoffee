import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "../../Components/Slider";
import fetchapi from "../../utils/FetchApi";

export default function Home() {
  // const [wellcoffees, setWellCoffees] = useState();
  
  // useEffect(() => {
  //   (async () => {
  //     const data = await fetchapi(
  //       "http://localhost:1337/api/buy-coffees?populate=*"
  //     );
  //     setWellCoffees(data?.data);
  //   })();
  // }, []);
  // const wellCoffeesItems = wellcoffees?.map((e) => (
  //   <Box width={{ xs: "211px", sm: "180px", md: "200px" }}>
  //     <img
  //       style={{ borderRadius: "15px" }}
  //       width={"100%"}
  //       src={
  //         process.env.REACT_APP_BASE_URL +
  //         e?.attributes?.image?.data?.attributes?.url
  //       }
  //       alt=""
  //     />
  //   </Box>
  // ));
  return (
    // <Stack component={"main"}>
    //   <Stack>
    //     <Slider />
    //   </Stack>
    //   <Stack marginTop={"20px"}>
    //     <Stack
    //       flexDirection={"row"}
    //       alignItems={"center"}
    //       gap={"14px"}
    //       justifyContent={"center"}
    //     >
    //       <hr color="#e9e9e9" width="25%" />
    //       <Typography fontSize={"22px"} variant="h4">
    //         قهوه های مناسب برای
    //       </Typography>
    //       <hr color="#e9e9e9" width="25%" />
    //     </Stack>
    //     <Box
    //       sx={{
    //         display: { lg: "none", md: "grid", sm: "grid", xs: "grid" },
    //         gap: { sm: "6px", xs: "5px 10px" },
    //         gridTemplateColumns: {
    //           md: "auto auto auto auto",
    //           sm: "auto auto auto auto",
    //           xs: "auto auto",
    //         },
    //         marginTop: "20px !important",
    //         width: "100%",
    //         justifyContent: "center",
    //         margin: "auto",
    //       }}
    //     >
    //       {wellCoffeesItems}
    //     </Box>
    //   </Stack>
    // </Stack>
    <></>
  );
}
