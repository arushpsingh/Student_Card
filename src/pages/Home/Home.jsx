import React from "react";
import StudentCard from "../../components/StudentCard/StudentCard";
import { StyledHome } from "./Home.styles";

const Home = () => {
  return (
    <StyledHome>
      <StudentCard />
    </StyledHome>
  );
};

export default Home;
