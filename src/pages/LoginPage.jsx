import React from "react";

import { Logincard } from "../components/Logincard";
import { Grid } from "@nextui-org/react";

export const LoginPage = () => {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={5}>
        <Logincard />
      </Grid>
    </Grid.Container>
  );
};
