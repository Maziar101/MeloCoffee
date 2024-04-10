import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeAll,
  removeItem,
  decreaseQuantity,
} from "../../store/Slices/ShoppingSlice";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
export default function Cart() {
  const { list } = useSelector((state) => state.cart);
  let totalPrice = 0;
  const dispatch = useDispatch();
  return (
    <>
      {list.length > 0 ? (
        <>
          <TableContainer
            component={Paper}
            sx={{ width: "70%", margin: "auto", mt: "150px" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="center">عکس محصول</TableCell>
                  <TableCell align="center">نام</TableCell>
                  <TableCell align="center">قیمیت</TableCell>
                  <TableCell align="center">تعداد</TableCell>
                  <TableCell align="center">کل قیمت</TableCell>
                  <TableCell align="center">افزودن/کم کردن</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list.map((row) => {
                  totalPrice += row?.price * row?.quantity;
                  return (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row._id}
                      </TableCell>
                      <TableCell align="center">
                        {" "}
                        <img
                          style={{ width: "100px", height: "100px" }}
                          src={row?.image}
                          alt=""
                        />
                      </TableCell>
                      <TableCell align="center">{row?.name}</TableCell>
                      <TableCell align="center">{row?.price} تومان</TableCell>
                      <TableCell align="center">{row?.quantity}</TableCell>
                      <TableCell align="center">
                        {row?.price * row?.quantity}
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          sx={{
                            border: "2px solid #ddd",
                            color: "#000",
                            width: "10px",
                            background: "#D3A97F",
                            fontSize: "20px",
                            "&:hover": {
                              border: "0",
                              background: "#412A22",
                              borderRadius: "0",
                              color: "#fff",
                            },
                          }}
                          onClick={() =>
                            dispatch(decreaseQuantity({ productId: row._id }))
                          }
                        >
                          -
                        </Button>
                        <Button
                          sx={{
                            border: "2px solid #ddd",
                            color: "#000",
                            width: "10px",
                            background: "#D3A97F",
                            fontSize: "20px",
                            "&:hover": {
                              border: "0",
                              background: "#412A22",
                              borderRadius: "0",
                              color: "#fff",
                            },
                          }}
                          onClick={() => dispatch(addItem(row))}
                        >
                          +
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell>
                    <Button
                      size="large"
                      sx={{ margin: "50px 0px" }}
                      variant="contained"
                      color="error"
                      onClick={() => dispatch(removeAll())}
                    >
                      حذف همه محصولات
                    </Button>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Typography sx={{ fontSize: "20px" }}>
                      کل هزینه :
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ fontSize: "20px" }}>
                      {totalPrice}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>{" "}
        </>
      ) : (
        <Typography variant="h3" component={"p"}sx={{textAlign:"center",marginTop:"200px"}}>
          هنوز محصولی به سبد خریدت اضافه نکردی :(
        </Typography>
      )}
    </>
  );
}
