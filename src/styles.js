import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;

    @media (min-width: 1040px) {
        max-width: 1040px;
        margin: auto;
    }
`;

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

export const TripList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    color: #fff;
    margin: 0;
    padding: 0;
    list-style: none;

    .list {
        background-color: #0F0E17;
        padding-top: 20px;
        padding-bottom: 20px;
        text-align: center;
        text-transform: uppercase;
    }

    a {
        color: currentColor;
        text-decoration: none;
    }
`;