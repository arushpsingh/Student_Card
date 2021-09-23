import React from "react";
import {
  StyledAvatar,
  StyledHeaderDetails,
  StyledHeader,
  StyledStudentCard,
  StyledSubTitle,
  StyledTitle,
  StyledDetails,
  StyledDetailWrapper,
  StyledDetailTitle,
  StyledDetailText,
} from "./StudentCard.styles";

const StudentCard = () => {
  return (
    <StyledStudentCard>
      <StyledHeader>
        <StyledAvatar />
        <StyledHeaderDetails>
          <StyledTitle>Arush Pratap Singh</StyledTitle>
          <StyledSubTitle>B.tech(CS), 2017-2021</StyledSubTitle>
        </StyledHeaderDetails>
      </StyledHeader>
      <StyledDetails>
        <StyledDetailWrapper>
          <StyledDetailTitle>Contact Number</StyledDetailTitle>
          <StyledDetailText>8770775744</StyledDetailText>
        </StyledDetailWrapper>
      </StyledDetails>
    </StyledStudentCard>
  );
};

export default StudentCard;
