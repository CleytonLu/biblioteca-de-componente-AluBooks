import styled, { css } from 'styled-components';

interface CustomButtonContainerProps{
  tipo: 'primario' | 'secundario';
}

export const CustomButtonContainer = styled.button<CustomButtonContainerProps>`
  background-color: ${({tipo}) => tipo === "primario" ? "#eb9b00" :  "#fff"};
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color:${({tipo}) => tipo === "primario" ?   "#fff" : "#eb9b00" };
  font-size: 20px;
  cursor: pointer;


  ${({ tipo }) => tipo === "primario" ? "#fff" : "#eb9b00" ? css`
  &:hover{
    background-color: #B87900;
    border: 2px solid #B87900;
  }
  ` : css`
  &:hover{
    background-color: #fff;
    border: 2px solid #BB8900;
    color: #BB8900;
  }
  `}

`;
