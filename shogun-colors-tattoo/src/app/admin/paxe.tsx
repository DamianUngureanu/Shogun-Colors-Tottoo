"use client";
import Container from "@/components/container";
import { useWindowDimensions } from "@/hooks/use-window-dimension";
import React from "react";
import { PasswordVerification } from "@/scripts/admin-scripts";
import Button from "@/components/button";

const Admin = () => {
  const { width, height } = useWindowDimensions();
  const [password, setPassword] = React.useState("");
  const [isCorect, setIsCorrect] = React.useState(false);
  const handlePasswordInput = () => {
    if (PasswordVerification(password)) setIsCorrect(true);
    else setIsCorrect(false);
  };
  if (!isCorect)
    return (
      <Container width={width} corners={[true, true, true, true]}>
        <input
          type="text"
          defaultValue={password}
          onChange={(input) => setPassword(input.target.value)}
        />
        <Button onClick={handlePasswordInput}>Verifica</Button>
      </Container>
    );
  else {
    return <div>buna</div>;
  }
};

export default Admin;
