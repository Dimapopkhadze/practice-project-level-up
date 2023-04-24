import styled from "@emotion/styled";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  max-height: 470px;
  overflow-x: auto;
`;
export const Flex = styled("div")`
  display: flex;
  justify-content: space-between;
  background: #1e2122;
  border: 3px solid #2c3234;
  border-radius: 30px;
  padding: 20px 0;
  margin: 3px 20px;
  color: white;

  div {
    width: 100%;
    padding: 0px 15px;
  }

  .start {
    text-align: start;
    span {
      background: #2c3234;
      padding: 5px 10px;
      width: 25px;
      text-align: center;
      border-radius: 70px;
    }
  }
  .end {
    text-align: end;
  }
`;

export const CustomHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  background: #25292b;
  align-item: center;

  padding: 23px 20px;

  position: sticky;
  top: 0;

  div {
    font-size: 14px;
  }
  .flex {
    display: flex;
    gap: 5px;
    img {
      height: 70%;
    }
  }
`;
