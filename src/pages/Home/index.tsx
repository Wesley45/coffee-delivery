import React, { useCallback, useEffect, useState } from "react";
import { Coffee as CoffeeIcon, Package, ShoppingCart, Timer } from "phosphor-react";
import { Link } from "react-router-dom";

import { api } from "../../services/api";
import { formatPrice } from "../../utils/format";

import coffee from "../../assets/coffee.svg";

import { Coffee } from "../../types";
import { useCart } from "../../hooks/useCart";

import {
  BuyActionsContainer,
  BuyContainer,
  CoffeeCard,
  CoffeeList,
  CoffeeTag,
  CoffeeTags,
  CounterContainer,
  HomeContainer,
  IntroContainer,
  IntroContent,
  ItemContainer,
  ItemIcon,
  ItemsContainer,
} from "./styles";

type CartItemsAmount = {
  [key: number]: number;
}

export const Home: React.FC = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const { addCoffee, cart, updateCoffeeAmount } = useCart();

  useEffect(() => {
    async function loadCoffees() {
      const response = await api.get("coffees");
      setCoffees(response.data);
    }

    loadCoffees();
  }, []);

  const cartItemsAmount = cart.reduce((sumAmount, coffee) => {
    sumAmount[coffee.id] = coffee.amount;
    return sumAmount;
  }, {} as CartItemsAmount);

  const handleProductDecrement = useCallback((coffeeId: number) => {
    const coffeeExists = cart.find((coffee) => coffee.id === coffeeId);

    if (coffeeExists) {
      updateCoffeeAmount({ coffeeId: coffeeExists.id, amount: coffeeExists.amount - 1 });
    }
  }, [cart]);

  return (
    <HomeContainer>
      <IntroContainer>
        <IntroContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ItemsContainer>
            <ItemContainer>
              <p>
                <ItemIcon color="yellowDark">
                  <ShoppingCart size={16} />
                </ItemIcon>
                Compra simples e segura
              </p>
              <p>
                <ItemIcon color="yellow">
                  <Package size={16} />
                </ItemIcon>
                Entrega rápida e rastreada
              </p>
            </ItemContainer>
            <ItemContainer>
              <p>
                <ItemIcon color="baseText">
                  <Timer size={16} />
                </ItemIcon>
                Embalagem mantém o café intacto
              </p>
              <p>
                <ItemIcon color="purple">
                  <CoffeeIcon size={16} />
                </ItemIcon>
                O café chega fresquinho até você
              </p>
            </ItemContainer>
          </ItemsContainer>
        </IntroContent>
        <img src={coffee} alt="" />
      </IntroContainer>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <section>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id}>
              <img src={coffee.image} alt="" />
              <CoffeeTags>
                {coffee.tags.map((tag) => (
                  <CoffeeTag key={`${coffee.id}-${tag.name}`}>{tag.name}</CoffeeTag>
                ))}
              </CoffeeTags>
              <h3>{coffee.title}</h3>
              <p>{coffee.description}</p>

              <BuyContainer>
                <p>
                  R$ <span>{formatPrice(coffee.price)}</span>
                </p>
                <BuyActionsContainer>
                  <CounterContainer>
                    <button type="button"
                      disabled={(cartItemsAmount[coffee.id] || 0) <= 1}
                      onClick={() => handleProductDecrement(coffee.id)}
                    >-
                    </button>
                    <span>{cartItemsAmount[coffee.id] || 0}</span>
                    <button type="button" onClick={() => addCoffee(coffee.id)}>+</button>
                  </CounterContainer>
                  <Link to="/checkout">
                    <ShoppingCart size={22} />
                  </Link>
                </BuyActionsContainer>
              </BuyContainer>
            </CoffeeCard>
          ))}
        </section>
      </CoffeeList>
    </HomeContainer>
  );
};
