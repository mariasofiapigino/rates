import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../Rates/Rates.css";

export const Rates = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // console.log(isAuthenticated);

  return (
    isAuthenticated && (
      <div>
        <h1>{user.email}</h1>
        <div class="embed-container">
          <iframe
            frameborder="0"
            allowfullscreen
            src="https://docs.google.com/spreadsheets/d/1CvCZXpMZQSnPwlvu4hOtWqalyVyyxS7fB4jKen3oOss/edit?usp=sharing"
          ></iframe>
        </div>
      </div>
    )
  );
};
