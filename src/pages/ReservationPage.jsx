import { Button, Card, Grid, Input, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";


export const ReservationPage = () => {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid
        xs={12}
        sm={12}
        css={{ padding: "0.5rem 1rem", display: "flex", alignItems: "center" }}
      >
        <Card
          isHoverable
          css={{ h: "fit-content", alignItems: "center", padding: "1rem" }}
        >
          <Text
            h1
            size={40}
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
            weight="bold"
          >
            Reserva solo en 3 pasos.
          </Text>
        </Card>
      </Grid>
      <Grid xs={12} sm={4}>
        <Card isHoverable css={{ h: "160px", alignItems: "center" }}>
          <Text
            h3
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
              padding: "0.1rem 1rem",
            }}
            weight="bold"
          >
            1) ¿Cuantas personas seran?
          </Text>
          <Card.Body css={{ padding: "0" }}>
            <Button.Group color="gradient" ghost>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>4</Button>
              <Button>5</Button>
              <Button>6</Button>
              <Button>7</Button>
              <Button>8</Button>
            </Button.Group>
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} sm={4}>
        <Card isHoverable css={{ h: "160px", alignItems: "center" }}>
          <Card.Body css={{ padding: "0" }}>
            <Text
              h3
              css={{
                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                padding: "0.1rem 1rem",
              }}
              weight="bold"
            >
              2) ¿En que fecha sera la cena?
            </Text>
            <Input width="186px" type="date" />
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} sm={4}>
        <Card isHoverable css={{ h: "160px", alignItems: "center" }}>
          <Card.Body css={{ padding: "0" }}>
            <Text
              h3
              css={{
                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                padding: "0.1rem 1rem",
              }}
              weight="bold"
            >
              3) ¿A que hora quieres la reserva?
            </Text>
            <Input width="186px" type="time" />
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} css={{ height: "130px" }}>
        <Card
          isHoverable
          css={{
            h: "auto",
            alignItems: "center",
            flexDirection: "row",
            gap: "0.5rem",
            justifyContent: "space-around",
          }}
        >
          <Input
            bordered
            labelPlaceholder="Nombre:"
            color="default"
            css={{ width: "30%" }}
          />
          <Input
            bordered
            labelPlaceholder="Correo:"
            color="default"
            css={{ width: "30%" }}
          />
          <Input
            bordered
            labelPlaceholder="Telefono:"
            color="default"
            css={{ width: "30%" }}
          />
        </Card>
      </Grid>
      <Grid xs={12} css={{ height: "130px" }}></Grid>
      <Card>
        <Link to={"/"}>
          <Text>Home</Text>
        </Link>
        <Link to={"/login"}>
          <Text>Login</Text>
        </Link>
        <Link to={"/aboud"}>
          <Text>Aboud</Text>
        </Link>
      </Card>
    </Grid.Container>
  );
};
