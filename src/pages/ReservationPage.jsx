import React, { useState } from "react";
import { Button, Card, Dropdown, Grid, Input, Text } from "@nextui-org/react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

import "react-day-picker/dist/style.css";

export const ReservationPage = () => {
  const [selected, setSelected] = useState();

  let footer = `Please pick a day.`;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }

  const [selectedTime, setSelectedTime] = useState(
    new Set(["Hora de reserva"])
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedTime).join(", ").replaceAll("_", " "),
    [selectedTime]
  );

  return (
    <Grid.Container gap={2} justify="center">
      <Grid
        xs={12}
        sm={12}
        css={{ padding: "0.5rem 1rem", display: "flex", alignItems: "center" }}
      >
        <Card isHoverable css={{ h: "fit-content", alignItems: "center" }}>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Reserva solo en 3 pasos.
          </Text>
        </Card>
      </Grid>
      <Grid xs={12} sm={4}>
        <Card isHoverable css={{ h: "170px", alignItems: "center" }}>
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
          <Card.Body>
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
        <Card isHoverable css={{ h: "170px", alignItems: "center" }}>
          <Card.Body>
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
            {/* <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              footer={footer}
            /> */}
            <Input width="186px" type="date" />
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} sm={4}>
        <Card isHoverable css={{ h: "170px", alignItems: "center" }}>
          <Card.Body>
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
            <Dropdown>
              <Dropdown.Button
                flat
                color="secondary"
                css={{ tt: "capitalize" }}
              >
                {selectedValue}
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Single selection actions"
                color="secondary"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={setSelectedTime}
              >
                <Dropdown.Item key="5:00 pm">5:00 pm</Dropdown.Item>
                <Dropdown.Item key="5:30 pm">5:30 pm</Dropdown.Item>
                <Dropdown.Item key="6:00 pm">6:00 pm</Dropdown.Item>
                <Dropdown.Item key="6:30 pm">6:30 pm</Dropdown.Item>
                <Dropdown.Item key="7:00 pm">7:00 pm</Dropdown.Item>
                <Dropdown.Item key="7:30 pm">7:30 pm</Dropdown.Item>
                <Dropdown.Item key="8:00 pm">8:00 pm</Dropdown.Item>
                <Dropdown.Item key="8:30 pm">8:30 pm</Dropdown.Item>
                <Dropdown.Item key="9:00 pm">9:00 pm</Dropdown.Item>
                <Dropdown.Item key="9:30 pm">9:30 pm</Dropdown.Item>
                <Dropdown.Item key="10:00 pm">10:00 pm</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
          <Input bordered labelPlaceholder="Nombre" color="default" css={{width:"30%"}}/>
          <Input bordered labelPlaceholder="Correo" color="default" css={{width:"30%"}}/>
          <Input bordered labelPlaceholder="Telefono" color="default" css={{width:"30%"}}/>
        </Card>
      </Grid>
    </Grid.Container>
  );
};
