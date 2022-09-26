import styled from "styled-components";

export const HomeContainer = styled.main`
  margin: 0 auto 9.813rem;
  padding: 0 2rem;
  max-width: 1120px;

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

export const IntroContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  justify-content: space-between;
  margin-top: 5.875rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const IntroContent = styled.div`
  h1 {
    color: ${({ theme }) => theme["base-title"]};
    font-family: ${({ theme }) => theme.baloo};
    font-size: 3rem;
    font-weight: 800;
    line-height: 3.875rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-size: 1.25rem;
    font-stretch: 100;
    line-height: 1.625rem;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 4.125rem;

  @media (min-width: 1024px) {
    align-items: center;
    flex-direction: row;
  }
`;

export const ItemContainer = styled.div`
  p {
    align-items: center;
    display: flex;
    color: ${({ theme }) => theme["base-text"]};
    font-size: 1rem;
    gap: 0.75rem;
    line-height: 1.313rem;
  }

  p + p {
    margin-top: 1.25rem;
  }
`;

const ITEM_ICON_COLORS = {
  purple: "purple",
  baseText: "base-text",
  yellowDark: "base-text",
  yellow: "yellow",
} as const;

type ItemIconProps = {
  color: keyof typeof ITEM_ICON_COLORS;
};

export const ItemIcon = styled.span<ItemIconProps>`
  align-items: center;
  background: ${(props) => props.theme[ITEM_ICON_COLORS[props.color]]};
  border-radius: 1000px;
  display: flex;
  height: 2rem;
  justify-content: center;
  padding: 0.5rem;
  width: 2rem;

  svg {
    color: ${({ theme }) => theme.white};
  }
`;

export const CoffeeList = styled.section`
  margin-top: 8.75rem;

  h2 {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-family: ${({ theme }) => theme.baloo};
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.625rem;
  }

  section {
    display: grid;
    gap: 2rem;
    margin-top: 2.125rem;
    width: 100%;

    @media (min-width: 720px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 1080px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;

export const CoffeeCard = styled.div`
  align-items: center;
  background: ${({ theme }) => theme["base-card"]};
  border-radius: 6px 36px;
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  width: 100%;

  img {
    margin-bottom: 0.75rem;
  }

  h3 {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-family: ${({ theme }) => theme.baloo};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.625rem;
    margin-top: 1rem;
    text-align: center;
  }

  > p {
    color: ${({ theme }) => theme["base-label"]};
    font-size: 0.875rem;
    line-height: 1.125rem;
    margin-top: 0.5rem;
    text-align: center;
  }
`;

export const CoffeeTags = styled.div`
  align-items: center;
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  padding: 0;
`;

export const CoffeeTag = styled.span`
  align-items: center;
  background: ${({ theme }) => theme["yellow-light"]};
  border-radius: 100px;
  color: ${({ theme }) => theme["yellow-dark"]};
  display: inline-flex;
  flex-direction: row;
  font-size: 0.625rem;
  font-weight: 700;
  justify-content: center;
  line-height: 0.813rem;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
`;

export const BuyContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 0.813rem;
  justify-content: space-between;
  margin-top: 2.063rem;
  padding: 0 0.25rem 0 0.25rem;

  p {
    color: ${({ theme }) => theme["base-text"]};
    font-size: 0.875rem;
    line-height: 1.125rem;

    span {
      font-family: ${({ theme }) => theme.baloo};
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 1.938rem;
    }
  }
`;

export const BuyActionsContainer = styled.div`
  align-items: center;
  flex: 1;
  display: flex;
  gap: 0.5rem;
  width: 100%;

  > a {
    align-items: center;
    background: ${({ theme }) => theme["purple-dark"]};
    border: 0;
    border-radius: 6px;
    color: ${({ theme }) => theme["base-card"]};
    cursor: pointer;
    display: flex;
    height: 2.375rem;
    justify-content: center;
    padding: 0.5rem;
    width: 2.375rem;
  }
`;

export const CounterContainer = styled.div`
  align-items: center;
  background: ${({ theme }) => theme["base-button"]};
  border-radius: 6px;
  display: flex;
  gap: 0.25rem;
  height: 2.375rem;
  justify-content: center;
  padding: 0.5rem;
  width: 4.5rem;

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
