import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomButton, CustomButtonProps } from '../src';

export default {
  title: 'CustomButton',
  component: CustomButton,
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (props) => <CustomButton {...props}  />;

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  text: "Botão primário",
  tipo: "primario"
} as CustomButtonProps;

export const SecondaryButton = Template.bind({});

SecondaryButton.args = {
  text: "Botão secundário",
  tipo: "secundario"
} as CustomButtonProps;
