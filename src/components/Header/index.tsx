import React from "react";
import { Link } from 'react-router-dom';
import { ShoppingCart } from "phosphor-react";

import location from "../../assets/location.svg";
import logo from "../../assets/logo.svg";
import { useCart } from "../../hooks/useCart";

import {
  CartIcon,
  Counter,
  HeaderContainer,
  LocationIcon,
  NavbarContainer,
} from "./styles";

export const Header: React.FC = () => {
  const { cart } = useCart();
  const cartSize = cart.length;

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="Coffee Delivery" />
      </Link>

      <NavbarContainer>
        <li>
          <LocationIcon href="">
            <img src={location} alt="Icone de localização" />
            <span>São Paulo, SP</span>
          </LocationIcon>
        </li>
        <li>
          <CartIcon as={Link} to="/checkout">
            <ShoppingCart />
            <Counter>{cartSize}</Counter>
          </CartIcon>
        </li>
      </NavbarContainer>
    </HeaderContainer>
  );
};
