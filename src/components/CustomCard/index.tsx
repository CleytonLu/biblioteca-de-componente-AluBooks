import React from "react"
import { CustomCardContainer, FooterContainer, IconsContainer, InformationContainer, Price, SubTitleCard, TextInformation, TextInformationContainer, TitleCard, ValueContainer } from "./styles"
import { CustomButton } from "../CustomButton"
import { HeartIcon } from "../../icons/HeartIcon"
import { BagIcon } from "../../icons/BagIcon"

export const CustomCard = () => {
    return(
        <CustomCardContainer>
            <InformationContainer>
                <IconsContainer>
                    <TitleCard>Sobre o livro</TitleCard>
                    <BagIcon />
                    <HeartIcon />
                </IconsContainer>
                <SubTitleCard>Liderança em Design</SubTitleCard>
                <TextInformationContainer>
                    <TextInformation>Habilidades de gestão para alavancar sua carreira</TextInformation>
                    <TextInformation>Por: Vitor Zanini</TextInformation>
                </TextInformationContainer>
                <FooterContainer>
                    <ValueContainer>
                        <TextInformation>A partir de:</TextInformation>
                        <Price>R$ 29,90</Price>
                    </ValueContainer>
                    <CustomButton text="Comprar"/>
                </FooterContainer>
            </InformationContainer>
        </CustomCardContainer>
    )
}