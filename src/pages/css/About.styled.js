import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 80%;
  height: 500px;
  margin-top: 20px;
  border-radius: 15px;
  background-color: var(--color-3);
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: justify;
    font-family: "Lobster", cursive;
    font-size: 30px;
  }
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border: 1px #000 solid;
    border-radius: 15px;
  }
  p {
    width: 80%;
    text-align: center;
    font-family: "Lobster", cursive;
    font-size: 22px;
  }
`;
