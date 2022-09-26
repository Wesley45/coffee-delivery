import axios from "axios";

type AddressData = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

export const fetchAddressDataByZipCode = async (zipcode: string) => {
  const response = await axios.get<AddressData>(
    `https://viacep.com.br/ws/${zipcode}/json/`
  );
  return response.data;
};
