import image from "./assets/xepelin_horizontal.png";
import { LogoutButton } from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <img
          src={image}
          alt="Xepelin-logo"
          width="15%"
          class="align-text-top"
        ></img>
        {isAuthenticated && <LogoutButton />}
      </div>
    </nav>
  );
};
