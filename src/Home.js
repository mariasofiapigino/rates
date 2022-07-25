import { LoginButton } from "./Login";

export const Home = () => {
  return (
    <>
      <div class="jumbotron jumbotron-fluid">
        <h1 class="display-4">Rates</h1>
        <p class="lead">
          Web page to update the values ​​of the clients' rates.
        </p>
        <hr class="my-4"></hr>

        <p class="lead">
          <LoginButton />
        </p>
      </div>{" "}
    </>
  );
};
