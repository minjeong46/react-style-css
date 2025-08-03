import React from "react";
import styled from "styled-components";

const Nav = () => {
    return (
        <NavList>
            <NavSpan>Men</NavSpan>
            <NavIcon>|</NavIcon>
            <NavSpan>Clothing</NavSpan>
            <NavIcon>|</NavIcon>
            <NavSpan>Basic Tee 6-Pack</NavSpan>
        </NavList>
    );
};

export default Nav;

const NavList = styled.nav`
    display: flex;
    margin-bottom: 1rem;
`;

const NavSpan = styled.span`
    &:last-child {
        color: #888;
    }
`;

const NavIcon = styled.i`
    padding: 0 1rem;
`;
