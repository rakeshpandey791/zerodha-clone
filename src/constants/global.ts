export const ROUTE_TYPE = {
  ROUTE: "route",
  OVERLAY: "overlay",
  MODAL: "modal",
};

export const ROUTE_NAME = {
  DASHBOARD: "dashboard",
  ORDERS: "orders",
  HOLDINGS: "holdings",
  POSITIONS: "positions",
  FUNDS: "funds",
  APPS: "apps",
};

interface IRouteProps {
  type: string;
  title: string;
  route: string;
  icon?: string;
  children?: Array<string>;
}

export const ORDERS_ROUTE_NAME = {
  GTT: "gtt",
  BASKET: "basket",
  SIP: "sip",
  ALERTS: "alerts",
  IPO: "ipo",
  AUCTIONS: "auctions",
};

export const HEADER_MENU_ITEMS: Array<IRouteProps> = [
  {
    type: ROUTE_TYPE.ROUTE,
    title: "Dashboard",
    route: ROUTE_NAME.DASHBOARD,
  },
  {
    type: ROUTE_TYPE.ROUTE,
    title: "Orders",
    route: ROUTE_NAME.ORDERS,
    children: [
      ORDERS_ROUTE_NAME.GTT,
      ORDERS_ROUTE_NAME.BASKET,
      ORDERS_ROUTE_NAME.SIP,
      ORDERS_ROUTE_NAME.ALERTS,
      ORDERS_ROUTE_NAME.IPO,
      ORDERS_ROUTE_NAME.AUCTIONS,
    ],
  },
  {
    type: ROUTE_TYPE.ROUTE,
    title: "Holdings",
    route: ROUTE_NAME.HOLDINGS,
  },
  {
    type: ROUTE_TYPE.ROUTE,
    title: "Positions",
    route: ROUTE_NAME.POSITIONS,
  },
  {
    type: ROUTE_TYPE.ROUTE,
    title: "Funds",
    route: ROUTE_NAME.FUNDS,
  },
  {
    type: ROUTE_TYPE.ROUTE,
    title: "Apps",
    route: ROUTE_NAME.APPS,
  },
];
