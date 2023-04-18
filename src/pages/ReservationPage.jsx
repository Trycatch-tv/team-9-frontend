import { useState } from "react";
import { Button, Card, Grid, Input, Text, Container } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FormReservation } from "../components/FormReservation";

export const ReservationPage = () => {
  const [numOfPeople, setNumOfPeople] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías enviar los datos a un servidor o hacer algo con ellos
    const nunOfPeopletoNumber = parseInt(numOfPeople, 10);
    const numOfTelefon = parseInt(telefono, 10);

    const data = {
      nombre,
      telefono: numOfTelefon,
      correo,
      fecha: date,
      hora: time,
      cantidad: nunOfPeopletoNumber,
    };

    console.log(data);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("https://back-node-team09.onrender.com/reservas", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid.Container
        gap={2}
        justify="center"
        css={{ width: "100%", maxW: "1200px", margin: "0 auto" }}
      >
        <Grid
          xs={12}
          sm={12}
          css={{
            padding: "0.5rem 1rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Card
            isHoverable
            css={{ h: "fit-content", alignItems: "center", padding: "0.5rem" }}
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
        <Grid aria-label="Numero de personas" md={4}>
          <Card
            isHoverable
            aria-label="Numero de personas"
            css={{
              h: "160px",
              alignItems: "center",
              padding: "0.5rem",
              minWidth: "350px",
            }}
          >
            <Text
              size={20}
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
                <Button
                  aria-label="Numero de personas en este caso 1"
                  onPress={() => setNumOfPeople("1")}
                >
                  1
                </Button>
                <Button
                  aria-label="Numero de personas en este caso 2"
                  onPress={() => setNumOfPeople("2")}
                >
                  2
                </Button>
                <Button
                  aria-label="Numero de personas en este caso 3"
                  onPress={() => setNumOfPeople("3")}
                >
                  3
                </Button>
                <Button
                  aria-label="Numero de personas en este caso4"
                  onPress={() => setNumOfPeople("4")}
                >
                  4
                </Button>
                <Button
                  aria-label="Numero de personas en este caso 5"
                  onPress={() => setNumOfPeople("5")}
                >
                  5
                </Button>
                <Button
                  aria-label="Numero en este caso 6"
                  onPress={() => setNumOfPeople("6")}
                >
                  6
                </Button>
                <Button
                  aria-label="Numero en este caso 7"
                  onPress={() => setNumOfPeople("7")}
                >
                  7
                </Button>
                <Button
                  aria-label="Numero en este caso 8"
                  onPress={() => setNumOfPeople("8")}
                >
                  8
                </Button>
              </Button.Group>
            </Card.Body>
          </Card>
        </Grid>
        <Grid sm={4}>
          <Card
            isHoverable
            css={{
              h: "160px",
              alignItems: "center",
              padding: "0.5rem",
              minWidth: "350px",
            }}
          >
            <Card.Body css={{ padding: "0" }}>
              <Text
                size={20}
                css={{
                  textGradient: "45deg, $yellow600 -20%, $red600 100%",
                  padding: "0.1rem 1rem",
                }}
                weight="bold"
              >
                2) ¿En que fecha sera la cena?
              </Text>
              <Input
                aria-label="Fecha"
                width="186px"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid sm={4}>
          <Card
            isHoverable
            css={{
              h: "160px",
              alignItems: "center",
              padding: "0.5rem",
              minWidth: "350px",
            }}
          >
            <Card.Body css={{ padding: "0" }}>
              <Text
                size={20}
                css={{
                  textGradient: "45deg, $yellow600 -20%, $red600 100%",
                  padding: "0.1rem 1rem",
                }}
                weight="bold"
              >
                3) ¿A que hora te esperamos?
              </Text>
              <Input
                aria-label="Hora"
                width="186px"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Card
          isHoverable
          css={{
            minHeight: "90px",
            minWidth: "350px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <fieldset>
            <Input
              aria-label="Nombre"
              type="text"
              id="nombre"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
              bordered
              labelPlaceholder="Nombre:"
              color="default"
              css={{ width: "95%" }}
            />
            <Input
              aria-label="Correo"
              type="email"
              id="correo"
              value={correo}
              onChange={(event) => setCorreo(event.target.value)}
              bordered
              labelPlaceholder="Correo:"
              color="default"
              css={{ width: "95%" }}
            />
            <Input
              aria-label="Telefono"
              type="tel"
              id="telefono"
              value={telefono}
              onChange={(event) => setTelefono(event.target.value)}
              bordered
              labelPlaceholder="Telefono:"
              color="default"
              css={{ width: "95%" }}
            />
            <Button
              type="submit"
              css={{ width: "100%", margin: "auto", maxW: "50%" }}
            >
              Send
            </Button>
          </fieldset>
        </Card>
      </Grid.Container>
    </form>
  );
};
