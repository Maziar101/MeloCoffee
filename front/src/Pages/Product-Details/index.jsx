import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import fetchapi from "../../utils/FetchApi";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/Slices/ShoppingSlice";

export default function ProductDetails() {
  const { id: productId, name } = useParams();
  const [product, setProduct] = useState();
  const ProductInCart = useSelector((state) =>
    state.cart.list.find((item) => item._id === productId)
  )?.quantity;
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const res = await fetchapi(
        process.env.REACT_APP_BASE_API + `products/${productId}`
      );
      setProduct(res?.data);
      console.log(res);
    })();
  }, [productId]);
  const CustomButton = styled(Button)({
    "&:hover": {
      color: "#fff",
      background: "#412A22",
    },
  });
  return (
    <>
      <Stack
        sx={{
          width: "65%",
          margin: "auto",
          mt: "40px",
          gap: "30px",
          flexDirection: {xl:"row",lg:"row",md:"column",xs:"column"},
        }}
      >
        <Box sx={{width:{xl:"581px",lg:"581px",md:"400px",xs:"300px"}}}>
          <img
            style={{ borderRadius: "15px" }}
            src={product?.image}
            alt={name}
            width={"100%"}
          />
        </Box>
        <Stack sx={{ gap: "20px" }}>
          <Stack sx={{ flexDirection: "row", gap: "10px" }}>
            <Link to={"/"} style={{ color: "#777", fontSize: "13px" }}>
              فروشگاه اینترنتی »
            </Link>
            <Typography sx={{ fontSize: "13px", color: "#2d2b2b" }}>
              {name?.split("-")?.join(" ")}
            </Typography>
          </Stack>
          <Typography sx={{ fontWeight: "700", fontSize: "18px" }}>
            {product?.name}
          </Typography>
          {product?.isAvailable ? (
            <Typography
              sx={{ fontSize: "21.7px", color: "#412A22", fontWeight: "700" }}
            >
              {product?.price} تومان
            </Typography>
          ) : (
            <Typography sx={{ fontWeight: "700" }}>بزودی</Typography>
          )}

          <Typography sx={{width:{xl:"581px",lg:"581px",md:"400px",xs:"300px"}}}>
            {product?.description}
          </Typography>

          {product?.isAvailable ? (
            <Stack sx={{ gap: "20px" }}>
              <Stack sx={{ flexDirection: "row", gap: "5px" }}>
                <CheckIcon />
                <Typography>موجود</Typography>{" "}
              </Stack>
              <Stack sx={{ flexDirection: "row", gap: "20px" }}>
                <ButtonGroup sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    sx={{
                      border: "2px solid #ddd",
                      color: "#000",
                      width: "10px",
                      "&:hover": {
                        border: "0",
                        background: "#412A22",
                        borderRadius: "0",
                        color: "#fff",
                      },
                    }}
                    disabled={!ProductInCart && true}
                    onClick={() => dispatch(removeItem(productId))}
                  >
                    -
                  </Button>
                  <Button
                    sx={{
                      border: "2px solid #ddd",
                      color: "#000",
                      width: "10px",
                      cursor: "default",
                    }}
                  >
                    {console.log(ProductInCart)}
                    {ProductInCart ? ProductInCart : 0}
                  </Button>
                  <Button
                    sx={{
                      border: "2px solid #ddd",
                      color: "#000",
                      width: "10px",
                      "&:hover": {
                        border: "0",
                        background: "#412A22",
                        borderRadius: "0",
                        color: "#fff",
                      },
                    }}
                    onClick={() => dispatch(addItem(product))}
                  >
                    +
                  </Button>
                </ButtonGroup>
                <CustomButton sx={{background:"#D3A97F",borderRadius:"20px",width:"150px"}}>
                  <Link style={{color:"#fff"}} to={"/cart"}>مشاهده سبدخرید</Link>
                </CustomButton>
              </Stack>
            </Stack>
          ) : (
            <Typography sx={{ color: "#B50808", fontWeight: "700" }}>
              ناموجود
            </Typography>
          )}
        </Stack>
      </Stack>
    </>
  );
}
