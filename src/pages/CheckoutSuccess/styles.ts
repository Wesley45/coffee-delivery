import styled from "styled-components";

export const CheckoutSuccessContainer = styled.main`
  margin: 5rem auto 0;
  max-width: 1120px;
  padding: 0 2rem;

  @media (min-width: 1024px) {
    padding: 0;
  }

  h1 {
    color: ${({ theme }) => theme["yellow-dark"]};
    font-family: ${({ theme }) => theme["baloo"]};
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.625rem;
  }

  p {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-stretch: 100;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.625rem;
  }
`;

export const CheckoutSuccessContent = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 6.375rem;
  justify-content: space-between;
`;

export const OrderInfo = styled.div`
  border-radius: 6px 36px;
  border: 1px solid transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  margin-top: 2.5rem;
  width: 100%;

  ul {
    align-items: flex-start;
    background: ${(props) => props.theme.background};
    border-radius: 6px 36px;
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 2.5rem;
    gap: 2rem;

    li {
      align-items: center;
      display: flex;
      gap: 0.75rem;
      padding: 0px;

      span {
        color: ${({ theme }) => theme["base-text"]};
        display: block;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.313rem;
      }

      p {
        color: ${({ theme }) => theme["base-text"]};
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.313rem;
        margin: 0;
      }
    }
  }
`;

const ITEM_ICON_COLORS = {
  purple: "purple",
  baseText: "base-text",
  yellowDark: "yellow-dark",
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
  gap: 0.5rem;
  height: 2rem;
  justify-content: center;
  padding: 0.5rem;
  width: 2rem;

  svg {
    color: ${({ theme }) => theme.background};
  }
`;
