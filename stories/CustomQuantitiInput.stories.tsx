import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomQuantitiInput } from "../src/components";

export default {
    title: "CustomQuantitiInput",
    component: CustomQuantitiInput,
} as ComponentMeta<typeof CustomQuantitiInput>

export const Template: ComponentStory<typeof CustomQuantitiInput> = (args) => <CustomQuantitiInput {...args} />; 

Template.args = {
    onChange: (value: number) => { }
}