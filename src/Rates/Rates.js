import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../Rates/Rates.css";

export const Rates = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <>
        <div className="rates-container">
          <h1>Rates</h1>
          <p>
            In this Google sheet you can update the values ​​of the rates. Id Op
            and email values ​​cannot be updated from this page.
          </p>
        </div>
        <div class="embed-container">
          <iframe
            frameborder="0"
            allowfullscreen
            src="https://docs.google.com/spreadsheets/d/1CvCZXpMZQSnPwlvu4hOtWqalyVyyxS7fB4jKen3oOss/edit?usp=sharing"
          ></iframe>
        </div>
      </>
    )
  );
};
