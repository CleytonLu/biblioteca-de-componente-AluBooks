import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CustomGrupoOpcoes, CustomGrupoOpcoesProps} from "../src/components/CustomGrupoOpcoes";

export default {
    title: "CustomGrupoOpcoes",
    component: CustomGrupoOpcoes
} as ComponentMeta<typeof CustomGrupoOpcoes>

export const Template: ComponentStory<typeof CustomGrupoOpcoes> = (args) => <CustomGrupoOpcoes {...args} />;

Template.args = {
    opcoes: [
        {
            id: 1,
            titulo: "E-book",
            corpo: "R$ 00,00",
            rodape: ".pdf, .ebc, .etc"
        },
        {
            id: 2,
            titulo: "Impresso",
            corpo: "R$ 00,00",
            rodape: ".pdf, .ebc, .etc"
        },
        {
            id: 3,
            titulo: "Impresso + E-book",
            corpo: "R$ 00,00",
            rodape: ".pdf, .ebc, .etc"
        }
    ]
} as CustomGrupoOpcoesProps;