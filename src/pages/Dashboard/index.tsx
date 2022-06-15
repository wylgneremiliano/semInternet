import React from "react";
import { Display } from "./components/Display";
import { Container } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Display />
    </Container>
  );
};

export { Dashboard };
