import { Button, Link } from "@nextui-org/react";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const LogoutApp = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <Link>
        <Button rounded bordered onPress={handleLogout}>
          LogoutApp
        </Button>
      </Link>
    </div>
  );
};
