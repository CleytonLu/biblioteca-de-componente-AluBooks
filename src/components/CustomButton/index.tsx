import React from 'react';
import { CustomButtonContainer } from './styles';

export interface CustomButtonProps {
  text: string;
  tipo?: 'primario' | 'secundario';
  onClick?: () => void;
}

export const CustomButton = ({text, onClick, tipo = "primario"}: CustomButtonProps) => {
  return <CustomButtonContainer tipo={tipo} onClick={onClick}>{text}</CustomButtonContainer>;
};
