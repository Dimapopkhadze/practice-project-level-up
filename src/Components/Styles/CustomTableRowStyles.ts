import styled from "@emotion/styled";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  max-height: 450px;
  overflow-x: auto;
  .second-table {
    justify-content: flex-start;
    span {
      background: #2c3234;
      padding: 5px 10px;
      width: 25px;
      text-align: center;
      border-radius: 70px;
    }
  }

  @media (max-width: 600px) {
    max-height: 490px;
    ::-webkit-scrollbar {
      display: block;
    }
  }
`;
export const Flex = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1e2122;
  border: 3px solid #2c3234;
  border-radius: 30px;
  padding: 10px 0;
  margin: 3px 20px;
  color: white;

  div {
    overflow: hidden;
    padding: 5px 15px;

    display: inline-block;

    @media (max-width: 600px) {
    }
  }

  .start {
    text-overflow: ellipsis;
    width: 50%;
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
    overflow: hidden;

    text-overflow: ellipsis;
    width: 50%;
    text-align: end;
  }

  @media (max-width: 600px) {
    margin: 3px 5px;
    div {
      font-size: 0.7em;
    }
  }
`;

export const CustomHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  background: #25292b;
  align-items: center;

  padding: 20px 30px;

  position: sticky;
  top: 0;

  div {
    font-size: 14px;
  }
  .flex {
    display: flex;
    gap: 5px;
    align-items: center;
    img {
      height: 70%;
    }
  }
`;
