import { Checkout } from "../pages/Checkout";
import { CheckoutSuccess } from "../pages/CheckoutSuccess";
import { Home } from "../pages/Home";

const Routes = [
  {
    component: <Home />,
    path: "/",
    defaultLayout: false,
  },
  {
    component: <Checkout />,
    path: "/checkout",
    defaultLayout: true,
  },
  {
    component: <CheckoutSuccess />,
    path: "/checkout/success",
    defaultLayout: true,
  },
];

export default Routes;
