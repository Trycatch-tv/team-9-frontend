import { Button, Card, Container, Grid, Input, Text } from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = () => {
    if (
      username === import.meta.env.VITE_TEST_USERNAME &&
      password === import.meta.env.VITE_TEST_PASSWORD
    ) {
      navigate("/admin");
    } else {
      alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };
  return (
    <Grid.Container gap={2}>
      <Card isHoverable css={{ width: "350px", margin: "0 auto", alignItems: "center" }}>
        <Card.Header>
          <Text css={{ margin: "0 auto" }}>Iniciar sesión</Text>
        </Card.Header>
        <Grid css={{ width: "100%" }}>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            clearable
            color="success"
            initialValue="getnextui"
            // helperText="Excelent username"
            type="test"
            label="Username"
            placeholder="Enter your username"
            css={{ width: "100%" }}
          />
        </Grid>
        <Grid css={{ width: "100%" }}>
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            clearable
            color="warning"
            initialValue="123"
            // helperText="Insecure password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            css={{ width: "100%" }}
          />
        </Grid>
        <Grid>
          <Button shadow color="primary" auto onClick={handleLogin}>
            Iniciar sesión
          </Button>
        </Grid>
      </Card>
    </Grid.Container>
  );
};
