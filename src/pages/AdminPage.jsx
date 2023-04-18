import React, { useState } from "react";
import { LogoutApp } from "../components/LogoutApp";
import { Table, Text, Button, Container, Card } from "@nextui-org/react";
import Swal from "sweetalert2";

import { IconButton } from "../components/IconButton";
import { DeleteIcon } from "../components/DeleteIcon";

export const AdminPage = () => {
  const [reservas, setReservas] = useState([]);

  const options = { year: "numeric", month: "short", day: "numeric" };

  const actualizarReservas = () => {
    fetch("https://back-node-team09.onrender.com/reservas")
      .then((response) => response.json())
      .then((data) => setReservas(data))
      .catch((error) => console.error(error));
  };

  const eliminarReserva = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://back-node-team09.onrender.com/reservas/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            // Actualizar las reservas después de borrar una
            actualizarReservas();
            console.log("Reserva eliminada exitosamente");
          })
          .catch((error) => console.error(error));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const columns = [
    { name: "Nombre", uid: "nombre" },
    { name: "Correo", uid: "correo" },
    { name: "Teléfono", uid: "telefono" },
    { name: "Comensales", uid: "cantidad" },
    { name: "Fecha", uid: "fecha" },
    { name: "Eliminar", uid: "actions" },
  ];

  const renderCell = (item, columnKey) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
      case "_id":
      case "nombre":
      case "correo":
      case "telefono":
        return cellValue;
      case "fecha":
        const date = new Date(cellValue);
        return date.toLocaleDateString("es-ES", options);

      case "actions":
        return (
          <IconButton onClick={() => eliminarReserva(item._id)} color="error">
            Delete
            <IconButton>
              <DeleteIcon size={20} fill="#FF0080" />
            </IconButton>
          </IconButton>
        );
      default:
        return cellValue;
    }
  };

  return (
    <Container
      css={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "1rem",
        gap: "1rem",
      }}
    >
      <Text h3>Listado de Reservas</Text>
      <Table
        aria-label="Example table with custom cells"
        css={{
          height: "auto",
          minWidth: "100%",
          overflow: "scroll",

        }}
        selectionMode="none"
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              key={column.uid}
              css={{
                margin: "0 auto",
                padding: "0.5rem",
              }}
            >
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body>
          {reservas.map((reserva) => (
            <Table.Row key={reserva._id}>
              {columns.map((column) => (
                <Table.Cell
                  key={column.uid}
                  css={{
                    padding: "0.5rem 1rem",
                  }}
                >
                  {renderCell(reserva, column.uid)}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
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

        <Button onPress={actualizarReservas} css={{ maxW: "40%" }}>
          Actualizar
        </Button>
        <LogoutApp />
        </fieldset>
      </Card>
    </Container>
  );
};
