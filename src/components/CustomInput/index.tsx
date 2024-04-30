import React, { Dispatch, SetStateAction, useState } from "react"
import { CustomEmailContainer, Input, Label } from "./styles";

export interface CustomEmailProps{
    label: string;
    placeholder: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    type?: "text" | "email" | "password" | "date";
}

export const CustomInput = ({label, placeholder = "seuemail@email.com", value, setValue, type = "text"}: CustomEmailProps) => {
    return (
        <CustomEmailContainer>
            <Label>{label}</Label>
            <Input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </CustomEmailContainer>
    );
}