import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CustomCard } from "../src";

export default {
    title: "CustomCard",
    component: CustomCard
} as ComponentMeta<typeof CustomCard>

const Template: ComponentStory<typeof CustomCard> = () => <CustomCard />

export const Card = Template.bind({})