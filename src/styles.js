import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    background-color: #0F0E17;
    padding: 28px 20px;

    a {
        text-decoration: none;
        color: currentColor;
    }

    h1 {
        margin: 0;
        padding: 0;
    }

    p {
        color: #A7A9BE;
        margin: 0;
        padding: 0;
    }
`;