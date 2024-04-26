import styled from "styled-components";

interface CustomGrupoOpcoesContainerProps{
    selected: boolean;
}



export const CustomGrupoOpcoesHeader = styled.header`
    font-size: 12px;
    color: #EB9B00;
    font-weight: 400;
`

export const CustomGrupoOpcoesStrong = styled.strong`
    font-size: 16px;
    font-weight: 700;
`

export const CustomGrupoOpcoesFooter = styled.footer`
    font-weight: 400;
    font-size: 12px;
`

export const CustomGrupoOpcoesContainer = styled.section<CustomGrupoOpcoesContainerProps>`
    width: 194px;
    height: 88px;
    background: ${({selected}) => selected ? "linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37% )" : "#FFF"};
    border: 1px solid;
    border-color: ${({selected}) => selected ? "##002F52" : "#EB9B00"};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin: 10px;
    font-family: sans-serif;
    cursor: pointer;

    ${CustomGrupoOpcoesHeader}{
        color: ${({selected}) => selected ? "#FFF" : "#EB9B00"};
    }

    ${CustomGrupoOpcoesStrong}{
        color: ${({selected}) => selected ? "#FFF" : "#EB9B00"};
    }

    ${CustomGrupoOpcoesFooter}{
        color: ${({selected}) => selected ? "#FFF" : "rgba(0, 0, 0, 0.5)"};
        font-weight: 400;
        font-size: 12px;
    }

`;