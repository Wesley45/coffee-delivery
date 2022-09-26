import styled from "styled-components";

export const CheckoutContainer = styled.main`
  margin: 0 auto 2rem;
  padding: 0 2rem;
  max-width: 1120px;

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

export const FormCheckoutContainer = styled.form`
  display: flex;
  gap: 2rem;
  width: 100%;
`;

export const FormCheckoutContent = styled.section`
  width: 40rem;

  h2 {
    align-items: center;
    color: ${({ theme }) => theme["base-subtitle"]};
    display: flex;
    font-family: ${({ theme }) => theme["baloo"]};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.438rem;
    margin-bottom: 0.938rem;
  }

  div + div.card {
    margin-top: 0.75rem;
  }
`;

export const FormGroupContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  input {
    align-items: center;
    background: ${({ theme }) => theme["base-input"]};
    border: 1px solid ${({ theme }) => theme["base-button"]};
    border-radius: 4px;
    color: ${({ theme }) => theme["base-text"]};
    display: flex;
    font-size: 0.875rem;
    font-weight: 400;
    height: 2.625rem;
    line-height: 1.125rem;
    padding: 0.75rem;
    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme["base-label"]};
    }
  }
`;

export const FormGroup = styled.div`
  width: 100%;
`;

export const DeliveryAddressCard = styled.div`
  border: 0;
  background: ${({ theme }) => theme["base-card"]};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
`;

export const DeliveryAddressCardContent = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  width: 100%;

  svg {
    color: ${({ theme }) => theme["yellow-dark"]};
  }

  h3 {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.313rem;
  }

  p {
    color: ${({ theme }) => theme["base-text"]};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.125rem;
  }
`;

export const DeliveryAddressCardInfo = styled.div``;

export const PaymentCard = styled.div`
  border: 0;
  background: ${({ theme }) => theme["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
`;

export const PaymentCardContent = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.purple};
  }
`;

export const PaymentCardInfo = styled.div`
  h3 {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.313rem;
  }

  p {
    color: ${({ theme }) => theme["base-text"]};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.125rem;
  }
`;

export const PaymentMethods = styled.div`
  align-items: center;
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 2rem;

  button {
    align-items: center;
    border: 0;
    background: ${({ theme }) => theme["base-button"]};
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    gap: 0.75rem;
    height: 3.188rem;
    padding: 1rem;
    width: 11.167rem;

    svg {
      color: ${({ theme }) => theme.purple};
    }

    span {
      color: ${({ theme }) => theme["base-text"]};
      font-size: 0.75rem;
      line-height: 1.188rem;
      text-transform: uppercase;
    }
  }

  button.active {
    background: ${({ theme }) => theme["purple-light"]};
    border: 1px solid ${({ theme }) => theme.purple};
  }
`;

export const CoffeeCardContainer = styled.section`
  width: 28rem;

  h2 {
    align-items: center;
    color: ${({ theme }) => theme["base-subtitle"]};
    display: flex;
    font-family: ${({ theme }) => theme["baloo"]};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.438rem;
    margin-bottom: 0.938rem;
  }
`;

export const ZipcodeFormGroup = styled.div`
  width: 12.5rem;
`;

export const RowInfo = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 1fr;
  gap: 0.75rem;
  width: 100%;
`;

export const RowInfoLocal = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  gap: 0.75rem;
  width: 100%;
`;

export const CoffeeCard = styled.div`
  align-items: flex-start;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;
  list-style: none;
  width: 100%;
`;

export const ListCoffeeSelected = styled.ul`
  align-items: flex-start;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;
  list-style: none;
  width: 100%;
`;

export const CoffeeSelectedContainer = styled.li``;

export const CoffeeSelected = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;
  gap: 3.688rem;

  > div {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
    padding: 0px;

    img {
      height: 4rem;
      width: 4rem;
    }
  }

  > span {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme["base-text"]};
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.313rem;
    text-align: right;
  }
`;

export const CoffeeSelectedDetails = styled.div`
  h6 {
    align-items: center;
    color: ${({ theme }) => theme["base-subtitle"]};
    display: flex;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.313rem;
  }
`;

export const CoffeeSelectedActions = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  padding: 0px;
  gap: 0.5rem;
`;

export const CounterContainer = styled.div`
  align-items: center;
  background: ${({ theme }) => theme["base-button"]};
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: center;
  padding: 0.5rem;

  button {
    align-items: center;
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme["purple"]};
    cursor: pointer;
    display: flex;
    height: 0.875rem;
    justify-content: center;
    width: 0.875rem;
  }
`;

export const RemoveCoffeeSelected = styled.button`
  align-items: center;
  background: ${({ theme }) => theme["base-button"]};
  border: 0;
  border-radius: 6px;
  color: ${({ theme }) => theme["base-text"]};
  cursor: pointer;
  display: flex;
  font-size: 0.75rem;
  font-weight: 400;
  gap: 0.25rem;
  height: 2rem;
  justify-content: center;
  line-height: 1.188rem;
  padding: 0 0.5rem;
  text-transform: uppercase;

  svg {
    color: ${({ theme }) => theme.purple};
  }
`;

export const Divider = styled.hr`
  border: 1px solid ${({ theme }) => theme["base-button"]};
  margin-top: 1.5rem;
  height: 1px;
  width: 100%;
`;

export const PriceDetails = styled.li`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  gap: 0.75rem;
  width: 100%;

  div {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0px;
    width: 100%;

    h6 {
      color: ${({ theme }) => theme["base-text"]};
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.125rem;
    }

    span {
      color: ${({ theme }) => theme["base-text"]};
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.313rem;
    }
  }

  .total {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.625rem;
  }
`;

export const ButtonConfirmOrder = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.yellow};
  border: 0;
  border-radius: 6px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  display: flex;
  font-size: 0.875rem;
  font-stretch: 100;
  font-weight: bold;
  gap: 0.25rem;
  height: 2.875rem;
  justify-content: center;
  line-height: 1.375rem;
  padding: 0.75rem 0.5rem;
  text-transform: uppercase;
  width: 100%;
`;
