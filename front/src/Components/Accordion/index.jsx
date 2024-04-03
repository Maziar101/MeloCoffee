import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse", // تغییر جهت موقعیت آیکون نسبت به متن
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CoffeeAccordion() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Stack sx={{gap:"10px"}}>
      <Accordion 
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{background:"#fff",padding:"10px",boxShadow:"0 0 5px #D2D6EF"}}>
          <Typography sx={{fontWeight:"700"}}>خرید آنلاین قهوه</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"center",width:"90%",margin:"auto"}}>
            از فروشگاه قهوه ملو دارای مزایای بسیاری است که در ادامه به شما بیان
            خواهیم کرد. قهوه ملو مجموعه ایست در زمینه خرید قهوه و فروش قهوه
            اینترنتی و ارائه انواع دانه قهوه و قهوه های آسیاب شده همچنین لوازم و
            تجهیزات و دستگاه های خانگی حرفه ای به مشتریان خانگی و قهوه فروشی ها،
            کافی شاپ ها، رستوران ها و... فعالیت می کند. مجموعه ما از سال ۱۳۸۴ تا
            به امروز در زمینه روست و ترکیب قهوه های مخصوص و ممتاز و همچنین ارائه
            برند های معتبر در زمینه قهوه برند و کپسول قهوه لوازم و تجهیزات حرفه
            ای و خانگی + انواع کافی میکس مشغول می باشد.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" sx={{background:"#fff",padding:"10px",boxShadow:"0 0 5px #D2D6EF"}}>
          <Typography sx={{fontWeight:"700"}}>قهوه فروشی ملو</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"center",width:"90%",margin:"auto"}}>
            سایت قهوه ملو با هدف ارائه محصولات و خدمات بصورت اینترنتی به دوست
            داران قهوه از سال ۹۲ شروع به فعالیت خود نمود و در این راستا تا به
            امروز به بیش از چند ده هزار مشتری اعم از خانگی و قهوه فروشی ها، کافی
            شاپ ها... خدمت رسانی نموده. هدف از ارائه محصولات بصورت اینترنتی
            دسترسی هر چه راحت تر مشتریان برای دسترسی به اطلاعات محصولات متفاوت
            در زمینه قهوه و نوشیدنی می باشد و همچنین سهولت خرید و دسترسی به
            محصولات مورد نظر به مشتریان.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" sx={{background:"#fff",padding:"10px",boxShadow:"0 0 5px #D2D6EF"}}>
          <Typography sx={{fontWeight:"700"}}>ارسال رایگان</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"center",width:"90%",margin:"auto"}}>
            مشتریان قهوه ملو میتوانند، به آسانی و باخیالی آسوده اقدام به خرید
            قهوه باکیفیت و مرغوب که مد نظرشان میباشند، از این مجموعه نمایند، و
            در صورتی که در شهر تهران باشند، در سریع ترین بازه زمانی ممکن، (بازه
            زمانی مد نظر مشتری)، سفارش خود را در یافت نمایند، و برای سایر شهر ها
            بازه زمانی دریافت سفارش، حداکثر دو الی سه روز کاری میباشد. لازم به
            ذکر است که تمام سفارش های بالای 500 هزار تومان به صورت ارسال رایگان،
            میباشد، و هیچگونه هزینه ای از مشتری دریافت نمیگردد.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}
