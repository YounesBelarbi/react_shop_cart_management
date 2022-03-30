import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    display:flex;
    margin: 0 auto;
    align-items:center;

    & a {
        margin:15px;
        text-decoration: none;
        color: #fff;
        font-weight: bold;
    }

    & span {
        background-color:red;
        border-radius: 50%;
        width: 19px;
        text-align: center;
        color: #fff;
    }
`