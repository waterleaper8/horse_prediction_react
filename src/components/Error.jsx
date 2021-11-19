import React from "react";

export const Error = () => {
  return (
    <>
      <h2>404</h2>
      <p>Sorry, the page you're looking con not found.</p>
      <script>
          sessionStorage.setItem('path', location.pathname);
          location.replace('./');
      </script>
    </>
  );
};
