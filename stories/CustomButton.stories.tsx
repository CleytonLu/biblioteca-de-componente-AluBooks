import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomButton } from '../src';

export default {
  title: 'CustomButton',
  component: CustomButton,
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = () => <CustomButton />;

export const Primario = Template.bind({});
