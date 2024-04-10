import { CheckBox } from "@mui/icons-material";
import { Stack } from "@mui/material";
import React from "react";

export default function Test() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Stack>
      <CheckBox onChange={handleChange} checked={checked} color="primary" />
    </Stack>
  );
}
