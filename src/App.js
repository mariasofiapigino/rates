import "./App.css";
import { Rates } from "./Rates/Rates";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Navbar />
      <div>
        {isAuthenticated ? (
          <>
            <Rates />
          </>
        ) : (
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 offset-3 float-md-center container">
            <Home />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
