export interface Coffee {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  amount: number;
  tags: { name: string }[];
}

export interface Stock {
  id: number;
  amount: number;
}
