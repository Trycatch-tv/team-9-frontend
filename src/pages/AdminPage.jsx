import React from "react";
import { LogoutApp } from "../components/LogoutApp";
import { Card, Container, Text } from "@nextui-org/react";

export const AdminPage = () => {
  return (
    <Container
      css={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "1rem",
      }}
    >
      <Card
        css={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text h1>AdminPage</Text>
        <LogoutApp />
      </Card>
    </Container>
  );
};
