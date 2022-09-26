import React, { createContext, ReactNode, useCallback, useState } from 'react';
import { toast } from "react-toastify";

import { api } from '../services/api';

import { Coffee } from "../types";

type UpdateCoffeeAmount = {
  coffeeId: number;
  amount: number;
}

type CartSuccessProps = {
  zipcode: string;
  address: string;
  number: number;
  complement?: string;
  district: string;
  city: string;
  state: string;
  paymentMethod: string;
};

type CartContextContextData = {
  cart: Coffee[];
  cartSuccess: CartSuccessProps | null;
  addCoffee: (coffeeId: number) => Promise<void>;
  addCartSuccess: (formValues: CartSuccessProps) => void;
  removeCoffee: (coffeeId: number) => void;
  updateCoffeeAmount: ({ coffeeId, amount }: UpdateCoffeeAmount) => void;
};

export const CartContext = createContext(
  {} as CartContextContextData
);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Coffee[]>(() => {
    const storagedCart = localStorage.getItem("@CoffeeDelivery:cart");

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });
  const [cartSuccess, setCartSuccess] = useState<CartSuccessProps | null>(null);

  const addCoffee = useCallback(async (coffeeId: number) => {
    try {
      const updatedCart = [...cart];
      const coffeeExists = updatedCart.find(
        (coffee) => coffee.id === coffeeId
      );

      const currentAmount = coffeeExists ? coffeeExists.amount : 0;
      const amount = currentAmount + 1;

      if (coffeeExists) {
        coffeeExists.amount = amount;
      } else {
        const coffee = await api.get(`/coffees/${coffeeId}`);

        const newCoffee = {
          ...coffee.data,
          amount: 1,
        };

        updatedCart.push(newCoffee);
      }

      setCart(updatedCart);
      localStorage.setItem("@CoffeeDelivery:cart", JSON.stringify(updatedCart));
    } catch (error) {
      toast.error("Erro na adição do café");
    }
  }, [cart]);


  const addCartSuccess = useCallback((formValues: CartSuccessProps) => {
    setCartSuccess(formValues);
    setCart([]);
    localStorage.removeItem("@CoffeeDelivery:cart");
  }, [])

  const removeCoffee = useCallback((coffeeId: number) => {
    try {
      const updatedCart = [...cart];
      const coffeeIndex = updatedCart.findIndex(
        (coffee) => coffee.id === coffeeId
      );

      if (coffeeIndex >= 0) {
        updatedCart.splice(coffeeIndex, 1);
        setCart(updatedCart);
        localStorage.setItem("@CoffeeDelivery:cart", JSON.stringify(updatedCart));
      } else {
        throw Error();
      }
    } catch {
      toast.error("Erro na remoção do café");
    }
  }, [cart]);

  const updateCoffeeAmount = useCallback(async ({
    coffeeId,
    amount,
  }: UpdateCoffeeAmount) => {
    try {
      if (amount <= 0) {
        return;
      }

      const updatedCart = [...cart];
      const coffeeExists = updatedCart.find((coffee) => coffee.id === coffeeId);

      if (coffeeExists) {
        coffeeExists.amount = amount;
        setCart(updatedCart);
        localStorage.setItem("@CoffeeDelivery:cart", JSON.stringify(updatedCart));
      } else {
        throw Error();
      }
    } catch {
      toast.error("Erro na alteração de quantidade do café");
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, cartSuccess, addCoffee, addCartSuccess, removeCoffee, updateCoffeeAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}
