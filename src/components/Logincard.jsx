import React from "react";
import { Avatar, Button, Card, Col, Row, Text } from "@nextui-org/react";
import reserverd from "../assets/persons.jpg";
import secureIcon from "../assets/secure-shield.png";

export const Logincard = () => {
  return (
    <Card
      css={{ w: "100%", h: "400px", position: "relative" }}
      isHoverable
    >
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col></Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={reserverd}
          objectFit="cover"
          width="100%"
          height="100%"
          alt="Relaxing app background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid $gray800",
          bottom: 0,
          zIndex: 1,
          w: "100%",
          p: "0.5rem 1rem",
          h: "auto",
        }}
      >
        <Row
          css={{
            alignItems: "center",
            padding: "0rem 2rem",
          }}
        >
          <Col css={{ display: "flex", alignItems: "center" }}>
            <Row css={{ gap: "1rem" }}>
              <Col span={3}>
                <Avatar src={secureIcon} css={{ size: "$17" }} />
              </Col>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="#fff"
                >
                  ingresa para hacer tu reserva
                </Text>
              </Col>
            </Row>
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026" }}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Login
              </Text>
            </Button>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
