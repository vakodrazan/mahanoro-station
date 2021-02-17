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
        background-image: url("/images/directionsBusIcon.svg");
        background-repeat: no-repeat;
        background-position: 0 50%;
        background-size: 15%;
        margin: 0;
        padding: 0;
        padding-left: 40px;

        @media (min-width: 1040px) {
            background-size: contain;
        }
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
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    a {
        color: currentColor;
        text-decoration: none;
    }
`;

export const BookSeatHeaderStyle = styled.header`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 79px;

    img {
        justify-self: end;
    }

    .header {
        justify-self: baseline;
    }
`;

export const FeatureStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 79px;
    font-weight: 500;
    font-size: 24px;
    text-transform: uppercase;
`;

export const SectionItemStyle = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 79px;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
`;

export const SeatList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    justify-self: end;

    img {
        cursor: pointer;
    }
`;

export const TripInfoStyle = styled.ul`
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        font-weight: 500;
        font-size: 24px;
        padding-bottom: 24px;

        span {
            color: #94989B;
        }
    }
    p {
        margin: 0;
    }
`;

export const ButtonStyle = styled.button`
    background-color: #E53170;
    padding: 22px 40px;
    color: white;
    font-size: 24px;
    border: none;
    cursor: pointer;

    &:disabled {
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), #E53170;
    }
`;

export const ResultsItemStyle = styled.div`
    text-align: end;


    .price {
        font-weight: 500;
        font-size: 36px;
        color: #2F2F2F;

        span {
            color: #FF8906;
        }

        small {
            font-size: 24px;
        }
    }

    button {
        p {
            margin: 0;
        }

        &:focus {
            outline: none;
        }

        span {
            color: #FF8906;
        }
    }

    .total {
        font-weight: 500;
        font-size: 24px;
        text-transform: uppercase;
    }
`;

export const FormStyle = styled.form`
    display: grid;
    grid-template-rows: 1fr;
    gap: 13px;

    label {
        font-weight: 500;
        font-size: 18px;
    }

    button {
        justify-self: end;
    }
`;

export const InputStyle = styled.input`
    background: #000000;
    border: none;
    color: #FF8906;
    font-size: 24px;
    font-weight: 500;
    padding: 22px 28px;
    max-width: 96%;

    &:focus {
        outline: none;
    }
`;
export const Modal = styled.div`
    width: 100vw;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    background: rgba(255, 255, 255, 0.8);

    .inner {
        background-color: #FFFFFF;
        border: 5px solid #E53170;
        box-sizing: border-box;
        width: 70%;
        height: 70%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;

        @media (min-width: 1040px) {
            height: 80%;
            width: 45%;
        }

        h2 {
            font-weight: bold;
            font-size: 36px;
            text-transform: uppercase;
            max-width: 500px;
            margin: 0;
        }

        p {
            max-width: 500px;
            font-weight: 500;
            font-size: 24px;
            margin: 0;
        }

        img {
            align-self: flex-end;
            cursor: pointer;
        }
    }

`;

export const NextTripHeaderStyle = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 68px;

    img {
        justify-self: end;
    }
`;

export const NextTripContentStyle = styled.ul`
    display: grid;
    grid-template-rows: 1fr;
    gap: 55px;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 36px;
    font-weight: normal;
    padding-top: 100px;

    p {
        margin: 0;
    }

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;

        .content {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 40px;

            .departure {
                color: #FF8906;
            }

            span {
                color: #E53170;
            }
        }
    }
`;

export const BookingStyle = styled.article`
    display: grid;
    gap: 40px;
`;