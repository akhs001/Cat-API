import styled from "styled-components"

export const Mnu = styled.p`
display:flex;
justify-content:center;

>p {
    margin-left:40px;
    font-size : 2em;

    :hover {
        color:blue;
        cursor:pointer;
        scale: 110%;
    }
}
`;