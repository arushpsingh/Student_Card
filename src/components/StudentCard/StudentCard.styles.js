import styled from "styled-components";
import { em, rgba, rem } from "polished";

export const StyledStudentCard = styled.div`
  padding: ${em("24px")};
  background-color: #ffffff;
  border-radius: ${em("8px")};
  box-shadow: 0 0 ${em("8px")} 0 ${rgba("#000", 0.2)};
  min-width: 360px;
  min-height: 480px;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
`;

export const StyledAvatar = styled.div`
  width: ${em("55px")};
  height: ${em("55px")};
  background-color: #d8d8d8;
  border-radius: 50%;
  margin-right: ${em("16px")};
`;

export const StyledHeaderDetails = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.h3`
  font-size: ${rem("24px")};
  margin: ${em("4px")} 0;
  line-height: 1.125;
  color: #484848;
`;

export const StyledSubTitle = styled.h5`
  font-size: ${rem("14px")};
  font-weight: 400;
  line-height: 1.15;
  color: ${rgba("#484848", 0.8)};
`;

export const StyledDetails = styled.section`
  display: flex;
  flex-direction: column;
  * + & > * {
    margin-top: ${em("16px")};
  }
`;

export const StyledDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledDetailTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledDetailText = styled.div`
  display: flex;
  flex-direction: column;
`;
