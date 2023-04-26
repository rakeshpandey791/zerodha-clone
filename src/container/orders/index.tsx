import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ORDERS_ROUTE_NAME } from "../../constants/global";
import OrdersTab from "./ordersTab";

const ORDERS_TAB = [
  { title: "Orders", route: "" },
  { title: "GTT", route: ORDERS_ROUTE_NAME.GTT },
  { title: "Baskets", route: ORDERS_ROUTE_NAME.BASKET },
  { title: "SIP", route: ORDERS_ROUTE_NAME.SIP },
  { title: "Alerts", route: ORDERS_ROUTE_NAME.ALERTS },
  { title: "IPO", route: ORDERS_ROUTE_NAME.IPO },
  { title: "Auctions", route: ORDERS_ROUTE_NAME.AUCTIONS },
];

const Orders = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleTabNavigation = (route: string) => {
    navigate(route);
  };

  const addActiveClass = (route: string) => {
    if (location.pathname.includes("/orders/")) {
      return location.pathname === `/orders/${route}`;
    }

    if (!location.pathname.includes("/orders/")) {
      return location.pathname === `/orders${route}`;
    }
  };

  return (
    <div className="overflow-scroll max-h-screen">
      <div className="flex border-b-2 px-5 mb-5">
        {ORDERS_TAB.map((tab, index) => (
          <div
            key={tab.title}
            onClick={() => handleTabNavigation(tab.route)}
            className={`px-4 py-3 cursor-pointer text-sm  ${
              addActiveClass(tab.route) &&
              "border-b-2 border-red-400 text-red-400"
            } `}
          >
            {tab.title}
          </div>
        ))}
      </div>

      <div className="ml-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Orders;
