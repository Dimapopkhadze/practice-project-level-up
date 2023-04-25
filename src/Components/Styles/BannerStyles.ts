import styled from "@emotion/styled";

type ContainerStyledProps = {
  isResponsive: boolean;
  backgroundImage: string;
  wideBanner?: boolean;
};

export const StyledContainer = styled.div<ContainerStyledProps>`
  background-image: url("${({ backgroundImage }) => backgroundImage}");
  background-repeat: no-repeat;
  width: ${({ isResponsive, wideBanner }) =>
    isResponsive ? "100%" : wideBanner ? "100%" : "395px"};
  max-width: ${({ isResponsive, wideBanner }) =>
    isResponsive ? "343px" : wideBanner ? "100%" : "395px"};
  height: 104px;
  background-position: right;
  background-size: auto 100%;
  border-radius: 12px;

  @media (max-width: 790px) {
    max-width: 343px;
  }
`;
export const FlexBox = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  height: 50%;
  font-size: 15px;
  span {
    border-radius: 20px;
    padding: 10px;
  }
  .prize {
    font-size: 26px;
    color: #ffbe00;
  }
  .left {
    text-align: right;
  }
  .right {
    text-align: left;
  }
  div {
    width: 100%;
  }
`;
