import React, { FocusEvent, useCallback, useState } from "react";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { formatPrice } from "../../utils/format";
import { fetchAddressDataByZipCode } from "../../utils/address";
import { useCart } from "../../hooks/useCart";
import { Coffee } from "../../types";

import {
  ButtonConfirmOrder,
  CheckoutContainer,
  CoffeeCard,
  CoffeeCardContainer,
  CoffeeSelected,
  CoffeeSelectedActions,
  CoffeeSelectedContainer,
  CoffeeSelectedDetails,
  CounterContainer,
  DeliveryAddressCard,
  DeliveryAddressCardContent,
  DeliveryAddressCardInfo,
  Divider,
  FormCheckoutContainer,
  FormCheckoutContent,
  FormGroup,
  FormGroupContainer,
  ListCoffeeSelected,
  PaymentCard,
  PaymentCardContent,
  PaymentCardInfo,
  PaymentMethods,
  PriceDetails,
  RemoveCoffeeSelected,
  RowInfo,
  RowInfoLocal,
  ZipcodeFormGroup,
} from "./styles";

type FormCheckoutData = {
  zipcode: string;
  address: string;
  number: number;
  complement?: string;
  district: string;
  city: string;
  state: string;
  paymentMethod: string;
};

type CartItemsAmount = {
  [key: number]: number;
}

