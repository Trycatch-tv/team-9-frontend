import { Button, Card, Container } from "@nextui-org/react";
import { Link } from "react-router-dom";

import "../styles/HomeStyle.css";

export const HomePage = () => {
  return (
    <Container css={{ width: "100%", maxW: "1200px", marginTop:"1.5rem" }}>
      <Card shadow>
        <div className="banner">
          <h1>RESTAURANTE SABORES DE COLOMBIA</h1>
          <h3>¡Esperamos darle la bienvenida pronto a nuestro Restaurante!</h3>
          <Link to={"/reservation"}>
            <Button shadow bordered flat color="warning" auto>
              RESERVA AHORA
            </Button>
          </Link>
        </div>
        <div className="nosotros">
          <div className="nosotros_texto">
            <h2>¡Bienvenidos al Restaurante Sabores de Colombia!</h2>
            <p>
              En nuestro restaurante, celebramos la rica y variada gastronomía
              de Colombia. Desde los sabores picantes del Caribe hasta los
              platos abundantes de la región Andina, nuestro menú ofrece una
              experiencia culinaria única y emocionante. Nuestros chefs
              experimentados y apasionados utilizan solo los ingredientes más
              frescos y auténticos para preparar cada plato. Desde el famoso
              arroz con pollo hasta el delicioso sancocho, todos nuestros platos
              están diseñados para deleitar sus sentidos y satisfacer su paladar
            </p>
          </div>
          <div className="nosotros_imagen"></div>
        </div>
      </Card>
    </Container>
  );
};
