import React from 'react';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';

import { CheckoutSuccessContainer, CheckoutSuccessContent, ItemIcon, OrderInfo } from './styles';

import deliveryman from '../../assets/deliveryman.svg';

import { useCart } from '../../hooks/useCart';

export const CheckoutSuccess: React.FC = () => {
  const { cartSuccess } = useCart();

  return (
    <CheckoutSuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <CheckoutSuccessContent>
        <OrderInfo>
          <ul>
            <li>
              <ItemIcon color="purple">
                <MapPin size={16} />
              </ItemIcon>
              <div>
                <span>Entrega em <strong>{cartSuccess?.address}, {cartSuccess?.number}</strong></span>
                <span>{cartSuccess?.district} - {cartSuccess?.city}, {cartSuccess?.state}</span>
              </div>
            </li>
            <li>
              <ItemIcon color="yellow">
                <Timer size={16} />
              </ItemIcon>
              <div>
                <span>Previsão de entrega</span>
                <p>20 min - 30 min</p>
              </div>
            </li>
            <li>
              <ItemIcon color="yellowDark">
                <CurrencyDollar size={16} />
              </ItemIcon>
              <div>
                <span>Pagamento na entrega</span>
                {cartSuccess?.paymentMethod === 'credit' && <p>Cartão de Crédito</p>}
                {cartSuccess?.paymentMethod === 'debit' && <p>Cartão de Débito</p>}
                {cartSuccess?.paymentMethod === 'money' && <p>Dinheiro</p>}
              </div>
            </li>
          </ul>
        </OrderInfo>
        <img src={deliveryman} alt="Deliveryman" />
      </CheckoutSuccessContent>
    </CheckoutSuccessContainer>
  )
}
