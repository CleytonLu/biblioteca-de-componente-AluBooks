import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { CustomEmailProps, CustomInput } from "../src/components"

export default {
    title: "CustomInput",
    component: CustomInput
} as ComponentMeta<typeof CustomInput>;

export const Template: ComponentStory<typeof CustomInput> = (args) => <CustomInput {...args} />;

Template.args = {
    label: "Email",
    placeholder: "seuemail@email.com",
    setValue: (value: string): void => {},
    value: "",
    type: "email"
} as CustomEmailProps;