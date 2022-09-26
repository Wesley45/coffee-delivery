import styled from "styled-components";

export const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem 2rem;
  max-width: 1120px;

  @media (min-width: 1024px) {
    padding: 2rem 0;
  }
`;

export const NavbarContainer = styled.nav`
  align-items: center;
  display: flex;
  gap: 0.75rem;

  li {
    list-style: none;
  }
`;

export const LocationIcon = styled.a`
  align-items: center;
  background: ${({ theme }) => theme["purple-light"]};
  color: ${({ theme }) => theme["purple"]};
  border-radius: 6px;
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  height: 2.375rem;
  padding: 0.5rem;
  text-decoration: none;
  width: 8.938rem;

  span {
    color: ${({ theme }) => theme["purple-dark"]};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.125rem;
  }
`;

export const CartIcon = styled.a`
  align-items: center;
  background: ${({ theme }) => theme["yellow-light"]};
  border-radius: 6px;
  display: flex;
  height: 2.375rem;
  justify-content: center;
  padding: 0.5rem;
  position: relative;
  text-decoration: none;
  width: 2.375rem;
`;

export const Counter = styled.div`
  align-items: center;
  background: ${({ theme }) => theme["yellow-dark"]};
  border-radius: 1000px;
  color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: row;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1rem;
  height: 1.25rem;
  justify-content: center;
  letter-spacing: -0.06em;
  padding: 0px;
  position: absolute;
  right: -8.35px;
  top: -8px;
  width: 1.25rem;
  text-align: center;
  z-index: 1;
`;
