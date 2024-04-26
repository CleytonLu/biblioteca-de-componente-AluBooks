import React, { useState } from "react"
import { CustomGrupoOpcoesContainer, CustomGrupoOpcoesFooter, CustomGrupoOpcoesHeader, CustomGrupoOpcoesStrong } from "./styles"

export interface CustomGrupoOpcao{
    id: number;
    titulo: string;
    corpo: string;
    rodape: string;
}

export interface CustomGrupoOpcoesProps{
    opcoes: CustomGrupoOpcao[];
    valorInicial?: CustomGrupoOpcao;
}

export const CustomGrupoOpcoes = ({ opcoes, valorInicial }: CustomGrupoOpcoesProps) => {
    const [selecao, setSelecao] = useState<CustomGrupoOpcao | null>(valorInicial ?? null);

    const slecionar = (opcao: CustomGrupoOpcao): void => {
        setSelecao(opcao);
    };

    return (
        <>
            {
                opcoes.map((opcao) => (
                    <CustomGrupoOpcoesContainer
                        onClick={() => slecionar(opcao)}
                        key={opcao.id}
                        selected={selecao?.id === opcao.id}
                    >
                        <CustomGrupoOpcoesHeader>{opcao.titulo}</CustomGrupoOpcoesHeader>
                        <div>
                            <CustomGrupoOpcoesStrong>{opcao.corpo}</CustomGrupoOpcoesStrong>
                        </div>
                    <CustomGrupoOpcoesFooter>
                        {opcao.rodape}
                    </CustomGrupoOpcoesFooter>
                </CustomGrupoOpcoesContainer>
                ))
            }
        </>
    
)
}