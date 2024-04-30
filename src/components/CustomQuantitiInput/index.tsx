import React from "react"
import { useEffect, useState } from "react"
import { BotaoEstilizado, ContainerEstilizado, FlexContainerEstilizado, LabelEstilizada, SpanEstilizado } from "./styles"

export interface AbInputQuantidadeProps {
    onChange?: (value: number) => void
    label?: string;
}

export const CustomQuantitiInput = ({ onChange, label = "Quantidade" } : AbInputQuantidadeProps) => {
    const [value, setValue] = useState(1)

    useEffect(() => {
        if (onChange) {            
            onChange(Number(value))
        }
    }, [value])

    return (
        <ContainerEstilizado>
            <LabelEstilizada>{label}</LabelEstilizada>
            <FlexContainerEstilizado>
                <BotaoEstilizado onClick={() => setValue(prev => prev - 1)}>
                    -
                </BotaoEstilizado>
                <SpanEstilizado>
                    {value}
                </SpanEstilizado>
                <BotaoEstilizado onClick={() => setValue(prev => prev + 1)}>
                    +
                </BotaoEstilizado>
            </FlexContainerEstilizado>
        </ContainerEstilizado>
    )
}