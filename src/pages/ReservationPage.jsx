import { useState } from "react";
import { Button, Card, Grid, Input, Loading, Text } from "@nextui-org/react";
import Swal from "sweetalert2";

export const ReservationPage = () => {
  const [numOfPeople, setNumOfPeople] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({
    numOfPeople: "",
    date: "",
    time: "",
    nombre: "",
    correo: "",
    telefono: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const nunOfPeopletoNumber = parseInt(numOfPeople, 10);
    const numOfTelefon = parseInt(telefono, 10);
    setIsLoading(true);

    const errors = {};

   if (!numOfPeople) {
     errors.numOfPeople = "Debe indicar el número de personas.";
   } else if (parseInt(numOfPeople) < 1 || parseInt(numOfPeople) > 3) {
     errors.numOfPeople = "El número de personas debe estar entre 1 y 3.";
   }

    if (!date) {
      errors.date = "Debe indicar la fecha.";
    }

    if (!time) {
      errors.time = "Debe indicar la hora.";
    }

    if (!nombre) {
      errors.nombre = "Debe indicar su nombre.";
    }

    if (!correo) {
      errors.correo = "Debe indicar su correo electrónico.";
    }

    if (!telefono) {
      errors.telefono = "Debe indicar su número de teléfono.";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setIsLoading(false);
      return;
    }


    const data = {
      nombre,
      telefono: numOfTelefon,
      correo,
      fecha: date,
      hora: time,
      cantidad: nunOfPeopletoNumber,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("https://back-node-team09.onrender.com/reservas", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        if (!isLoading) {
          Swal.fire({
            title: "Datos enviados",
            icon: "success",
            timer: 2000, // Tiempo en milisegundos para cerrar la alerta
            timerProgressBar: true,
            didClose: () => {
              // Función que se ejecutará después de cerrar la alerta
              setIsLoading(false);
            },
          });
        }
        setNumOfPeople(""); // Limpiar el input de numOfPeople
        setDate(""); // Limpiar el input de date
        setTime(""); // Limpiar el input de time
        setNombre(""); // Limpiar el input de nombre
        setCorreo(""); // Limpiar el input de correo
        setTelefono(""); // Limpiar el input de telefono
      })
      .catch((error) => console.error(error));
  };

  console.log(formErrors.numOfPeople)

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
            <Text color="error" size="$xs">
              {formErrors.numOfPeople}
            </Text>
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
                helperText={formErrors.date}
                helperColor="error"
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
                helperText={formErrors.time}
                helperColor="error"
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
              helperText={formErrors.nombre}
              helperColor="error"
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
              helperText={formErrors.correo}
              helperColor="error"
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
              helperText={formErrors.telefono}
              helperColor="error"
            />
            {isLoading ? (
              <Loading />
            ) : (
              <Button
                type="submit"
                css={{ width: "100%", margin: "auto", maxW: "50%" }}
              >
                Send
              </Button>
            )}
          </fieldset>
        </Card>
      </Grid.Container>
    </form>
  );
};