export const Checkout: React.FC = () => {
  const [deliveryValue, setDeliveryValue] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState<'credit' | 'debit' | 'money'>('credit');

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormCheckoutData>();
  const { cart, addCartSuccess, removeCoffee, updateCoffeeAmount } = useCart();

  const cartFormatted = cart.map((coffee) => ({
    subTotal: formatPrice(coffee.price * coffee.amount),
  }));

  const cartItemsAmount = cart.reduce((sumAmount, coffee) => {
    sumAmount[coffee.id] = coffee.amount;
    return sumAmount;
  }, {} as CartItemsAmount);

  const total = cart.reduce((sumTotal, coffee) => {
    sumTotal += coffee.price * coffee.amount;
    return sumTotal;
  }, 0)

  const handleCoffeeIncrement = useCallback((coffee: Coffee) => {
    updateCoffeeAmount({ coffeeId: coffee.id, amount: coffee.amount + 1 });
  }, [cart]);

  const handleCoffeeDecrement = useCallback((coffee: Coffee) => {
    updateCoffeeAmount({ coffeeId: coffee.id, amount: coffee.amount - 1 });
  }, [cart]);

  const handleZipCode = useCallback(async (event: FocusEvent<HTMLInputElement>) => {
    const zipcode = event.target.value.trim();
    if (zipcode.length === 0) return;

    try {
      const response = await fetchAddressDataByZipCode(zipcode);

      setValue('address', response.logradouro);
      setValue('district', response.bairro);
      setValue('city', response.localidade);
      setValue('state', response.uf);
      setDeliveryValue(3.50);
    } catch (error) {
      console.log(error);
    }
  }, [cart]);

  const handleRemoveCoffee = useCallback((coffeeId: number) => {
    removeCoffee(coffeeId);
  }, [cart]);

  const onSubmit = useCallback((formValues: FormCheckoutData) => {
    addCartSuccess(formValues);
    navigate('/checkout/success');
  }, []);

  return (
    <CheckoutContainer>
      <FormCheckoutContainer onSubmit={handleSubmit(onSubmit)}>
        <FormCheckoutContent>
          <h2>Complete seu pedido</h2>

          <DeliveryAddressCard className="card">
            <DeliveryAddressCardContent>
              <MapPinLine size={22} />
              <DeliveryAddressCardInfo>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </DeliveryAddressCardInfo>
            </DeliveryAddressCardContent>
            <FormGroupContainer>
              <ZipcodeFormGroup>
                <input
                  type="text"
                  id="zipcode"
                  placeholder="CEP"
                  {...register("zipcode", { required: true })}
                  className={`${errors.zipcode ? 'form-control' : ''}`}
                  onBlur={handleZipCode}
                />
                {errors.zipcode && <span className="invalid-feedback">CEP é obrigatório</span>}
              </ZipcodeFormGroup>
              <FormGroup>
                <input
                  type="text"
                  id="address"
                  placeholder="Rua"
                  {...register("address", { required: true })}
                  className={`${errors.address ? 'form-control' : ''}`}
                />
                {errors.address && <span className="invalid-feedback">Rua é obrigatório</span>}
              </FormGroup>
              <RowInfo>
                <div>
                  <input
                    type="text"
                    id="number"
                    placeholder="Número"
                    {...register("number", { required: true, valueAsNumber: true })}
                    className={`${errors.number ? 'form-control' : ''}`}
                  />
                  {errors.number && <span className="invalid-feedback">Número é obrigatório</span>}
                </div>
                <div>
                  <input
                    type="text"
                    id="complement"
                    placeholder="Complemento"
                    {...register("complement", { required: false })}
                    className={`${errors.complement ? 'form-control' : ''}`}
                  />
                  {errors.complement && <span className="invalid-feedback">Complemento é obrigatório</span>}
                </div>
              </RowInfo>
              <RowInfoLocal>
                <div>
                  <input
                    type="text"
                    id="district"
                    placeholder="Bairro"
                    className={`${errors.district ? 'form-control' : ''}`}
                    {...register("district", { required: true })}
                  />
                  {errors.district && <span className="invalid-feedback">Bairro é obrigatório</span>}
                </div>
                <div>
                  <input
                    type="text"
                    id="city"
                    placeholder="Cidade"
                    className={`${errors.city ? 'form-control' : ''}`}
                    {...register("city", { required: true })}
                  />
                  {errors.city && <span className="invalid-feedback">Cidade é obrigatório</span>}
                </div>
                <div>
                  <input
                    type="text"
                    id="state"
                    placeholder="UF"
                    className={`${errors.state ? 'form-control' : ''}`}
                    {...register("state", { required: true })}
                  />
                  {errors.state && <span className="invalid-feedback">UF é obrigatório</span>}
                </div>
              </RowInfoLocal>
            </FormGroupContainer>
          </DeliveryAddressCard>
          <PaymentCard className="card">
            <PaymentCardContent>
              <CurrencyDollar size={22} />
              <PaymentCardInfo>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </PaymentCardInfo>
            </PaymentCardContent>
            <PaymentMethods>
              <button
                type="button"
                className={`${paymentMethod === 'credit' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('credit')}
              >
                <CreditCard size={16} />
                <span>Cartão de crédito</span>
              </button>
              <button
                type="button"
                className={`${paymentMethod === 'debit' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('debit')}
              >
                <Bank size={16} />
                <span>Cartão de débito</span>
              </button>
              <button
                type="button"
                className={`${paymentMethod === 'money' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('money')}
              >
                <Money size={16} />
                <span>Dinheiro</span>
              </button>
              <input
                type="hidden"
                value={paymentMethod}
                {...register("paymentMethod", { required: true })}
              />
            </PaymentMethods>
          </PaymentCard>

        </FormCheckoutContent>
        <CoffeeCardContainer>
          <h2>Cafés selecionados</h2>
          <ListCoffeeSelected>
            {cart.map((coffee, key) => (
              <CoffeeSelectedContainer key={coffee.id}>
                <CoffeeSelected>
                  <div>
                    <img src={coffee.image} alt={coffee.title} />
                    <CoffeeSelectedDetails>
                      <h6>{coffee.title}</h6>
                      <CoffeeSelectedActions>
                        <CounterContainer>
                          <button
                            type="button"
                            disabled={coffee.amount <= 1}
                            onClick={() => handleCoffeeDecrement(coffee)}
                          >
                            -
                          </button>
                          <span>{cartItemsAmount[coffee.id] || 0}</span>
                          <button
                            type="button"
                            onClick={() => handleCoffeeIncrement(coffee)}
                          >
                            +
                          </button>
                        </CounterContainer>
                        <RemoveCoffeeSelected onClick={() => handleRemoveCoffee(coffee.id)}>
                          <Trash size={16} /> Remover
                        </RemoveCoffeeSelected>
                      </CoffeeSelectedActions>
                    </CoffeeSelectedDetails>
                  </div>
                  <span>R$ {cartFormatted[key].subTotal}</span>
                </CoffeeSelected>

                <Divider />
              </CoffeeSelectedContainer>
            ))}

            <PriceDetails>
              <div>
                <h6>Total de itens</h6>
                <span>R$ {formatPrice(total)}</span>
              </div>
              <div>
                <h6>Entrega</h6>
                <span>R$ {formatPrice(deliveryValue)}</span>
              </div>
              <div>
                <h3 className="total">Total</h3>
                <span className="total">R$ {formatPrice(total + deliveryValue)}</span>
              </div>
            </PriceDetails>

            <ButtonConfirmOrder type="submit">
              Confirmar pedido
            </ButtonConfirmOrder>
          </ListCoffeeSelected>
        </CoffeeCardContainer>
      </FormCheckoutContainer>
    </CheckoutContainer>
  );
};
