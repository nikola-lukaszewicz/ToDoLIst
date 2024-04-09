import styled from "styled-components";

export const Container = styled.div`
  border: solid 2px #6a5acd;
  border-radius: 10px;
  background: #9370db;
  margin: 0 auto;
  height: auto;
  width: 50%;
  font-size: 32px;
  font-weight: 500;
  justify-content: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
`;
export const H1 = styled.div`
  font-size: 50px;
  margin-bottom: 20px;
`;

export const Task = styled.div`
  border-radius: 7px;
  background: #dda0dd;
  display: flex;
  justify-content: center;
  margin: 20px;
  padding: 10px;
`;

export const Button = styled.button`
  margin-left: 20px;
`;

export const Input = styled.input`
  height: 40px;
  width: 50%;
  border-radius: 6px;
`;

export const ButtonInput = styled.button`
  margin-left: 30px;
  border-radius: 6px;
  background: #dda0dd;
  height: 45px;
`;
