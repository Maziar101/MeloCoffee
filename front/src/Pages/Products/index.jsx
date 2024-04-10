import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import fetchapi from "../../utils/FetchApi";
import PageNotFound from "../404";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import Loadergif from "../../assets/loader.gif";
import CheckIcon from "@mui/icons-material/Check";

export default function Products() {
  const { id: categoryId, name: categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [show404, setShow404] = useState(false);
  const [showDelFilBtn, setShowDelFilBtn] = useState(false);
  const [filter, setFilter] = useState(null);
  const [availableCheck, setAvailableChecked] = useState(false);
  const CustomButton = styled(Button)({
    "&:hover": {
      color: "#fff",
      background: "#412A22",
    },
  });
  const FilterButton = styled(Button)({
    "&:hover": {
      background: "#E0E0E0",
    },
  });

  // ذخیره آخرین categoryId و productUrl
  const [lastCategoryId, setLastCategoryId] = useState(categoryId);
  const [lastProductUrl, setLastProductUrl] = useState(
    `products?categoryId=${categoryId}`
  );

  useEffect(() => {
    // اگر categoryId تغییر کرده است، productUrl را به روز کنید
    if (categoryId !== lastCategoryId) {
      setLastProductUrl(`products?categoryId=${categoryId}`);
      setLastCategoryId(categoryId);
    }
  }, [categoryId, lastCategoryId]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchapi(
          process.env.REACT_APP_BASE_API + lastProductUrl
        );
        setProducts(res?.data);
        setShow404(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setShow404(true);
      }
    })();
  }, [lastProductUrl]);

  const handleChangeFilter = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);
    if (e.target.value === "new") {
      setLastProductUrl(`products/last?categoryId=${categoryId}`);
    } else if (e.target.value === "like") {
      setLastProductUrl(`products?categoryId=${categoryId}`);
    }
  };

  const handleAvailable = () => {
    setAvailableChecked(!availableCheck);
  };

  const handleAvailableFilter = () => {
    if (availableCheck) {
      setLastProductUrl(lastProductUrl + "&isAvailable=true");
      setShowDelFilBtn(true);
    }
  };

  const handleDeleteFilter = () => {
    setLastProductUrl(`products?categoryId=${categoryId}`);
    setShowDelFilBtn(false);
  };

  const productsList = products?.map((product) => (
    <Stack
      key={product?._id}
      sx={{
        border: "1px solid #ddd",
        width: "210px",
        height: "360px",
        borderRadius: "15px",
        padding: "10px",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Link to={`/product-details/${product?._id}/${product?.name?.split(" ")?.join("-")}`}>
        <img
          src={product?.image}
          style={{
            width: "174px",
            height: "174px",
            margin: "0 auto",
            borderRadius: "15px",
          }}
          alt={product?.name}
        />
      </Link>

      <Typography
        sx={{
          fontSize: "14px",
          width: "90%",
          margin: "auto",
          mt: "10px",
          mb: "10px",
        }}
      >
        {product?.name}
      </Typography>
      {product?.isAvailable ? (
        <>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
            }}
          >
            <CheckIcon />
            <Typography>موجود در انبار</Typography>{" "}
            <Typography
              position="absolute"
              sx={{
                bottom: "20px",
                textAlign: "center",
              }}
            >
              {product?.price} تومان
            </Typography>
          </Stack>

        </>
      ) : (
        <Stack sx={{ gap: "10px" }}>
          <Typography sx={{ color: "#C13030" }}>اتمام موجودی</Typography>
          <Typography sx={{ mb: "40px" }}>بزودی</Typography>
          <Link
            to={`/product-details/${product?._id}/${product?.name
              ?.split(" ")
              ?.join("-")}`}
          >
            <CustomButton
              variant="contained"
              sx={{
                background: "#D3A97F",
                width: "155px",
                margin: "auto",
                borderRadius: "20px",
                color: "#000",
                position: "absolute",
                bottom: "10px",
                right: "25px",
              }}
            >
              جزئیات محصول
            </CustomButton>
          </Link>
        </Stack>
      )}
    </Stack>
  ));

  return show404 ? (
    <PageNotFound />
  ) : !products ? (
    <Typography>محصولی پیدا نشد</Typography>
  ) : (
    <>
      <Stack
        component={"main"}
        sx={{
          width: {
            xl: "65%",
            lg: "75%",
            md: "85%",
            sm: "95%",
            xs: "100%",
          },
          margin: "auto",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mt: "50px",
            mb: "50px",
            fontSize: "34px",
            fontWeight: "700",
          }}
        >
          {categoryName.split("-").join(" ")}
        </Typography>
        <Stack sx={{ flexDirection: "row", gap: "30px" }}>
          <Stack
            sx={{
              width: "25%",
              gap: "15px",
              display: { lg: "flex", md: "none", xs: "none" },
            }}
          >
            <Stack sx={{ gap: "20px" }}>
              <Typography sx={{ fontWeight: "700" }}>فیلتر محصولات</Typography>
              <Stack
                sx={{ flexDirection: "row", justifyContent: "space-between" }}
              >
                <FilterButton
                  onClick={handleAvailableFilter}
                  sx={{ background: "#F3F3F3", color: "#000", width: "33%" }}
                >
                  اعلام فیلتر
                </FilterButton>
                {showDelFilBtn && (
                  <FilterButton
                    onClick={handleDeleteFilter}
                    sx={{ background: "#F3F3F3", color: "#000", width: "33%" }}
                  >
                    حذف فیلتر
                  </FilterButton>
                )}
              </Stack>
            </Stack>
            <Stack>
              <FormControlLabel
                sx={{
                  padding: "8px",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  mr: "0",
                  ml: "0",
                }}
                label="فقط کالا های موجود"
                control={<Checkbox onChange={handleAvailable} />}
              />
            </Stack>
          </Stack>
          <Stack sx={{ width: "90%", margin: "auto" }}>
            <Stack
              sx={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Typography
                sx={{
                  color: "#242424",
                  fontSize: "11px",
                  fontWeight: "700",
                  mr: {
                    xl: "40px",
                    lg: "50px",
                    md: "70px",
                    sm: "50px",
                    xs: "10px",
                  },
                }}
              >
                فروشگاه اینترنتی » {categoryName.split("-").join(" ")}
              </Typography>

              <FormControl variant="standard" sx={{ mt: "-40px" }}>
                <InputLabel>فیلتر محصولات</InputLabel>
                <Select
                  value={filter}
                  onChange={handleChangeFilter}
                  sx={{
                    width: "260px",
                    alignItems: "center",
                    padding: "8px",
                  }}
                  size="small"
                  label="فیلتر محصولات"
                >
                  <MenuItem value="like">مرتبت سازی بر اساس محبوبیت</MenuItem>
                  <MenuItem value="new">مرتبت سازی بر اساس جدیدترین</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xl: "auto auto auto auto",
                  lg: "auto auto auto",
                  md: "auto auto auto",
                  sm: "auto auto",
                  xs: "auto auto",
                },
                mt: "50px",
                gap: "20px 10px",
                margin: "50px auto",
              }}
            >
              {productsList.length !== 0 ? (
                productsList
              ) : (
                <Typography color={"red"}>محصولی یافت نشد</Typography>
              )}
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
