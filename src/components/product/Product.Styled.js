import styled from 'styled-components';

export const StyledProduct = styled.div`
    display: flex;

    & img {
        width 150px;
    }

    & input {
        width: 45px;
        text-align: center;
    }

    ${({ page }) => page == "home" && `
        flex-direction: column;
        align-items:center;
        margin: 10px ;
        padding: 10px;
        border: 1px solid black;
        width: 30%;
        & button {
            margin-top: 10px;
    }`}

    ${({ page }) => page == "cart" && `
        align-items:center; 
        width:60%;
        margin: 10px ;

        & button {
            margin-top: 10px;
            margin: 0 20px;
            width: 40%;
        }

        & p {
            margin: 0 20px;
        }
    `}
`