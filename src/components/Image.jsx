import styled from 'styled-components';

const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid #003366; /* Azul Escuro */
`;

const Image = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />;
};

export default Image;
