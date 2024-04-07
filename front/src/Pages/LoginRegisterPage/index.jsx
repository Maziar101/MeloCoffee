import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function LoginRegisterPage() {
  const [haveAcc, setHaveAcc] = useState(false);
  const handleAcc = () => {
    setHaveAcc(!haveAcc);
  };
  return (
    <>
      {haveAcc ? (
        <Login handleAcc={handleAcc} />
      ) : (
        <Register handleAcc={handleAcc} />
      )}
    </>
  );
}
