"use client";
import Container from "@/components/container";
import classes from "./admin.module.css";
import { useWindowDimensions } from "@/hooks/use-window-dimension";
import React, { useState } from "react";
import { PasswordVerification } from "@/scripts/admin-scripts";
import Button from "@/components/button";
import Input from "@/components/input";
import Acasa from "./acasa";

const Admin = () => {
  const { width, height } = useWindowDimensions();
  const [password, setPassword] = useState("");
  const [isCorect, setIsCorrect] = useState(false);
  const handlePasswordInput = async () => {
    try {
      const result = await PasswordVerification(password);
      if (result) setIsCorrect(true);
      else setIsCorrect(false);
    } catch (error) {
      console.error("Error during password verification:", error);
      setIsCorrect(false);
    }
  };
  const [page, setPage] = useState<
    "home" | "about" | "gallery" | "question" | "contact" | undefined
  >(undefined);
  if (!isCorect)
    return (
      <main>
        <Container
          width={width}
          corners={[true, true, true, true]}
          className={classes.container}
        >
          <Input
            type="text"
            defaultValue={password}
            onChange={(input) => setPassword(input.target.value)}
          />
          <Button onClick={handlePasswordInput}>Verifica</Button>
        </Container>
      </main>
    );
  else if (!page) {
    return (
      <main>
        <Container
          width={width}
          corners={[true, true, true, true]}
          className={classes.container}
        >
          <div className={classes.content}>
            <Button onClick={() => setPage("home")}>Acasa</Button>
            <Button onClick={() => setPage("about")}>Despre</Button>
            <Button onClick={() => setPage("gallery")}>Galerie</Button>
            <Button onClick={() => setPage("question")}>Intrebari</Button>
            <Button onClick={() => setPage("contact")}>Contact</Button>
          </div>
        </Container>
      </main>
    );
  } else if (page == "home") {
    return (
      <main>
        <Container
          width={width}
          corners={[true, true, true, true]}
          className={classes.container}
        >
          <Acasa />
        </Container>
      </main>
    );
  }
};

export default Admin;
