import "./App.css";
import { LoginButton } from "./Login";
import { Rates } from "./Rates/Rates";
import { LogoutButton } from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <>
            <Rates />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
}

export default App;
