import styled from 'styled-components';

const StyledTitle = styled.h1`
  text-align: center;
  margin: 20px;
  color: #003366; /* Azul Escuro */
  font-family: 'Arial', sans-serif;
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
