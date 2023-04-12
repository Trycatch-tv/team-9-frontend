import React from "react";
import {
  Card,
  Grid,
  Text,
  Image,
  Row,
  Spacer,
  Container,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import "../styles/general.css";

export const DevelopCards = ({ ...info }) => {
  const imgURL = (url) => {
    return new URL(`../assets/developers/${url}.jpg`, import.meta.url).href;
  };

  return (
    <>
      <Grid css={{ padding: "2rem" }}>
        <Row
          justify="center"
          css={{
            marginBottom: "-60px",
            zIndex: "5",
          }}
        >
          <Image
            src={imgURL(info.image)}
            alt="Product Image"
            objectFit="cover"
            css={{
              width: "100%",
              height: "100%",
              borderRadius: "180%",
              filter: "none",
              boxShadow: "rgb(174 174 179) 1px -1px 5px 1px",
              "&:hover": {
                transform: "scale(1.006)",
              },
            }}
          />
        </Row>
        <Card
          isPressable
          isHoverable
          css={{
            w: "100%",
            minWidth: "278px",
            alignContent: "center",
          }}
        >
          <Card.Header css={{}}>
            <Spacer y={1} />
          </Card.Header>
          <Card.Body
            css={{
              textAlign: "center",
              justifyContent: "center",
              padding: "5px",
            }}
          >
            <Text
              css={{
                color: "rgb(80 84 86)",
                marginBottom: "0",
              }}
              weight="bold"
            >
              {info.name}
            </Text>
          </Card.Body>
          <Card.Footer
            css={{
              textAlign: "center",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "10px",
              width: "fit-content",
            }}
          >
            <Row
              align="center"
              justify="center"
              css={{
                flexDirection: "column",
                width: "100%",
                alignItems: "flex-start",
              }}
            >
              <Text
                css={{
                  color: "rgb(80 84 86)",
                  margin: "0",
                }}
              >
                Rol: {info.title}
              </Text>
              <Text
                css={{
                  color: "rgb(80 84 86)",
                }}
              >
                <Link to={info.linkedin}>Linkedin</Link>
              </Text>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </>
  );
};
