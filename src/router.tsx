import { createBrowserRouter } from "react-router-dom";

import { ORDERS_ROUTE_NAME, ROUTE_NAME } from "./constants/global";

import Profile from "./container/funds";

import App from "./App";
import Orders from "./container/orders";
import Dashboard from "./container/dashboard";
import Holdings from "./container/holdings";
import Positions from "./container/positions";
import Funds from "./container/funds";
import Apps from "./container/apps";
import Gtt from "./container/orders/gtt";
import OrdersTab from "./container/orders/ordersTab";
import Baskets from "./container/orders/baskets";
import Sip from "./container/orders/sip";
import Alerts from "./container/orders/alerts";
import Ipo from "./container/orders/ipo";
import Auctions from "./container/orders/auctions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: ROUTE_NAME.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: ROUTE_NAME.ORDERS,
        element: <Orders />,
        children: [
          {
            path: "",
            element: <OrdersTab />,
          },
          {
            path: ORDERS_ROUTE_NAME.GTT,
            element: <Gtt />,
          },
          {
            path: ORDERS_ROUTE_NAME.BASKET,
            element: <Baskets />,
          },
          {
            path: ORDERS_ROUTE_NAME.SIP,
            element: <Sip />,
          },
          {
            path: ORDERS_ROUTE_NAME.ALERTS,
            element: <Alerts />,
          },
          {
            path: ORDERS_ROUTE_NAME.IPO,
            element: <Ipo />,
          },
          {
            path: ORDERS_ROUTE_NAME.AUCTIONS,
            element: <Auctions />,
          },
        ],
      },
      {
        path: ROUTE_NAME.HOLDINGS,
        element: <Holdings />,
      },
      {
        path: ROUTE_NAME.POSITIONS,
        element: <Positions />,
      },
      {
        path: ROUTE_NAME.FUNDS,
        element: <Funds />,
      },
      {
        path: ROUTE_NAME.APPS,
        element: <Apps />,
      },
    ],
  },
]);

export default router;
