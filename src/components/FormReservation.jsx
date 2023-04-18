import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import "../styles/formReservation.css";

export const FormReservation = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Nombre: ${nombre}, Correo: ${correo}, Teléfono: ${telefono}`);
    // Aquí puedes agregar la lógica para enviar el formulario

  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
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
    </form>
  );
};
