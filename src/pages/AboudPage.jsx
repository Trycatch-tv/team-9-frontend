import React from "react";
import { DevelopCards } from "../components/DevelopCards";
import data from "../data/data.json";
import { Container, Grid, Row } from "@nextui-org/react";

export const AboudPage = () => {
  return (
    <Grid.Container
      gap={2}
      alignItems="center"
      justify="center"
      css={{ padding: "3rem" }}
    >
      {data.map((info, index) => (
        <Grid  xs={12} sm={4} md={3} lg={2} css={{ padding: "0" }}>
          <DevelopCards key={index} {...info} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
