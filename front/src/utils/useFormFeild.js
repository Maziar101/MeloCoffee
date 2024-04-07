import React, { useDebugValue , useState} from "react";

export default function useFormFeild() {
  const [fields, setFields] = useState({});
  function handleChange(e) {
    setFields({ ...fields, [e.target.name.trim()]: e.target.value.trim() });
  }
  useDebugValue("Register And Login Inputs");
  return [fields,handleChange];
}
